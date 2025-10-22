// hooks

import { useEffect } from "react";
import type { Config } from "../../types/configs";
import { useConfig } from "../config/hooks";
import { configAStore } from ".";
import { Model } from "../../types/models";

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

  return {
    model: configAStore((state) => state.configA.model),
    updateModel: (model: Model) => {
      configAStore.getState().updateModel(model);
      // update whole config
      const newConfig = { ...serverConfig, a: { model } } as Config;
      updateWholeConfig(newConfig);
    },
  };
}
