'use client';

import { useEffect, useState } from 'react';

import { type TrackFragment } from '@/gql/types';
import { cn } from '@/lib/utils';
import { TrackService } from '@/services/track.service';

import { Icons } from './icons';
import { type ButtonProps, Button } from './ui/button';
import { UnauthPopover } from './unauth-popover';

interface TrackSaveButtonProps extends ButtonProps {
  trackId: TrackFragment['id'];
  isSaved: boolean;
  isUnauth: boolean;
}

export function TrackSaveButton({
  className,
  isSaved: saved,
  isUnauth = true,
  trackId,
  ...props
}: TrackSaveButtonProps) {
  const [isClient, setIsClient] = useState(false);
  const [isSaved, setIsSaved] = useState(saved);

  const Icon = isSaved ? Icons.heartFilled : Icons.heart;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setIsSaved(saved);
  }, [saved]);

  const handleClick = () => {
    if (isSaved) {
      TrackService.removeUserSavedTrack(trackId).then((res) => setIsSaved(res.isSaved));
    } else {
      TrackService.saveTrackForCurrentUser(trackId).then((res) => setIsSaved(res.isSaved));
    }
  };

  if (!isClient) return null;

  if (isUnauth) {
    return (
      <UnauthPopover description='Улучшайте рекомендации и сохраняйте музыку после входа в систему.'>
        {' '}
        <Button className={className} title='Добавить в библиотеку' {...props}>
          <Icon className='h-4 w-4' />
        </Button>
      </UnauthPopover>
    );
  }

  return (
    <Button
      className={cn(className, { 'flex text-primary': isSaved })}
      title={isSaved ? 'Удалить из библиотеки' : 'Добавить в библиотеку'}
      onClick={handleClick}
      {...props}
    >
      <Icon className='h-4 w-4' />
    </Button>
  );
}
