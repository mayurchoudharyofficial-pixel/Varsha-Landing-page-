import Image from "next/image";
import { MISSING, content, whatsappHref } from "@/data/content";
import { MotionPill } from "@/components/motion-pill";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function Hero() {
  if (!content.hero.visible) return null;

  const { hero } = content;
  const showHeadline = hero.headline !== MISSING;
  const showSubtext = hero.subtext !== MISSING;

  return (
    <section className="hero-section relative overflow-hidden bg-paper lg:h-dvh">
      <div className="relative h-[16.5rem] w-full sm:h-[20rem] lg:absolute lg:inset-y-0 lg:right-0 lg:z-10 lg:h-auto lg:w-1/2">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover object-[center_18%]"
        />
      </div>

      <div className="relative px-5 pt-6 pb-10 sm:px-8 lg:px-[30px] lg:pt-[30px] lg:pb-0">
        <div className="relative z-20 flex max-w-[595px] flex-col gap-6 lg:gap-[31px]">
          <div className="flex flex-col gap-4 lg:gap-6">
            {showHeadline ? (
              <h1 className="font-display text-[2rem] leading-[1.06] text-ink sm:text-[3.25rem] sm:leading-[1.04] lg:text-[80px] lg:leading-none">
                {hero.headline}
              </h1>
            ) : null}

            {showSubtext ? (
              <p className="font-mono text-[0.9375rem] leading-[1.45] font-normal text-ink sm:text-lg lg:text-[20px] lg:leading-[1.3]">
                {hero.subtext}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:gap-5">
            {content.whatsapp.visible ? (
              <MotionPill
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[2px] bg-cta px-6 font-sans text-[15px] font-semibold text-paper lg:h-[58px] lg:text-xl"
              >
                <WhatsAppIcon className="size-6" />
                {hero.primaryCta.label}
              </MotionPill>
            ) : null}

            <MotionPill
              href={hero.secondaryCta.href}
              className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[2px] border-2 border-ink bg-paper px-6 font-sans text-[15px] font-semibold text-ink lg:h-[58px] lg:text-xl"
            >
              <img
                src={hero.secondaryCta.icon}
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              {hero.secondaryCta.label}
            </MotionPill>
          </div>
        </div>
      </div>
    </section>
  );
}
