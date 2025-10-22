import Blower from "../whistleblower";

export default function MultipleFields({
  value,
  onChange,
}: {
  value: string;
  onChange: (newValue: string) => void;
}) {
  return (
    <div>
      <Blower />
      <textarea
        className="w-full h-64 p-4 font-mono text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-vertical bg-gray-50"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
}
