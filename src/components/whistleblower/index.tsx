export default function Blower() {
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-purple-500",
    "text-yellow-500",
    "text-pink-500",
    "text-indigo-500",
    "text-teal-500",
    "text-orange-500",
    "text-cyan-500",
  ];
  const colorClass = colors[Math.floor(Math.random() * colors.length)];

  return <span className={colorClass}>{new Date().getTime()}</span>;
}
