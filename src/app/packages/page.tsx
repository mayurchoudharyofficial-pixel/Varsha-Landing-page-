import Image from "next/image";
import { HeroNav } from "@/components/hero-nav";
import { PlanCatalog } from "@/components/plan-catalog";
import { content, whatsappHref } from "@/data/content";
import { MotionPill } from "@/components/motion-pill";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export default function PackagesPage() {
  if (!content.pricing.visible) return null;

  const plates = content.pricing.pagePlates;

  return (
    <main className="diet-plans-page relative bg-white">
      <HeroNav sticky={false} />

      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden h-[560px] overflow-hidden lg:block">
        {plates[0] ? (
          <Image
            src={plates[0].src}
            alt=""
            width={840}
            height={808}
            quality={100}
            className="absolute top-[-72px] left-[-110px] h-[420px] w-[436px] max-w-none object-contain mix-blend-multiply"
          />
        ) : null}
        {plates[1] ? (
          <Image
            src={plates[1].src}
            alt=""
            width={440}
            height={424}
            quality={100}
            className="absolute top-[210px] left-[-28px] h-[210px] w-[218px] max-w-none object-contain mix-blend-multiply"
          />
        ) : null}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1178px] flex-col items-center px-5 pt-10 pb-16 sm:px-[30px] sm:pt-[44px] sm:pb-24">
        <header className="flex w-full flex-col items-center gap-[31px] text-center text-ink">
          <div className="flex flex-col items-center gap-6">
            <h1 className="font-display text-[32px] leading-none sm:text-[48px] lg:text-[80px] lg:whitespace-nowrap">
              {content.pricing.heading}
            </h1>
            <p className="max-w-[720px] font-mono text-[20px] leading-[1.3] font-normal">
              {content.pricing.subtext}
            </p>
          </div>
          {content.whatsapp.visible ? (
            <MotionPill
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[58px] items-center justify-center gap-2.5 rounded-[2px] bg-cta px-6 text-[20px] leading-[1.3] font-semibold text-paper"
            >
              <WhatsAppIcon className="size-6" />
              {content.hero.primaryCta.label}
            </MotionPill>
          ) : null}
        </header>

        <div className="mt-16 w-full sm:mt-24">
          <PlanCatalog plans={content.pricing.plans} layout="grid" />
        </div>
      </div>
    </main>
  );
}
