import { useState } from "react";

export function useModelA() {
  const [count, setCount] = useState(0);
  return [count, setCount] as const;
}
