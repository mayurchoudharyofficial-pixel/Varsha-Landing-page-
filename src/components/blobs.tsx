export function HeroBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute -top-10 -right-8 h-[22rem] w-[22rem] text-coral/30 lg:h-[34rem] lg:w-[34rem]"
        viewBox="0 0 400 400"
        fill="currentColor"
      >
        <path d="M312 78c48 36 78 98 62 154s-82 98-148 108-138-18-168-78 4-148 70-186 136-34 184 2Z" />
      </svg>
      <svg
        className="absolute top-1/3 -right-16 hidden h-64 w-64 text-sage lg:block"
        viewBox="0 0 400 400"
        fill="currentColor"
      >
        <path d="M118 62c62-28 148-8 188 52s18 156-42 198-154 28-198-32 0-192 52-218Z" />
      </svg>
      <svg
        className="absolute -bottom-16 left-1/2 h-40 w-40 -translate-x-1/2 text-butter lg:left-auto lg:right-24 lg:h-52 lg:w-52"
        viewBox="0 0 400 400"
        fill="currentColor"
      >
        <path d="M86 154c34-72 138-98 198-52s72 154 12 204-168 42-210-18 0-86 0-134Z" />
      </svg>
    </div>
  );
}

export function SectionDivider() {
  return (
    <div aria-hidden className="relative h-16 overflow-hidden bg-cream sm:h-20">
      <svg
        className="absolute inset-x-0 -top-8 h-24 w-full text-mango/20"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0 72c80-28 160 20 240 8s160-48 240-28 160 52 240 36 160-56 240-28 160 40 240 16v44H0Z" />
      </svg>
      <svg
        className="absolute inset-x-0 -bottom-6 h-20 w-full text-leaf/15"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0 48c120 28 200-16 320-8s200 40 320 20 220-44 360-20 140 36 200 16v64H0Z" />
      </svg>
    </div>
  );
}
