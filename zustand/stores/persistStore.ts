import create from 'zustand'
import { persist } from 'zustand/middleware'

type PersistedCounter = {
  value: number
  set: (v: number) => void
}

export const usePersistedCounter = create<PersistedCounter>()(
  persist(
    (set) => ({
      value: 0,
      set: (v: number) => set({ value: v }),
    }),
    {
      name: 'zustand-persisted-counter',
    }
  )
)
