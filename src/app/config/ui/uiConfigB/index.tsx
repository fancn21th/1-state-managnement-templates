"use client";

import MultipleFields from "../../../../components/multipleFields";
import KeyValues from "../../../../components/keyValues";
import { useConfigB } from "../../model/configB/hooks";

export default function UiConfigB() {
  const { variables, workflow, addVariable, removeVariable, updateVariable } =
    useConfigB();

  return (
    <div className="border p-4 mb-4 border-gray-300 rounded-lg">
      <h2>Config B</h2>
      variables:
      <KeyValues
        keyValues={variables}
        onAdd={addVariable}
        onDelete={removeVariable}
        onUpdate={updateVariable}
      />
      <br />
      workflow:
      <MultipleFields
        value={JSON.stringify(workflow, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
}
