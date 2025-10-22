"use client";

import MultipleFields from "../../../../components/multipleFields";
import { useConfigA } from "../../model/configA/hooks";

export default function UiConfigA() {
  const { model, updateModel } = useConfigA();

  return (
    <div className="border p-4 mb-4 border-gray-300 rounded-lg">
      <h2>Config A</h2>
      model:
      <MultipleFields
        value={JSON.stringify(model, null, 2)}
        onChange={(newValue) => updateModel(JSON.parse(newValue))}
      />
    </div>
  );
}
