import Image from "next/image";
import Link from "next/link";
import { PlanCatalog } from "@/components/plan-catalog";
import { content } from "@/data/content";

export function PricingSnapshot() {
  if (!content.pricing.visible) return null;

  const plans = content.pricing.plans.slice(0, content.pricing.homepagePreviewCount);

  return (
    <section
      id="diet-plans"
      className="diet-plans-section scroll-mt-[86px] bg-white px-5 py-16 sm:px-[30px] sm:py-[100px] min-[1920px]:px-5"
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="min-w-0 text-ink">
            <h2 className="font-display text-[32px] leading-none sm:text-[48px] lg:text-[80px] lg:whitespace-nowrap">
              {content.pricing.heading}
            </h2>
            <p className="mt-6 max-w-[720px] font-mono text-[20px] leading-[1.3] font-normal">
              {content.pricing.subtext}
            </p>
          </div>
          <Link
            href={content.pricing.cta.href}
            className="inline-flex h-[58px] shrink-0 items-center justify-center gap-2.5 rounded-[2px] border-2 border-ink px-6 text-[20px] leading-[1.3] font-semibold text-ink"
          >
            {content.pricing.cta.label}
            <Image
              src={content.pricing.icons.linkNext}
              alt=""
              width={24}
              height={24}
              className="size-6"
            />
          </Link>
        </div>
        <PlanCatalog plans={plans} layout="row" />
      </div>
    </section>
  );
}
