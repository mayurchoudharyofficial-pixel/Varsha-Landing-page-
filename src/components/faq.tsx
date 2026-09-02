import Image from "next/image";
import { content, whatsappHref } from "@/data/content";
import { MotionPill } from "@/components/motion-pill";

export function Faq() {
  if (!content.faq.visible) return null;

  const items = content.faq.items.filter((item) => item.visible && item.answer);

  if (items.length === 0) return null;

  return (
    <section
      id="faq"
      className="scroll-mt-[86px] bg-[#f5fef1] px-5 py-16 text-ink sm:px-[30px] sm:py-[100px]"
    >
      <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-[138px]">
        <div className="flex w-full shrink-0 flex-col items-start gap-10 lg:w-[526px]">
          <div className="flex w-full flex-col items-start gap-6">
            <h2 className="font-display text-[2.5rem] leading-none sm:text-6xl lg:text-[80px]">
              {content.faq.heading}
            </h2>
            <p className="font-mono text-[20px] leading-[1.3] font-normal">
              {content.faq.subtext}
            </p>
          </div>
          {content.whatsapp.visible ? (
            <MotionPill
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[58px] w-[248px] items-center justify-center gap-2.5 rounded-[2px] bg-cta px-6 font-sans text-[20px] leading-[1.3] font-semibold text-white"
            >
              <Image
                src={content.hero.primaryCta.icon}
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              {content.hero.primaryCta.label}
            </MotionPill>
          ) : null}
        </div>

        <div className="flex w-full flex-col lg:min-h-[426px]">
          {items.map((item, index) => (
            <details
              key={item.question}
              className={`group border-t-2 border-ink ${index === items.length - 1 ? "border-b-2" : ""}`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-[17px] marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="font-sans text-[20px] leading-[1.4] font-normal tracking-[-0.2px]">
                  {item.question}
                </span>
                <Image
                  src={content.faq.plusIcon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 shrink-0 transition-transform duration-150 group-open:rotate-45"
                />
              </summary>
              <p className="px-4 pb-5 font-sans text-[18px] leading-[1.4] text-ink">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
