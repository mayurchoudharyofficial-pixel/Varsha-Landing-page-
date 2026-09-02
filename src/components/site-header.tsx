"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { content, whatsappHref } from "@/data/content";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { MotionPill } from "@/components/motion-pill";

export function SiteHeader() {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/packages") return null;

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-5 py-3.5 md:px-8 lg:px-12">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <Image
            src={content.footer.logo}
            alt={content.site.clinicName}
            width={160}
            height={96}
            className="h-9 w-auto md:h-10"
            priority
          />
          <span className="hidden font-display text-[15px] font-bold tracking-tight text-gray-900 sm:inline md:text-base">
            {content.site.clinicName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {content.site.pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="font-display text-[13px] font-medium tracking-tight text-gray-900"
            >
              {page.label}
            </Link>
          ))}
        </nav>

        {content.whatsapp.visible ? (
          <MotionPill
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-leaf px-4 text-[13px] font-semibold text-paper md:px-5"
          >
            <WhatsAppIcon className="size-4" />
            <span className="hidden sm:inline">{content.hero.primaryCta.label}</span>
          </MotionPill>
        ) : null}
      </div>
    </header>
  );
}
