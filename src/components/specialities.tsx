"use client";

import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { MotionCard } from "@/components/motion-pill";
import { SpecialityIcon } from "@/components/speciality-icon";
import { MISSING, content } from "@/data/content";

export function Specialities() {
  if (!content.specialities.visible) return null;

  const { heading, items } = content.specialities;

  return (
    <section className="bg-cream px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {heading}
          </h2>
        </FadeIn>
        <Stagger className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <StaggerItem key={item.name}>
              <MotionCard>
                <Link
                  href="/packages"
                  className="flex h-full gap-3 rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-sm"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-leaf/8 text-leaf">
                    <SpecialityIcon name={item.icon} className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[15px] font-bold tracking-tight text-gray-900">
                      {item.name}
                    </span>
                    {item.blurb !== MISSING ? (
                      <span className="mt-1 block text-sm leading-5 text-ink-muted">
                        {item.blurb}
                      </span>
                    ) : null}
                  </span>
                </Link>
              </MotionCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
