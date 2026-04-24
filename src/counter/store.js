import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCounterStore = create(
  persist(
    (set, get) => ({
      counters: {},

      getCount: (id) => get().counters[id] || 1,

      increment: (id) =>
        set((state) => ({
          counters: {
            ...state.counters,
            [id]: (state.counters[id] || 1) + 1,
          },
        })),

      decrement: (id) =>
        set((state) => ({
          counters: {
            ...state.counters,
            [id]: Math.max(1, (state.counters[id] || 1) - 1),
          },
        })),

      reset: (id) =>
        set((state) => ({
          counters: {
            ...state.counters,
            [id]: 1,
          },
        })),
    }),
    {
      name: "counter-storage",
    }
  )
);

export default useCounterStore;
