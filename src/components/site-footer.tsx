import Image from "next/image";
import Link from "next/link";
import { TalkToUs } from "@/components/talk-to-us";
import { content, whatsappHref } from "@/data/content";

export function SiteFooter() {
  if (!content.footer.visible) return null;

  const { logo, mark, taglineLines, email, phone, instagram, copyright, links } = content.footer;

  return (
    <footer>
      <TalkToUs />
      <div className="relative overflow-hidden bg-[#2c4836] px-5 py-10 sm:px-[30px]">
        <Image
          src={logo}
          alt=""
          width={421}
          height={252}
          className="pointer-events-none absolute -right-11 bottom-0 hidden h-[252px] w-[421px] object-contain opacity-[0.08] lg:block"
        />
        <div className="relative flex flex-col gap-12 sm:gap-[99px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:justify-between lg:gap-6">
            <div className="flex max-w-[171px] flex-col gap-[19px]">
              <Image src={mark} alt={content.site.clinicName} width={158} height={95} className="h-[95px] w-[158px]" />
              <p className="font-display text-[20px] leading-[1.3] font-normal tracking-[0.4px] text-white">
                {taglineLines[0]}
                <br />
                {taglineLines[1]}
              </p>
            </div>

            <nav className="flex flex-col items-start gap-[19px] font-mono text-[20px] leading-[1.3] font-normal text-white">
              {links.map((item) => (
                <Link key={item.href} href={item.href} className="hover:opacity-80">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex max-w-[313px] flex-col items-start gap-[19px] text-[20px]">
              <p className="font-mono font-normal tracking-[-0.4px] text-white">
                {content.site.clinicName}
              </p>
              <div className="font-mono text-[20px] leading-[1.3] font-normal text-[#9eaba3]">
                {content.location.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className="flex max-w-[414px] flex-col items-start gap-5 font-mono text-[20px] leading-[1.3] font-normal">
              <div className="flex flex-col gap-2">
                <p className="text-white">{content.labels.whatsapp}</p>
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="text-[#9eaba3]">
                  {phone}
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white">{content.labels.email}</p>
                <a href={`mailto:${email}`} className="text-[#9eaba3]">
                  {email}
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white">{content.labels.instagram}</p>
                <a
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9eaba3]"
                >
                  {instagram.handle}
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-[16px] leading-[1.2] text-[#9eaba3]">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
