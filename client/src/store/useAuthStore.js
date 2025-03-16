import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user: user}),
      logout: () => set({ userInfo: null }),
    }),
    {
      name: "auth-storage", // Persist key in localStorage
      getStorage: () => localStorage, // Use localStorage
    }
  )
);

export default useAuthStore;
