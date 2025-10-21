import type { Config } from "../types/configs";

// client api functions - 选择使用哪种方式：

// 方式1: 使用 Server Actions (推荐)
import { getConfig, syncConfig } from "./actions";

export async function sync(config: Config) {
  console.log("🌐 Client sync called with:", config);

  const result = await syncConfig(config);

  if (result.status === "success" && result.data) {
    console.log("✅ Client sync successful:", result.data);
    return result.data;
  }

  console.error("❌ Client sync failed:", result);
  throw new Error("Sync failed");
}

export async function get(): Promise<Config> {
  console.log("🌐 Client get called");

  const result = await getConfig();

  if (result.status === "success" && result.data) {
    console.log("✅ Client get successful:", result.data);
    return result.data;
  }

  console.error("❌ Client get failed:", result);
  throw new Error("Get failed");
}

// 方式2: 使用 API Routes (备选)
// export async function syncViaAPI(config: Config) {
//   console.log("🌐 Client sync via API called with:", config);

//   const response = await fetch('/api/config', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(config),
//   });

//   const result = await response.json();

//   if (result.status === "success" && result.data) {
//     console.log("✅ API sync successful:", result.data);
//     return result.data;
//   }

//   console.error("❌ API sync failed:", result);
//   throw new Error("Sync failed");
// }

// export async function getViaAPI(): Promise<Config> {
//   console.log("🌐 Client get via API called");

//   const response = await fetch('/api/config');
//   const result = await response.json();

//   if (result.status === "success" && result.data) {
//     console.log("✅ API get successful:", result.data);
//     return result.data;
//   }

//   console.error("❌ API get failed:", result);
//   throw new Error("Get failed");
// }
