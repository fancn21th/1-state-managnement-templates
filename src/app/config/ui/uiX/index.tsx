"use client";

import { useCount } from "../../model/modelA";

// * hooks

export default function UiX() {
  const { count, increment } = useCount();

  return (
    <div className="border">
      UI X Component
      <button className="ml-4 p-1 border" onClick={increment}>
        Increment
      </button>
      <span className="ml-2">Count: {count}</span>
    </div>
  );
}
