import { useState } from "react";

// * State Management
//  * Types
//  * API
//  * Utils

export function useModelA() {
  const [count, setCount] = useState(0);
  return [count, setCount] as const;
}
