"use client";

import MultipleFields from "../../../../components/multipleFields";
import { useConfigA } from "../../model/configA/hooks";

export default function UiConfigA() {
  const { model, updateModel } = useConfigA();

  return (
    <div className="border p-4">
      Config A
      <MultipleFields
        value={JSON.stringify(model, null, 2)}
        onChange={(newValue) => updateModel(JSON.parse(newValue))}
      />
    </div>
  );
}
