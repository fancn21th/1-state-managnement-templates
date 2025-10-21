import { useQuery } from "@tanstack/react-query";
import { get } from "../../api/configs";
import { Config } from "../../types/configs";
import { create } from "zustand";

// types
type ConfigStore = {
  config: Config;
  actions: {
    updateWholeConfig: (config: Config) => void;
  };
};

// store based state management
const configStore = create<ConfigStore>()((set) => ({
  config: {} as Config,
  actions: {
    updateWholeConfig: (config: Config) => set(() => ({ config })),
  },
}));

// hooks
export function useConfig() {
  const { data } = useQuery({
    queryKey: ["config"],
    queryFn: get,
  });

  return {
    serverConfig: data,
    updateWholeConfig: configStore((state) => state.actions.updateWholeConfig),
  };
}
