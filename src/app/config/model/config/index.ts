import { sync } from "../../api/configs";
import { Config } from "../../types/configs";
import { create } from "zustand";
import { subscribeWithSelector, devtools } from "zustand/middleware";

// config 包含 所有的 配置子项目

// client types
type ConfigStoreState = {
  config: Config;
};

type ConfigStoreActions = {
  updateWholeConfig: (config: Config) => void;
};

type ConfigStore = ConfigStoreState & ConfigStoreActions;

// store based state management
export const configStore = create<ConfigStore>()(
  subscribeWithSelector(
    devtools(
      (set): ConfigStore => ({
        config: {} as Config,
        updateWholeConfig: (config: Config) => set(() => ({ config })),
      }),
      {
        enabled: true,
      }
    )
  )
);

configStore.subscribe(
  (state) => state.config,
  (config) => {
    sync(config)
      .then((data) => {
        console.log("Config synced successfully:", data);
      })
      .catch((error) => {
        console.error("Config sync failed:", error);
      });
  }
);
