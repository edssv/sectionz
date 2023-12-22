'use client';

import { useState } from 'react';

import type { TrackFragment } from '@/gql/types';
import { AlbumService } from '@/services/album.service';

import { Icons } from './icons';
import type { ButtonProps } from './ui/button';
import { Button } from './ui/button';
import { UnauthPopover } from './unauth-popover';

interface SaveButtonProps extends ButtonProps {
  albumId: TrackFragment['id'];
  isSaved: boolean;
  isUnauth: boolean;
}

export function AlbumSaveButton({ albumId, isSaved: saved, isUnauth = true, ...props }: SaveButtonProps) {
  const [isSaved, setIsSaved] = useState(saved);

  const Icon = isSaved ? Icons.checkCircle : Icons.plusCircle;

  const handleClick = () => {
    if (isSaved) {
      AlbumService.removeUserSavedAlbum(albumId).then((res) => setIsSaved(res.isSaved));
    } else {
      AlbumService.saveAlbumForCurrentUser(albumId).then((res) => setIsSaved(res.isSaved));
    }
  };

  if (isUnauth) {
    return (
      <UnauthPopover description='Сохраняйте избранное в своей библиотеке после входа в систему'>
        <Button {...props}>
          <Icon className='mr-2 h-4 w-4' />
          Сохранить в библиотеке
        </Button>
      </UnauthPopover>
    );
  }

  return (
    <Button onClick={handleClick} {...props}>
      <Icon className='mr-2 h-4 w-4' />
      {isSaved ? 'Удалить из библиотеки' : 'Сохранить в библиотеке'}
    </Button>
  );
}
