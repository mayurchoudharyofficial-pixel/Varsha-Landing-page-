import Image from "next/image";
import { content } from "@/data/content";

export function HowItWorks() {
  if (!content.howItWorks.visible) return null;

  return (
    <section
      id="how-it-works"
      className="bg-[#f5fef1] px-5 py-16 text-ink sm:px-[30px] sm:py-[100px]"
    >
      <div className="flex max-w-[873px] flex-col items-start gap-6">
        <h2 className="font-display text-[2.5rem] leading-none sm:text-6xl lg:text-[80px]">
          {content.howItWorks.heading}
        </h2>
        <p className="max-w-[653px] font-mono text-[20px] leading-[1.3] font-normal">
          {content.howItWorks.subtext}
        </p>
      </div>

      <ol className="mt-12 flex flex-col gap-10 lg:mt-8 lg:flex-row lg:items-start lg:gap-3">
        {content.howItWorks.steps.map((step, index) => (
          <li key={step.title} className="contents">
            {index > 0 ? (
              <div className="mt-[100px] hidden h-5 w-[85px] shrink-0 lg:block">
                <Image
                  src={content.howItWorks.connector}
                  alt=""
                  width={85}
                  height={20}
                  className="h-5 w-[85px]"
                />
              </div>
            ) : null}
            <article className="relative w-full max-w-[263px] shrink-0 pt-[29px]">
              <Image
                src={step.number}
                alt=""
                width={step.numberWidth}
                height={148}
                className="h-[148px] w-auto"
              />
              <h3 className="-mt-7 font-sans text-[32px] leading-[1.1] font-semibold text-black">
                {step.title}
              </h3>
              <p className="mt-2 font-sans text-[20px] leading-[1.4] font-normal tracking-[-0.2px] text-[#686868]">
                {step.body}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
