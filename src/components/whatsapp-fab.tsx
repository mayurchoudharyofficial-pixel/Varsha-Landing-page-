"use client";

import { usePathname } from "next/navigation";
import { MotionPill } from "@/components/motion-pill";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { content, whatsappHref } from "@/data/content";

export function WhatsAppFab() {
  const pathname = usePathname();
  if (!content.whatsapp.visible) return null;
  if (pathname === "/" || pathname === "/packages") return null;

  return (
    <MotionPill
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      ariaLabel={content.hero.primaryCta.label}
      className="fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-leaf text-paper shadow-sm lg:right-6 lg:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </MotionPill>
  );
}
