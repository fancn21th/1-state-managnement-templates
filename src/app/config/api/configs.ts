import type { Config } from "../types/configs";
import { getConfig, syncConfig } from "./actions";

// client api function

export async function sync(config: Config) {
  const result = await syncConfig(config);

  if (result.status === "success" && result.data) {
    await syncConfig(result.data);
  }

  throw new Error("Sync failed");
}

export async function get(): Promise<Config> {
  const result = await getConfig();

  if (result.status === "success" && result.data) {
    return result.data;
  }

  throw new Error("Sync failed");
}
