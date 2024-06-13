import { createJSONStorage, persist } from "zustand/middleware";

import { SidebarStateProps } from "./types";
import { create } from "zustand";

export const useSidebar = create<SidebarStateProps>()(
  persist(
    (set, get) => ({
      isOpen: false,
      toggleSidebar: () => {
        set({ isOpen: !get().isOpen });
      },
    }),
    {
      name: "sidebar-state-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
