import { FadeIn } from "@/components/fade-in";
import { content } from "@/data/content";

export function TrustBar() {
  if (!content.trustBar.visible) return null;

  const stats = content.trustBar.stats.filter((stat) => stat.visible);
  if (stats.length === 0) return null;

  return (
    <section className="border-y border-black/5 bg-white">
      <FadeIn>
        <ul className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-black/5">
          {stats.map((stat) => (
            <li key={stat.label} className="px-3 py-8 text-center sm:px-6 sm:py-10">
              <p className="font-display text-2xl font-extrabold tracking-tight text-leaf sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[13px] leading-4 text-ink-muted sm:text-sm">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
