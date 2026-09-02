const icons = {
  thyroid: (
    <path d="M8 14c0-2.2 1.8-5 4-5s4 2.8 4 5M9 14v5a3 3 0 0 0 6 0v-5M12 4v5M9 6.5 12 4l3 2.5" />
  ),
  diabetes: (
    <path d="M12 3.5c3.5 4.2 7 8 7 11.2A7 7 0 0 1 5 14.7C5 11.5 8.5 7.7 12 3.5Z" />
  ),
  pcod: (
    <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2M4.5 10.5c1.2 0 2.2.7 2.7 1.7M19.5 10.5c-1.2 0-2.2.7-2.7 1.7" />
  ),
  gdm: (
    <path d="M8 21c0-4 1.8-7 4-7s4 3 4 7M12 14V8m-4 2c0-2.5 1.8-4.5 4-4.5S16 7.5 16 10" />
  ),
  "weight-gain": (
    <path d="M6 16h12M8 16V9l4-3 4 3v7M12 21V3" />
  ),
  "weight-loss": (
    <path d="M6 8h12M8 8v7l4 3 4-3V8M12 3v18" />
  ),
  muscle: (
    <path d="M7 14c-2 0-3-1.4-3-3s1.2-3 2.6-2.2C7 6.4 9 5 12 5s5 1.4 5.4 3.8C18.8 8 20 9.2 20 11s-1 3-3 3M8 14v5h8v-5" />
  ),
  ibs: (
    <path d="M5 10c2-3 5-4 7-1s5 2 7-1M5 15c2-3 5-4 7-1s5 2 7-1" />
  ),
  child: (
    <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 21v-1.5A5.5 5.5 0 0 1 11.5 14h1A5.5 5.5 0 0 1 18 19.5V21" />
  ),
  pregnancy: (
    <path d="M12 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM10 10.5c0-1.2.9-2 2-2s2 .8 2 2c0 3 3 4.5 3 8.5H7c0-4 3-5.5 3-8.5Z" />
  ),
  detox: (
    <path d="M9 21h6M10 21V10l-3-5h10l-3 5v11M12 10v4" />
  ),
} as const;

export type SpecialityIconName = keyof typeof icons;

export function SpecialityIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const path = icons[name as SpecialityIconName] ?? icons.detox;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {path}
    </svg>
  );
}
