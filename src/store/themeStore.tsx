import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  theme: "emerald" | "black";
  setTheme: (theme: "emerald" | "black") => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "emerald",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "chat-theme",
    }
  )
);
