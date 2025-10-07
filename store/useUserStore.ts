import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStore {
  user: string;
  setUser: (user: string) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: "",
      setUser: (user: string) => set({ user }),
    }),
    {
      name: "currentUser",
      partialize: (state) => ({ user: state.user }),
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
