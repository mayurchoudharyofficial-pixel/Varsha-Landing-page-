"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { content, whatsappHref } from "@/data/content";
import { MotionPill } from "@/components/motion-pill";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

function navHref(href: string, pathname: string) {
  if (href === "#diet-plans" && pathname === "/packages") return "/packages";
  if (href.startsWith("#") && pathname !== "/") return `/${href}`;
  return href;
}

export function HeroNav({ sticky = true }: { sticky?: boolean }) {
  const pathname = usePathname();

  return (
    <header
      className={`${sticky ? "sticky top-0" : "relative"} z-50 h-[72px] bg-white/50 backdrop-blur-[14px] sm:h-[86px]`}
    >
      <div className="flex h-full items-center justify-between pl-5 sm:pl-[30px]">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={content.footer.logo}
            alt={content.site.clinicName}
            width={90}
            height={54}
            className="h-9 w-auto sm:h-[54px] sm:w-[90px] sm:object-contain"
            priority
          />
        </Link>

        <div className="flex h-full min-w-0 items-center gap-5">
          <nav
            className="hidden h-full max-w-[720px] items-center justify-between min-[1200px]:flex min-[1200px]:w-[720px]"
            aria-label="Primary"
          >
            {content.site.nav.map((item) => (
              <Link
                key={item.href}
                href={navHref(item.href, pathname)}
                className="flex h-full items-center justify-center px-8 font-mono text-[20px] leading-[1.3] whitespace-nowrap text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {content.whatsapp.visible ? (
            <MotionPill
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 inline-flex h-10 shrink-0 items-center justify-center gap-2.5 rounded-[2px] bg-cta px-4 font-sans text-[13px] font-semibold text-paper sm:mr-[30px] sm:h-[58px] sm:w-[248px] sm:px-6 sm:text-[20px] sm:leading-[1.3]"
            >
              <WhatsAppIcon className="size-5 sm:size-6" />
              <span className="hidden sm:inline">{content.hero.primaryCta.label}</span>
            </MotionPill>
          ) : null}
        </div>
      </div>
    </header>
  );
}
