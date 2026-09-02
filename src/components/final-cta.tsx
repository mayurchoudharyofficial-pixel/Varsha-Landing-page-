import { FadeIn } from "@/components/fade-in";
import { MotionPill } from "@/components/motion-pill";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { content, whatsappHref } from "@/data/content";

export function FinalCta() {
  if (!content.finalCta.visible) return null;

  return (
    <section className="bg-cream px-5 py-24 pb-28 sm:px-8 sm:py-32 lg:px-12">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {content.finalCta.headline}
        </h2>
        {content.whatsapp.visible ? (
          <MotionPill
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-leaf px-7 text-base font-semibold text-paper"
          >
            <WhatsAppIcon className="size-[18px]" />
            {content.finalCta.primaryCta.label}
          </MotionPill>
        ) : null}
      </FadeIn>
    </section>
  );
}
