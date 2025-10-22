export default function KeyValues({
  keyValues,
}: {
  keyValues: Record<string, string>;
}) {
  if (!keyValues || Object.keys(keyValues).length === 0) {
    return (
      <div className="p-2 italic text-gray-500">No key-values available.</div>
    );
  }

  return (
    <>
      {Object.entries(keyValues).map(([key, value]) => (
        <div key={key} className="flex justify-between p-2 border-b">
          <span className="font-mono font-semibold">{key}</span>
          <span className="font-mono">{value}</span>
        </div>
      ))}
    </>
  );
}
