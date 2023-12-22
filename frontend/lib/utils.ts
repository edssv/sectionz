import { type ClassValue, clsx } from 'clsx';
import * as dateFns from 'date-fns';
import * as locale from 'date-fns/locale';
import { twMerge } from 'tailwind-merge';

import { env } from '@/env.mjs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  input: string | number | Date,
  options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }
): string {
  const date = new Date(input);
  return date.toLocaleDateString('ru-RU', options);
}

export function absoluteUrlStrapi(path: string | undefined) {
  return `${env.NEXT_PUBLIC_STRAPI_URL}${path}`;
}

export function plural(count: number, messages: string[]) {
  if (count <= 0) {
    return messages[3];
  }

  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return messages[0];
  }

  if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
    return messages[1];
  }

  return messages[2];
}

export const parseDuration = (duration?: number | null): string => {
  if (duration) {
    const hours = Math.trunc(duration / 3600);
    const minutes = Math.trunc(duration / 60) % 60;
    const seconds = Math.trunc(duration) % 60;

    const hoursStringified = hours < 10 ? `0${hours}` : hours;
    const minutesStringified = minutes < 10 ? `${minutes}` : minutes;
    const secondsStringified = seconds < 10 ? `0${seconds}` : seconds;

    let result = hours > 0 ? `${hoursStringified}:` : '';
    result += `${minutesStringified}:${secondsStringified}`;

    return result;
  }

  if (duration === 0) {
    return '0:00';
  }

  return '-:--';
};

export const parseAlbumDuration = (duration: number | null): string => {
  if (!duration) {
    return '0:00';
  }

  const hours = Math.trunc(duration / 3600);
  const minutes = Math.trunc(duration / 60) % 60;
  const seconds = Math.trunc(duration) % 60;

  const hoursStringified = hours < 10 ? `${hours}` : hours;
  const minutesStringified = minutes < 10 ? `${minutes}` : minutes;
  const secondsStringified = seconds < 10 ? `${seconds}` : seconds;

  let result;

  if (hours) {
    result = `${hoursStringified} ч. ${minutesStringified} мин.`;
  } else result = `${minutesStringified} мин. ${secondsStringified} сек.`;

  return result;
};

export const formatDistanceToNow = (date: Date) =>
  dateFns.formatDistanceToNowStrict(new Date(date), { locale: locale.ru, addSuffix: true });
