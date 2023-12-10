/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect } from 'react';

import { useTrackIncrementPlayCountLazyQuery } from '@/gql/types';
import { usePlayerAPI } from '@/stores/use-player-store';

import player from '../../lib/player';
import { toast } from '../ui/use-toast';

const AUDIO_ERRORS = {
  aborted: 'The video playback was aborted.',
  corrupt: 'The audio playback was aborted due to a corruption problem.',
  notFound: 'The track file could not be found. It may be due to a file move or an unmounted partition.',
  unknown: 'An unknown error occurred.'
};

/**
 * Handle app-level IPC Events init and cleanup
 */
export default function PlayerEvents() {
  const [trackIncrementPlayCount] = useTrackIncrementPlayCountLazyQuery();
  const playerAPI = usePlayerAPI();

  useEffect(() => {
    function handleAudioError(e: ErrorEvent) {
      playerAPI.stop();

      const element = e.target as HTMLAudioElement;

      if (element) {
        const { error } = element;

        if (!error) return;

        switch (error.code) {
          case error.MEDIA_ERR_ABORTED:
            toast({ variant: 'destructive', description: AUDIO_ERRORS.aborted });
            break;
          case error.MEDIA_ERR_DECODE:
            toast({ variant: 'destructive', description: AUDIO_ERRORS.corrupt });
            break;
          case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            toast({ variant: 'destructive', description: AUDIO_ERRORS.notFound });
            break;
          default:
            toast({ variant: 'destructive', description: AUDIO_ERRORS.unknown });
            break;
        }
      }
    }

    async function incrementPlayCount() {
      if (player.isThresholdReached() && !player.isTrackPlayCountUpdated()) {
        const track = player.getTrack();

        if (track) {
          const { data } = await trackIncrementPlayCount({ variables: { trackId: track.id } });

          if (data?.trackIncrementPlayCount) {
            player.setTrackPlayCountUpdated();
          }
        }
      }
    }
    // Bind player events
    // Audio Events
    player.getAudio().addEventListener('ended', playerAPI.next);
    player.getAudio().addEventListener('error', handleAudioError);
    player.getAudio().addEventListener('timeupdate', incrementPlayCount);

    return function cleanup() {
      player.getAudio().removeEventListener('ended', playerAPI.next);
      player.getAudio().removeEventListener('error', handleAudioError);
      player.getAudio().removeEventListener('timeupdate', incrementPlayCount);
    };
  }, [playerAPI]);

  return null;
}
