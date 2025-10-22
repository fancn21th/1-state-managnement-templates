// hooks

import { useEffect } from "react";
import { useConfig } from "../config/hooks";
import { configBStore } from ".";

// this is for the UI components related to ConfigB only
export function useConfigB() {
  // server state from api
  const { serverConfig, updateWholeConfig } = useConfig();

  // sync server state to client state
  useEffect(() => {
    if (serverConfig?.b) {
      configBStore.getState().updateConfigB(serverConfig.b);
    }
  }, [serverConfig]);

  return {
    variables: configBStore((state) => state.configB.variables),
    workflow: configBStore((state) => state.configB.workflow),
  };
}
