'use client';

import { notFound } from 'next/navigation';

import { QueueTrackList } from '@/components/queue/queue-track-list';

export default function QueuePage() {
  const playerData = localStorage.getItem('player');

  if (!playerData) return notFound();
  const queueList = JSON.parse(playerData).state.queue;
  console.log(queueList);
  const queue = [];

  return (
    <div className='space-y-8'>
      <h1 className='heading text-2xl'>Очередь</h1>
      <QueueTrackList data={queueList} />
    </div>
  );
}
