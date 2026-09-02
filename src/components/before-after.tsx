"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import { MISSING, content } from "@/data/content";

const imageEase = [0.23, 1, 0.32, 1] as const;

export function BeforeAfter() {
  if (!content.beforeAfter.visible) return null;
  return <ResultsCarousel />;
}

function ResultsCarousel() {
  const section = content.beforeAfter;
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const clients = section.clients;
  const client = clients[index];

  const go = useCallback(
    (delta: number) => {
      if (clients.length < 2) return;
      setDirection(delta);
      setIndex((current) => (current + delta + clients.length) % clients.length);
    },
    [clients.length],
  );

  if (!client) return null;

  const caption = client.caption !== MISSING ? client.caption : null;
  const name = client.name !== MISSING ? client.name : null;
  const beforeAlt = name
    ? `${section.beforeLabel} — ${name}`
    : section.beforeLabel;
  const afterAlt = name ? `${section.afterLabel} — ${name}` : section.afterLabel;

  return (
    <section
      id="results"
      className="results-section relative z-0 -mt-[72px] bg-results px-[20px] sm:-mt-[86px] lg:px-[30px]"
      style={{
        paddingTop: "var(--results-pt)",
        paddingBottom: "var(--results-pb)",
      }}
    >
      <div
        className="flex w-full flex-col items-start lg:flex-row lg:items-start"
        style={{ gap: "var(--results-col-gap)" }}
      >
        <div className="flex w-full shrink-0 flex-col gap-6 text-ink lg:w-[424px]">
          <h2 className="font-display text-[2.5rem] leading-none whitespace-pre-wrap sm:text-6xl lg:text-[80px]">
            {section.heading}
          </h2>
          <p className="font-mono text-[0.9375rem] leading-[1.45] font-normal sm:text-lg lg:text-[20px] lg:leading-[1.3]">
            {section.subtext}
          </p>
        </div>

        <div
          className="flex w-full items-center lg:w-auto lg:shrink-0"
          style={{ gap: "var(--results-img-gap)" }}
        >
          <CarouselButton
            label={section.prevLabel}
            icon={section.prevIcon}
            onClick={() => go(-1)}
          />

          <div
            className="flex min-w-0 flex-1 flex-col items-start lg:flex-none lg:w-[calc(var(--results-img-w)*2+var(--results-img-gap))]"
            style={{
              gap: "var(--results-caption-gap)",
            }}
          >
            <div
              className="relative w-full overflow-hidden lg:h-[var(--results-img-h)]"
              onPointerDown={(event) => {
                if (event.button !== 0) return;
                const startX = event.clientX;
                const target = event.currentTarget;
                const onUp = (up: PointerEvent) => {
                  const dx = up.clientX - startX;
                  if (dx > 48) go(-1);
                  else if (dx < -48) go(1);
                  window.removeEventListener("pointerup", onUp);
                  if (target.hasPointerCapture(event.pointerId)) {
                    target.releasePointerCapture(event.pointerId);
                  }
                };
                target.setPointerCapture(event.pointerId);
                window.addEventListener("pointerup", onUp);
              }}
            >
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                  key={client.before}
                  className="flex"
                  style={{ gap: "var(--results-img-gap)" }}
                  custom={direction}
                  initial={
                    reduce ? { opacity: 1 } : { opacity: 0, x: direction * 24 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  exit={
                    reduce
                      ? { opacity: 0 }
                      : { opacity: 0, x: direction * -24 }
                  }
                  transition={{ duration: 0.38, ease: imageEase }}
                >
                  <ResultPhoto
                    src={client.before}
                    alt={beforeAlt}
                    label={section.beforeLabel}
                  />
                  <ResultPhoto
                    src={client.after}
                    alt={afterAlt}
                    label={section.afterLabel}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <p
              className="font-mono text-[0.9375rem] leading-[1.3] text-ink sm:text-lg lg:text-[20px]"
              aria-live="polite"
            >
              {caption}
            </p>
          </div>

          <CarouselButton
            label={section.nextLabel}
            icon={section.nextIcon}
            onClick={() => go(1)}
          />
        </div>
      </div>
    </section>
  );
}

function ResultPhoto({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div
      className="relative aspect-[342/464] min-w-0 flex-1 overflow-hidden lg:h-[var(--results-img-h)] lg:w-[var(--results-img-w)] lg:flex-none lg:aspect-auto"
      style={{
        borderRadius: "var(--results-radius)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1023px) 50vw, (max-width: 1919px) 342px, 435px"
        className="pointer-events-none object-cover object-top"
      />
      <span className="absolute top-2 left-2 rounded-full bg-paper px-3 py-1 font-sans text-[16px] leading-[1.2] text-black min-[1920px]:top-[10px] min-[1920px]:left-[10px] min-[1920px]:px-[15px] min-[1920px]:py-[5px] min-[1920px]:text-[20px]">
        {label}
      </span>
    </div>
  );
}

function CarouselButton({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="relative shrink-0 cursor-pointer transition-transform duration-100 ease-out hover:scale-[1.04] active:scale-[0.97]"
      style={{ width: "var(--results-chevron)", height: "var(--results-chevron)" }}
    >
      <img src={icon} alt="" className="size-full" />
    </button>
  );
}
