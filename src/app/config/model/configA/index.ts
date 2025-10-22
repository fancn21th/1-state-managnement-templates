import { create } from "zustand";

import type { ConfigA } from "../../types/configs";
import { devtools } from "zustand/middleware";

// client types

type ConfigAStoreState = {
  configA: ConfigA;
};

type ConfigAStoreActions = {
  updateConfigA: (config: ConfigA) => void;
};

type ConfigAStore = ConfigAStoreState & ConfigAStoreActions;

// store based state management
export const configAStore = create<ConfigAStore>()(
  devtools(
    (set): ConfigAStore => ({
      configA: {} as ConfigA,
      updateConfigA: (configA: ConfigA) => set(() => ({ configA })),
    }),
    {
      enabled: true,
    }
  )
);
