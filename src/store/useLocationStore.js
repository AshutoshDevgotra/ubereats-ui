import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLocationStore = create(
  persist(
    (set) => ({
      location: null,

      setLocation: (loc) => set({ location: loc }),
      clearLocation: () => set({ location: null })
    }),
    {
      name: "ubereats-location"
    }
  )
);
