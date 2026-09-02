import { FadeIn } from "@/components/fade-in";
import { content } from "@/data/content";

export function Qualifications() {
  if (!content.qualifications.visible) return null;

  const { heading, name, title, registrationNumber, story } =
    content.qualifications;

  return (
    <section className="bg-cream px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <FadeIn className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
        <div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 font-display text-xl font-bold tracking-tight text-gray-900">
            {name}
          </p>
          <p className="mt-1 text-sm text-ink-muted">{title}</p>
          <p className="mt-6 inline-flex rounded-full border border-black/5 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm">
            {content.labels.registration} {registrationNumber}
          </p>
        </div>
        <div className="space-y-4 text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
          {story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
