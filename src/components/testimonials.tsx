import Image from "next/image";
import { content } from "@/data/content";

export function Testimonials() {
  if (!content.testimonials.visible) return null;

  const items = content.testimonials.items.slice(
    0,
    content.testimonials.homepagePreviewCount,
  );

  return (
    <>
      <section
        id="stories"
        className="grid min-h-[420px] bg-[#2c4836] lg:grid-cols-2 lg:h-[725px]"
      >
        <div className="flex flex-col justify-start gap-6 px-5 py-10 text-[#fefef1] sm:px-[30px] sm:py-[30px] lg:max-w-[452px]">
          <h2 className="font-display text-[2.5rem] leading-none sm:text-6xl lg:text-[80px]">
            {content.testimonials.heading}
          </h2>
          <p className="font-mono text-[20px] leading-[1.3] font-normal">
            {content.testimonials.subtext}
          </p>
        </div>
        <div className="relative min-h-[280px] bg-[#e1e1e1] lg:min-h-0">
          <video
            className="absolute inset-0 size-full object-cover"
            src={content.testimonials.video}
            controls
            playsInline
            preload="metadata"
            aria-label={content.testimonials.heading}
          />
        </div>
      </section>

      <section
        id="reviews"
        className="overflow-hidden bg-[#fcf9b9] px-5 py-16 sm:px-[30px] sm:py-[100px]"
      >
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-[17px]">
          <div className="flex w-full shrink-0 flex-col items-start gap-6 text-[#2c4836] lg:w-[381px]">
            <h2 className="font-display text-[2.5rem] leading-none sm:text-6xl lg:text-[80px]">
              {content.testimonials.reviewsHeading}
            </h2>
            <p className="font-mono text-[20px] leading-[1.3] font-normal">
              {content.testimonials.subtext}
            </p>
            <a
              href={content.testimonials.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-end gap-1"
            >
              <span className="font-mono text-[24px] leading-[1.3] font-bold tracking-[-0.48px] whitespace-pre-line">
                {content.testimonials.cta.label}
              </span>
              <Image
                src={content.testimonials.cta.arrow}
                alt=""
                width={54}
                height={27}
                className="mb-1 h-[27px] w-[54px]"
              />
            </a>
          </div>

          <div className="-mx-5 flex w-full gap-[50px] overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
            {items.map((item) => (
              <article
                key={item.name}
                className="flex h-[411px] w-[317px] shrink-0 flex-col gap-3 rounded-[12px] bg-white p-5 shadow-[0_4px_4px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-start gap-2">
                  <span
                    className="grid size-[51px] shrink-0 place-items-center rounded-full text-[20px] leading-[1.4] font-medium tracking-[-0.2px] text-white"
                    style={{ backgroundColor: content.testimonials.avatarColor }}
                  >
                    {item.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[20px] leading-[1.4] font-medium tracking-[-0.2px] text-black">
                      {item.name}
                    </p>
                    <p className="flex items-center gap-1 text-[18px] leading-[1.3] text-[#b6b6b6]">
                      <Image
                        src={content.testimonials.googleIcon}
                        alt=""
                        width={20}
                        height={20}
                        className="size-5"
                      />
                      {content.testimonials.sourceLabel}
                    </p>
                  </div>
                </div>
                <p className="overflow-hidden text-[18px] leading-[1.3] font-normal text-[#5f5f5f]">
                  “{item.quote}”
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
