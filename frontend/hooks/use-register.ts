import type { z } from 'zod';
import { create } from 'zustand';

import type {
  userRegisterConfirmSchema,
  userRegisterEmailSchema,
  userRegisterInfoSchema,
  userRegisterPasswordSchema
} from '@/lib/validations/auth';

export type UserRegisterForms = z.infer<
  typeof userRegisterEmailSchema &
    typeof userRegisterPasswordSchema &
    typeof userRegisterInfoSchema &
    typeof userRegisterConfirmSchema
>;

type State = {
  values: UserRegisterForms;
  step: number;
};

type Actions = {
  setValue: (data: Partial<State['values']>) => void;
  setStep: (step: number) => void;
  reset: () => void;
};

const initialState: State = {
  values: {} as UserRegisterForms,
  step: 0
};

export const useRegister = create<State & Actions>((set) => ({
  ...initialState,
  setValue: (data: Partial<State['values']>) => set((state) => ({ values: { ...state.registerState, ...data } })),
  setStep: (step: number) => set({ step }),
  reset: () => {
    set(initialState);
  }
}));
