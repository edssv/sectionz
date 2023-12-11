'use client';

import { notFound } from 'next/navigation';

import { QueueTrackList } from '@/components/queue/queue-track-list';
import { TypographyH2 } from '@/components/ui/typography-h2';
import { TypographyH3 } from '@/components/ui/typography-h3';
import { UserHeader } from '@/components/user/header';
import { UserService } from '@/services/user/user.service';

export default function QueuePage() {
  const playerData = localStorage.getItem('player');

  if (!playerData) return notFound();
  const queueList = JSON.parse(playerData).state.queue;
  console.log(queueList);
  const queue = [];

  return (
    <div className=''>
      <TypographyH3>Очередь</TypographyH3>
      <QueueTrackList data={queueList} />
    </div>
  );
}
