'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

import { QueueTrackList } from '@/components/queue/queue-track-list';

export default function QueuePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  let queueList = [];

  if (typeof localStorage !== 'undefined') {
    const playerData = localStorage.getItem('player');

    if (!playerData) {
      return notFound();
    }

    queueList = JSON.parse(playerData).state.queue;
  }

  return (
    <div className='space-y-6 lg:space-y-8'>
      <h1 className='heading text-2xl'>Очередь</h1>
      {isClient ? <QueueTrackList data={queueList} /> : null}
    </div>
  );
}
