"use client";

import { useConfigA } from "../../model/configA/hooks";

// * hooks
export default function UiConfigA() {
  const { clientConfigA, updateConfigA } = useConfigA();

  return (
    <div className="border">
      Config A
      <textarea
        className="w-full h-64 p-4 font-mono text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-vertical bg-gray-50"
        value={JSON.stringify(clientConfigA, null, 2)}
        onChange={(e) => updateConfigA(JSON.parse(e.target.value))}
      ></textarea>
    </div>
  );
}
