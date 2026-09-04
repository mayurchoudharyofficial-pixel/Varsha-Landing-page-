"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/data/content";

export function VideoStories() {
  if (!content.testimonials.visible) return null;

  const videos = content.testimonials.videos;
  if (videos.length === 0) return null;

  const loop = videos.length === 1 ? Array.from({ length: 4 }, () => videos[0]) : videos;
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="stories" className="overflow-hidden bg-forest py-8 lg:py-20">
      <div className="flex flex-col items-center gap-6 lg:gap-10">
        <div className="shell flex w-full flex-col items-center gap-2 text-center text-[#fefef1]">
          <h2 className="font-display text-[28px] leading-none lg:text-[50px]">{content.testimonials.heading}</h2>
          <p className="max-w-[360px] text-[16px] leading-[1.3] font-semibold lg:max-w-[640px] lg:text-[20px] lg:leading-[1.4]">
            {content.testimonials.subtext}
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <div className={`flex w-max gap-3 px-4 lg:gap-6 ${active === null ? "marquee-track" : ""}`}>
            {[...loop, ...loop].map((video, index) => (
              <button
                key={`${video.src}-${index}`}
                type="button"
                onClick={() => setActive(index % loop.length)}
                className="pressable relative h-[363px] w-[204px] shrink-0 overflow-hidden rounded-[16px] bg-white lg:h-[480px] lg:w-[270px] lg:rounded-[20px]"
              >
                <MutedLoop src={video.src} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {active !== null && loop[active] ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92">
          <button
            type="button"
            aria-label={content.testimonials.closeLabel}
            onClick={() => setActive(null)}
            className="pressable absolute top-5 right-5 z-10 grid size-11 place-items-center rounded-full bg-white/15"
          >
            <img src={content.site.closeIcon} alt="" width={28} height={28} className="size-7 invert" />
          </button>
          <video
            src={loop[active].src}
            className="max-h-dvh max-w-full"
            autoPlay
            playsInline
            controls
            loop
          />
        </div>
      ) : null}
    </section>
  );
}

function MutedLoop({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.muted = true;
    void node.play().catch(() => {});
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      className="absolute inset-0 size-full object-cover"
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
    />
  );
}
