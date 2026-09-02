import Image from "next/image";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { MotionCard } from "@/components/motion-pill";
import { content } from "@/data/content";

export default function RecipesPage() {
  if (!content.recipes.visible) return null;

  return (
    <main className="min-h-dvh bg-cream px-5 py-16 pb-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {content.recipes.heading}
          </h1>
          <p className="mt-3 max-w-[40rem] text-base leading-7 text-ink-muted">
            {content.recipes.subtext}
          </p>
        </FadeIn>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.recipes.items.map((recipe) => (
            <StaggerItem key={recipe.id} className="h-full">
              <MotionCard className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                  <div className="relative aspect-square w-full shrink-0">
                    <Image
                      src={recipe.image}
                      alt={recipe.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-5 py-5">
                    <p className="text-xs font-medium tracking-[0.14em] text-leaf uppercase">
                      {recipe.meal}
                    </p>
                    <h2 className="mt-2 font-display text-lg font-bold tracking-tight text-gray-900">
                      {recipe.name}
                    </h2>
                    <p className="mt-1 text-sm text-ink-muted">
                      {recipe.protein} · {recipe.time}
                    </p>
                    <ol className="mt-4 list-decimal space-y-1.5 pl-4 text-sm leading-6 text-ink-muted">
                      {recipe.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </article>
              </MotionCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </main>
  );
}
