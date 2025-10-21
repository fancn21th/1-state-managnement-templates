import type { Config } from "../types/configs";

// server actions

export async function syncConfig(config: Config) {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

  return {
    status: "success",
    errors: {},
    data: config,
  };
}

export async function getConfig() {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

  const config: Config = {
    a: {
      model: {
        id: "model-123",
        name: "Example Model",
        displayName: "Example Model Display Name",
      },
    },
    b: {
      variables: {
        VAR1: "value1",
        VAR2: "value2",
      },
      workflow: {
        id: "workflow-456",
        name: "Example Workflow",
      },
    },
  };

  return {
    status: "success",
    errors: {},
    data: config,
  };
}
