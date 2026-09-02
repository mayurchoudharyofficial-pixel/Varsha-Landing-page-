import Image from "next/image";
import { content } from "@/data/content";

export function Location() {
  if (!content.location.visible) return null;

  const { heading, clinicName, addressLines, mapsUrl, mapsArrow, embedQuery, hours } =
    content.location;
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(embedQuery)}&output=embed`;

  return (
    <section
      id="location"
      className="scroll-mt-[86px] bg-white px-5 py-16 text-ink sm:px-[30px] sm:py-[100px]"
    >
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-[100px]">
        <div className="flex w-full flex-col gap-10 lg:w-[640px]">
          <h2 className="font-display text-[2.5rem] leading-none sm:text-6xl lg:text-[80px]">
            {heading}
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-2">
              <p className="font-mono text-[24px] leading-[1.3] font-bold tracking-[-0.48px]">
                {clinicName}
              </p>
              <p className="font-mono text-[20px] leading-[1.3] font-normal">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[20px] leading-[1.3] font-bold tracking-[-0.6px]"
              >
                {content.labels.maps}
                <Image
                  src={mapsArrow}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6"
                />
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-mono text-[24px] leading-[1.3] font-bold tracking-[-0.48px]">
                {content.labels.hours}
              </h3>
              <ul className="flex flex-col gap-2">
                {hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-start gap-2 font-mono text-[20px] leading-[1.3] font-normal"
                  >
                    <span className="min-w-0 flex-1">{row.day}</span>
                    <span className="shrink-0 text-right whitespace-nowrap">
                      {row.slots.map((slot, index) => (
                        <span key={slot}>
                          {index > 0 ? (
                            <>
                              {" "}
                              <span className="font-bold tracking-[-0.6px]">&</span>{" "}
                            </>
                          ) : null}
                          {slot}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-[320px] w-full overflow-hidden rounded-[12px] bg-[#e1e1e1] lg:h-[591px] lg:w-[606px] lg:shrink-0">
          <iframe
            title={heading}
            src={embedSrc}
            className="size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
