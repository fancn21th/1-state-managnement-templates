// hooks

import { useEffect } from "react";
import { Config, ConfigA } from "../../types/configs";
import { useConfig } from "../config/hooks";
import { configAStore } from ".";

// helper function to update whole config when configA changes
const updateWholeConfigWithConfigA = (
  configA: ConfigA,
  updateWholeConfig: (config: Config) => void,
  currentConfig?: Config
) => {
  // TODO: improve update with immer
  const newConfig = { ...currentConfig, a: configA } as Config;
  updateWholeConfig(newConfig);
};

// this is for the UI components related to ConfigA only
export function useConfigA() {
  // server state from api
  const { serverConfig, updateWholeConfig } = useConfig();

  // sync server state to client state
  useEffect(() => {
    if (serverConfig?.a) {
      configAStore.getState().updateConfigA(serverConfig.a);
    }
  }, [serverConfig]);

  // Enhanced updateConfigA that also updates the whole config
  const handleUpdateConfigA = (newConfigA: ConfigA) => {
    // Update local configA state
    configAStore.getState().updateConfigA(newConfigA);
    // Update whole config
    updateWholeConfigWithConfigA(newConfigA, updateWholeConfig, serverConfig);
  };

  return {
    serverConfigA: serverConfig?.a,
    clientConfigA: configAStore((state) => state.configA),
    updateConfigA: handleUpdateConfigA,
  };
}
