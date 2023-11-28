'use client';

import { useGetTrackById } from '@/hooks/useGetTrackById';
import { useLoadTrackUrl } from '@/hooks/useLoadTrackUrl';
import { usePlayer } from '@/hooks/usePlayer';

import { PlayerContent } from './player-content';

export function Player() {
  const player = usePlayer();
  const { track } = useGetTrackById(player.activeId!);

  const trackUrl = useLoadTrackUrl(track!);

  if (!track || !trackUrl || !player.activeId) {
    return null;
  }

  const handleMouseLeave = () => {
    player.setIsShownVolumeController(false);
  };

  return (
    <div className='fixed bottom-0 z-50 w-full' onMouseLeave={handleMouseLeave}>
      <PlayerContent key={trackUrl} track={track} trackUrl={trackUrl} />
    </div>
  );
}
