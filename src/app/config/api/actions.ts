"use server";

import type { Config } from "../types/configs";

// global config

let config: Config = {
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

// server actions

export async function syncConfig(newConfig: Config) {
  console.log("🚀 syncConfig called with:", newConfig); // 函数调用日志

  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

  // 更新内存中的配置
  config = { ...newConfig };

  console.log("✅ Config updated successfully:", config); // 调试日志
  console.log("📝 Config JSON:", JSON.stringify(config, null, 2)); // 格式化输出

  return {
    status: "success",
    errors: {},
    data: config,
  };
}

export async function getConfig() {
  console.log("🔍 getConfig called"); // 函数调用日志

  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

  console.log("📤 getConfig returning:", config); // 返回数据日志

  return {
    status: "success",
    errors: {},
    data: config,
  };
}
