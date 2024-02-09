import { create } from 'zustand'

export const useStoreSisReports = create((set) => ({
  user: { name: null, rol: null, id: null },
  setUser: (user) => set({ user }),
  isLoaded: false,
  setIsLoaded: (isLoaded) => set({ isLoaded }),
}))
