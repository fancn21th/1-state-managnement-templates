import { useQuery } from "@tanstack/react-query";
import { get, sync } from "../../api/configs";
import { Config } from "../../types/configs";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

// config 包含 所有的 配置子项目

// types
type ConfigStoreState = {
  config: Config;
};

type ConfigStoreActions = {
  updateWholeConfig: (config: Config) => void;
};

type ConfigStore = ConfigStoreState & ConfigStoreActions;

// store based state management
const configStore = create<ConfigStore>()(
  subscribeWithSelector((set) => ({
    config: {} as Config,
    updateWholeConfig: (config: Config) => set(() => ({ config })),
  }))
);

// 监听配置变化并同步到后端（修复版本）
configStore.subscribe(
  (state) => state.config,
  (config) => {
    // 使用原生的sync函数而不是useMutation
    sync(config)
      .then((data) => {
        console.log("Config synced successfully:", data);
      })
      .catch((error) => {
        console.error("Config sync failed:", error);
        // 可以在这里添加更多的错误处理逻辑
      });
  }
);

// hooks <===> class (fields + methods)
export function useConfig() {
  const { data } = useQuery({
    queryKey: ["config"],
    queryFn: get,
  });

  return {
    serverConfig: data,
    updateWholeConfig: configStore((state) => state.updateWholeConfig),
  };
}
