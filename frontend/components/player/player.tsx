'use client';

import { useGetTrackById } from '@/hooks/use-get-track-by-id';
import { useLoadTrackUrl } from '@/hooks/use-load-track-url';
import { usePlayer } from '@/hooks/use-player';

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
