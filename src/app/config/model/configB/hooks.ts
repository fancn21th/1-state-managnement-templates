// hooks

import { useEffect } from "react";
import { useConfig } from "../config/hooks";
import { configBStore } from ".";
import { Config } from "../../types/configs";
import { Workflow } from "../../types/workflows";

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
    addVariable: (key: string, value: string) => {
      // add variable in client state
      const pre = configBStore.getState().configB.variables;
      const cur = { ...pre, [key]: value };
      configBStore.getState().updateVariables(cur);

      // update whole config
      const newConfig = {
        ...serverConfig,
        b: { ...configBStore.getState().configB, variables: cur },
      } as Config;
      updateWholeConfig(newConfig);
    },
    removeVariable: (key: string) => {
      // remove variable in client state
      const pre = configBStore.getState().configB.variables;
      const cur = { ...pre };
      delete cur[key];
      configBStore.getState().updateVariables(cur);

      // update whole config
      const newConfig = {
        ...serverConfig,
        b: { ...configBStore.getState().configB, variables: cur },
      } as Config;
      updateWholeConfig(newConfig);
    },
    updateVariable: (key: string, value: string) => {
      // update variable in client state
      const pre = configBStore.getState().configB.variables;
      const cur = { ...pre, [key]: value };
      configBStore.getState().updateVariables(cur);

      // update whole config
      const newConfig = {
        ...serverConfig,
        b: { ...configBStore.getState().configB, variables: cur },
      } as Config;
      updateWholeConfig(newConfig);
    },
    updateWorkflow: (workflow: Workflow) => {
      configBStore.getState().updateWorkflow(workflow);
      // update whole config
      const newConfig = {
        ...serverConfig,
        b: { ...configBStore.getState().configB, workflow },
      } as Config;
      updateWholeConfig(newConfig);
    },
  };
}
