import { type ClassValue, clsx } from 'clsx';
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

export const parseDuration = (duration: number | null): string => {
  if (duration !== null) {
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

  return '0:00';
};

export const parseAlbumDuration = (duration: number | null): string => {
  if (duration === null) {
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
