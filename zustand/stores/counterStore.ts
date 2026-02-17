import create from 'zustand'
import { devtools } from 'zustand/middleware'

type CounterState = {
  count: number
  increase: (by?: number) => void
  decrease: (by?: number) => void
  reset: () => void
  asyncIncrease: (by?: number) => Promise<void>
}

export const useCounterStore = create<CounterState>()(
  devtools((set) => ({
    count: 0,
    increase: (by = 1) => set((s) => ({ count: s.count + by })),
    decrease: (by = 1) => set((s) => ({ count: s.count - by })),
    reset: () => set({ count: 0 }),
    asyncIncrease: async (by = 1) => {
      await new Promise((r) => setTimeout(r, 700))
      set((s) => ({ count: s.count + by }))
    },
  }))
)
