"use client";

import { useModelA } from "../../model/modelA";

export default function UiX() {
  const [count, setCount] = useModelA();
  return (
    <div className="border">
      UI X Component
      <button className="ml-4 p-1 border" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <span className="ml-2">Count: {count}</span>
    </div>
  );
}
