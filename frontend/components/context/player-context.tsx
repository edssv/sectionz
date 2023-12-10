import { createContext, useState } from 'react';

import type { TrackFragment as Track } from '@/gql/types';
import { absoluteUrlStrapi } from '@/lib/utils';

const audio = new Audio();

interface PlayerContextInterface {
  currentTrack: Track | undefined;
  setCurrentTrack: (track: Track) => void;
}

export const PlayerContext = createContext<PlayerContextInterface | undefined>({
  currentTrack: undefined,
  setCurrentTrack: () => {}
});

interface PlayerProviderProps {
  children: React.ReactNode;
}

function PlayerProvider({ children }: PlayerProviderProps) {
  const [currentTrack, setCurrentTrack] = useState<Track | undefined>();
  const [playlist, setPlaylist] = useState<Track[] | undefined>();
  const [isPlaying, setIsPlaying] = useState(false);

  function handleToggleAudio(track: Track) {
    if (currentTrack.id !== track.id) {
      setCurrentTrack(track);
      setPlaying(true);

      audio.src = absoluteUrlStrapi(track.attributes.audio.data.attributes.url);
      audio.currentTime = 0;
      audio.play();

      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  }

  const value = { audio, currentTrack, isPlaying, handleToggleAudio };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export default PlayerProvider;
