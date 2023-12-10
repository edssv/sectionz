/* eslint-disable @typescript-eslint/no-use-before-define */
import debounce from 'lodash.debounce';
import { type StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

import client from '@/apollo/apollo-client';
import { TrackDocument, TrackListDocument } from '@/gql/types';
import type {
  TrackQuery,
  TrackQueryVariables,
  TrackFragment,
  TrackListQuery,
  TrackListQueryVariables
} from '@/gql/types';
import player from '@/lib/player';
import { PlayerStatus, Repeat } from '@/lib/types/types';
import { shuffleTracks } from '@/lib/utils-player';

import { createStore } from './store-helpers';

type PlayerState = {
  queue: TrackFragment[];
  oldQueue: TrackFragment[];
  queueCursor: number | null;
  queueOrigin: null | string;
  repeat: Repeat;
  shuffle: boolean;
  playerStatus: PlayerStatus;
  api: {
    start: (queue: TrackFragment[], id?: number) => Promise<void>;
    play: () => Promise<void>;
    pause: () => void;
    playPause: () => void;
    stop: () => void;
    previous: () => Promise<void>;
    next: () => Promise<void>;
    toggleShuffle: (value?: boolean) => void;
    toggleRepeat: (value?: Repeat) => void;
    setVolume: (volume: number) => void;
    setMuted: (muted: boolean) => void;
    jumpTo: (to: number) => void;
    jumpToPlayingTrack: () => Promise<void>;
    startFromQueue: (index: number) => Promise<void>;
    clearQueue: () => void;
    removeFromQueue: (index: number) => void;
    addInQueue: (tracksIDs: number[]) => Promise<void>;
    addNextInQueue: (tracksIDs: number[]) => Promise<void>;
    setQueue: (tracks: TrackFragment[]) => void;
  };
};

const usePlayerStore = createPlayerStore<PlayerState>((set, get) => ({
  queue: [], // Tracks to be played
  oldQueue: [], // Queue backup (in case of shuffle)
  queueCursor: null, // The cursor of the queue
  queueOrigin: null, // URL of the queue when it was started
  repeat: Repeat.NONE, // the current repeat state (one, all, none)
  shuffle: false, // If shuffle mode is enabled
  playerStatus: PlayerStatus.STOP, // Player status
  api: {
    /**
     * Start playing audio (queue instantiation, shuffle and everything...)
     * TODO: this function ~could probably~ needs to be refactored ~a bit~
     */
    start: async (queue, id?): Promise<void> => {
      if (queue.length === 0) return;

      const state = get();

      let newQueue = [...queue];

      // Check if there's already a queue planned
      if (newQueue === null && state.queue !== null) {
        newQueue = state.queue;
      }

      const { shuffle } = state;

      const oldQueue = [...newQueue];
      const trackID = id || newQueue[0].id;

      // Typically, if we are in the playlists generic view without any view selected
      if (newQueue.length === 0) return;

      const queuePosition = newQueue.findIndex((track) => track.id === trackID);

      // If a track exists
      if (queuePosition > -1) {
        const trackId = newQueue[queuePosition].id;

        const { data } = await client.query<TrackQuery, TrackQueryVariables>({
          query: TrackDocument,
          variables: { id: trackId }
        });

        player.setTrack(data.track.data);
        await player.play();

        let queueCursor = queuePosition; // Clean that variable mess later

        // Check if we have to shuffle the queue
        if (shuffle) {
          // Shuffle the tracks
          newQueue = shuffleTracks(newQueue, queueCursor);
          // Let's set the cursor to 0
          queueCursor = 0;
        }

        // Determine the queue origin in case the user wants to jump to the current
        // track
        const { hash } = window.location;
        const queueOrigin = hash.substring(1); // remove #

        set({
          queue: newQueue,
          queueCursor,
          queueOrigin,
          oldQueue,
          playerStatus: PlayerStatus.PLAY
        });
      }
    },

    /**
     * Play/resume audio
     */
    play: async () => {
      await player.play();

      set({ playerStatus: PlayerStatus.PLAY });
    },

    /**
     * Pause audio
     */
    pause: (): void => {
      player.pause();

      set({ playerStatus: PlayerStatus.PAUSE });
    },

    /**
     * Toggle play/pause
     * FIXME: how to start when player is stopped?
     */
    playPause: () => {
      const playerAPI = get().api;
      const { queue /* , playerStatus */ } = get();
      const { paused } = player.getAudio();

      // if (playerStatus === PlayerStatus.STOP) {
      //   playerAPI.start(tracks);
      // } else
      if (paused && queue.length > 0) {
        playerAPI.play();
      } else {
        playerAPI.pause();
      }
    },

    /**
     * Stop the player
     */
    stop: (): void => {
      player.stop();

      set({
        queue: [],
        queueCursor: null,
        playerStatus: PlayerStatus.STOP
      });
    },

    /**
     * Jump to the next track
     */
    next: async () => {
      const { queue, queueCursor, repeat } = get();
      let newQueueCursor;

      if (queueCursor !== null) {
        if (repeat === Repeat.ONE) {
          newQueueCursor = queueCursor;
        } else if (repeat === Repeat.ALL && queueCursor === queue.length - 1) {
          // is last track
          newQueueCursor = 0; // start with new track
        } else {
          newQueueCursor = queueCursor + 1;
        }

        const track = queue[newQueueCursor];

        if (track !== undefined) {
          player.setTrack(track);
          await player.play();
          set({
            playerStatus: PlayerStatus.PLAY,
            queueCursor: newQueueCursor
          });
        } else {
          get().api.stop();
        }
      }
    },

    /**
     * Jump to the previous track, or restart the current track after a certain
     * treshold
     */
    previous: async () => {
      const currentTime = player.getCurrentTime();

      const { queue, queueCursor } = get();
      let newQueueCursor = queueCursor;

      if (queueCursor !== null && newQueueCursor !== null) {
        // If track started less than 5 seconds ago, play th previous track,
        // otherwise replay the current one
        if (currentTime < 5) {
          newQueueCursor = queueCursor - 1;
        }

        const newTrack = queue[newQueueCursor];

        // tslint:disable-next-line
        if (newTrack !== undefined) {
          player.setTrack(newTrack);
          await player.play();

          set({
            playerStatus: PlayerStatus.PLAY,
            queueCursor: newQueueCursor
          });
        } else {
          get().api.stop();
        }
      }
    },

    /**
     * Enable/disable shuffle
     */
    toggleShuffle: (shuffle) => {
      shuffle = shuffle ?? !get().shuffle;

      localStorage.setItem('audioShuffle', JSON.stringify(shuffle));

      const { oldQueue, queue, queueCursor } = get();

      if (queueCursor !== null) {
        const trackPlayingID = queue[queueCursor].id;

        // If we need to shuffle everything
        if (shuffle) {
          // Let's shuffle that
          const newQueue = shuffleTracks([...queue], queueCursor);

          set({
            queue: newQueue,
            queueCursor: 0,
            oldQueue: queue,
            shuffle: true
          });
        } else {
          // Unshuffle the queue by restoring the initial queue
          const currentTrackIndex = oldQueue.findIndex((track) => trackPlayingID === track.id);

          // Roll back to the old but update queueCursor
          set({
            queue: [...oldQueue],
            queueCursor: currentTrackIndex,
            shuffle: false
          });
        }
      }
    },

    /**
     * Enable disable repeat
     */
    toggleRepeat: (repeat) => {
      // Get to the next repeat type if none is specified
      if (repeat === undefined) {
        switch (get().repeat) {
          case Repeat.NONE:
            repeat = Repeat.ALL;
            break;
          case Repeat.ALL:
            repeat = Repeat.ONE;
            break;
          case Repeat.ONE:
            repeat = Repeat.NONE;
            break;
        }
      }

      localStorage.setItem('audioRepeat', JSON.stringify(repeat));
      set({ repeat });
    },

    /**
     * Set volume
     */
    setVolume: (volume) => {
      player.setVolume(volume);
      saveVolume(volume);
    },

    /**
     * Mute/unmute the audio
     */
    setMuted: (muted = false) => {
      if (muted) player.mute();
      else player.unmute();

      localStorage.setItem('audioMuted', JSON.stringify(muted));
    },

    /**
     * Jump to a time in the track
     */
    jumpTo: (to) => {
      player.setCurrentTime(to);
    },

    /**
     * Toggle play/pause
     */
    jumpToPlayingTrack: async () => {
      const queueOrigin = get().queueOrigin ?? '#/library';
      await router.navigate(queueOrigin);

      setTimeout(() => {
        useLibraryStore.getState().api.highlightPlayingTrack(true);
      }, 0);
    },

    /**
     * Start audio playback from the queue
     */
    startFromQueue: async (index) => {
      const { queue } = get();
      const track = queue[index];

      player.setTrack(track);
      await player.play();

      set({
        queue,
        queueCursor: index,
        playerStatus: PlayerStatus.PLAY
      });
    },

    /**
     * Clear the queue
     */
    clearQueue: () => {
      const { queueCursor } = get();
      const queue = [...get().queue];

      if (queueCursor !== null) {
        queue.splice(queueCursor + 1, queue.length - queueCursor);

        set({
          queue
        });
      }
    },

    /**
     * Remove track from queue
     */
    removeFromQueue: (index) => {
      const { queueCursor } = get();
      const queue = [...get().queue];

      if (queueCursor !== null) {
        queue.splice(queueCursor + index + 1, 1);

        set({
          queue
        });
      }
    },

    /**
     * Add tracks at the end of the queue
     */
    addInQueue: async (tracksIDs) => {
      const { queue, queueCursor } = get();
      const { data } = await client.query<TrackListQuery, TrackListQueryVariables>({
        query: TrackListDocument,
        variables: { filters: { id: { in: tracksIDs } } }
      });
      const newQueue = [...queue, ...data.tracks.data];

      set({
        queue: newQueue,
        // Set the queue cursor to zero if there is no current queue
        queueCursor: queue.length === 0 ? 0 : queueCursor
      });
    },

    /**
     * Add tracks at the beginning of the queue
     */
    addNextInQueue: async (tracksIDs) => {
      const { data } = await client.query<TrackListQuery, TrackListQueryVariables>({
        query: TrackListDocument,
        variables: { filters: { id: { in: tracksIDs } } }
      });

      const { queueCursor } = get();
      const queue = [...get().queue];

      if (queueCursor !== null) {
        queue.splice(queueCursor + 1, 0, ...data.tracks.data);
        set({
          queue
        });
      } else {
        set({
          queue,
          queueCursor: 0
        });
      }
    },

    /**
     * Set the queue
     */
    setQueue: (tracks: TrackFragment[]) => {
      set({
        queue: tracks
      });
    }
  }
}));

export default usePlayerStore;

export function usePlayerAPI() {
  return usePlayerStore((state) => state.api);
}

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

/**
 * Special store for player
 */
function createPlayerStore<T extends PlayerState>(store: StateCreator<T>) {
  return createStore(
    persist(store, {
      name: 'player',
      onRehydrateStorage: () => (state, error) => {
        if (error || state == null) {
          logger.error('an error happened during player store hydration', error);
        } else {
          //  Let's set the player's src and currentTime with the info we have persisted in store
          const { queue, queueCursor } = state;
          if (queue && queueCursor) {
            const track = queue[queueCursor];
            player.setTrack(track);
          }
        }
      },
      merge(persistedState, currentState) {
        if (persistedState == null) {
          persistedState = {
            playerStatus: PlayerStatus.STOP
          };
        }

        return {
          ...currentState,
          ...(persistedState as Partial<PlayerState>),
          // API should never be persisted
          api: currentState.api,
          // Instantiated should never be true
          instantiated: false,
          // If player status was playing, set it to pause, as it makes no sense
          // to auto-start playing a song when Museeks starts
          playerStatus:
            (persistedState as PlayerState).playerStatus === PlayerStatus.PLAY
              ? PlayerStatus.PAUSE
              : (persistedState as PlayerState).playerStatus
        };
      }
    })
  );
}

/**
 * Make sure we don't save audio volume to the file system too often
 */
const saveVolume = debounce((volume: number) => {
  localStorage.setItem('audioVolume', JSON.stringify(volume));
}, 500);
