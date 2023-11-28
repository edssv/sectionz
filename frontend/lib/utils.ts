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

export function convertSecToMinutes(seconds: number, format: 'album' | 'track' = 'track'): string {
  const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

  seconds = Math.floor(seconds);
  let minutes = Math.floor(seconds / 60);

  seconds %= 60;
  minutes %= 60;

  if (format === 'track') {
    return `${minutes}:${padTo2Digits(seconds)}`;
  }
  return `${minutes} мин. ${padTo2Digits(seconds)} сек.`;
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
