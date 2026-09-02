import Image from "next/image";
import { content, whatsappHref } from "@/data/content";

function hrefFor(kind: (typeof content.talkToUs.items)[number]["kind"]) {
  if (kind === "whatsapp") return whatsappHref();
  if (kind === "call") return `tel:${content.footer.phone.replace(/\s+/g, "")}`;
  return content.location.mapsUrl;
}

function accent(kind: (typeof content.talkToUs.items)[number]["kind"]) {
  if (kind === "maps") {
    return { label: "text-[#78060a]", detail: "text-[#ae696b]" };
  }
  if (kind === "call") {
    return { label: "text-[#ac3d08]", detail: "text-[#cd8a6a]" };
  }
  return { label: "text-ink", detail: "text-[#6d8b5e]" };
}

export function TalkToUs() {
  if (!content.talkToUs.visible) return null;

  return (
    <section className="bg-results px-5 py-16 sm:px-[30px] sm:py-20">
      <div className="flex flex-col gap-8 sm:gap-11">
        <h2 className="max-w-[1193px] font-display text-[2.5rem] leading-none text-ink sm:text-6xl lg:text-[80px]">
          {content.talkToUs.heading}
        </h2>
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-[38px]">
          {content.talkToUs.items.map((item) => {
            const href = hrefFor(item.kind);
            const external = item.kind !== "call";
            const colors = accent(item.kind);
            return (
              <a
                key={item.kind}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex flex-col gap-3 overflow-hidden rounded-[44px] border-4 border-white/80 bg-[rgba(255,253,238,0.4)] p-4"
              >
                <span className="relative block size-[72px] sm:size-[100px]">
                  <Image src={item.icon} alt="" fill sizes="100px" className="object-contain" />
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[20px] leading-[1.3] font-normal ${colors.label}`}
                    >
                      {item.label}
                    </span>
                    <Image
                      src={item.arrow}
                      alt=""
                      width={40}
                      height={40}
                      className="size-8 rotate-90 sm:size-10"
                    />
                  </span>
                  <span className={`font-mono text-[20px] leading-[1.3] font-normal ${colors.detail}`}>
                    {item.detail}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
