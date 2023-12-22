'use client';

import { useSession } from 'next-auth/react';

import { useCheckUserSavedTracksQuery, type TrackFragment } from '@/gql/types';

import QueueButton from '../queue/queue-button';

import { TrackInfo } from './track-info';

interface MiddleControlsProps {
  trackPlaying: TrackFragment;
}

export function MiddleControls({ trackPlaying }: MiddleControlsProps) {
  const { data: session } = useSession();
  const { data } = useCheckUserSavedTracksQuery({
    variables: { tracks: [trackPlaying?.id] },
    skip: !session || !trackPlaying
  });

  const isSaved = data?.checkUserSavedTracks?.tracks[0].isSaved || false;

  return (
    <div className='flex items-center justify-center gap-4'>
      <QueueButton />
      <TrackInfo isSaved={isSaved} isUnauth={!session} trackPlaying={trackPlaying} />
    </div>
  );
}
