/* eslint-disable react-hooks/exhaustive-deps */
import type React from 'react';
import { useDebugValue, useEffect, useState } from 'react';

const parse = (value: string) => {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

export const useLocalStorage = <S>(
  key: string,
  initialState?: S | (() => S)
): [S, React.Dispatch<React.SetStateAction<S>>] => {
  const [state, setState] = useState<S>(initialState as S);
  useDebugValue(state);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) setState(parse(item));
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
