export default function KeyValues({
  keyValues,
  onAdd,
  onDelete,
  onUpdate,
}: {
  keyValues: Record<string, string>;
  onAdd: (key: string, value: string) => void;
  onDelete: (key: string) => void;
  onUpdate: (key: string, value: string) => void;
}) {
  if (!keyValues || Object.keys(keyValues).length === 0) {
    return (
      <div className="p-2 italic text-gray-500">
        No key-values available.{" "}
        <button
          onClick={() => onAdd("newKey", "newValue")}
          className="ml-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors"
        >
          Add Key-Value
        </button>
        button
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => onAdd("newKey", "newValue")}
        className="ml-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors"
      >
        Add Key-Value
      </button>
      {Object.entries(keyValues).map(([key, value]) => (
        <div key={key} className="flex justify-between p-2 border-b">
          <span className="font-mono font-semibold">
            key:{" "}
            <input
              value={key}
              onChange={(e) => onUpdate(key, e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </span>
          <span className="font-mono font-semibold">
            value:{" "}
            <input
              value={value}
              onChange={(e) => onUpdate(key, e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </span>
          <button
            onClick={() => onDelete(key)}
            className="ml-4 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded transition-colors"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
