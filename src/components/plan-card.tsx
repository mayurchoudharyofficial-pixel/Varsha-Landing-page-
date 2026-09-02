"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { content, formatInr, whatsappPlanHref } from "@/data/content";

const DURATIONS = ["oneMonth", "threeMonths", "sixMonths"] as const;

type DurationKey = (typeof DURATIONS)[number];
type Plan = (typeof content.pricing.plans)[number];

export function PlanCard({ plan }: { plan: Plan }) {
  const [duration, setDuration] = useState<DurationKey>("oneMonth");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0, width: 0 });
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const speciality = content.specialities.items.find((item) => item.name === plan.name);
  const durationLabel = content.pricing.durationLabels[duration];
  const price = plan.prices[duration];
  const image = plan.image;

  const updateMenuPos = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMenuPos({ top: rect.bottom + 6, left: rect.left, width: Math.max(rect.width, 148) });
  };

  useLayoutEffect(() => {
    if (!open) return;
    updateMenuPos();
  }, [open]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node) && !buttonRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onReposition = () => updateMenuPos();
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onReposition, true);
    window.addEventListener("resize", onReposition);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onReposition, true);
      window.removeEventListener("resize", onReposition);
    };
  }, [open]);

  return (
    <article className="plan-card flex h-[500px] w-[366px] max-w-full shrink-0 flex-col overflow-visible rounded-[12px] border-2 border-[#e5e5e5] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
      <div className="relative h-[246px] w-full shrink-0 overflow-hidden rounded-t-[10px]">
        <Image
          src={image}
          alt={plan.name}
          fill
          quality={100}
          unoptimized
          sizes="366px"
          className="object-cover object-center"
        />
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-between gap-4 px-4 pt-5 pb-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="truncate text-[24px] leading-[1.1] font-semibold text-[#131724]">
              {plan.name}
            </h3>
            <p className="line-clamp-2 text-[18px] leading-[1.3] text-[#808289]">
              {speciality?.blurb ?? ""}
            </p>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="relative">
              <button
                ref={buttonRef}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
                className="flex items-center justify-center gap-2 rounded-[8px] bg-[#316148] px-3 py-1.5 text-white"
              >
                <Image
                  src={content.pricing.icons.calendar}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5"
                />
                <span className="text-[16px] leading-[1.2] whitespace-nowrap">
                  {durationLabel}
                </span>
                <Image
                  src={content.pricing.icons.chevronDown}
                  alt=""
                  width={20}
                  height={20}
                  className={`size-5 transition-transform ${open ? "rotate-180" : ""}`}
                />
              </button>
              {open && mounted
                ? createPortal(
                    <ul
                      ref={menuRef}
                      role="listbox"
                      style={{ top: menuPos.top, left: menuPos.left, minWidth: menuPos.width }}
                      className="fixed z-[80] overflow-hidden rounded-[8px] border border-[#e5e5e5] bg-white py-1 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                    >
                      {DURATIONS.map((key, index) => {
                        const selected = key === duration;
                        return (
                          <li key={key} role="option" aria-selected={selected}>
                            <button
                              type="button"
                              onClick={() => {
                                setDuration(key);
                                setOpen(false);
                              }}
                              className={`w-full px-3 py-2 text-left text-[16px] leading-[1.2] whitespace-nowrap ${
                                index === 0 ? "rounded-t-[6px]" : ""
                              } ${index === DURATIONS.length - 1 ? "rounded-b-[6px]" : ""} ${
                                selected
                                  ? "bg-[#316148] text-white"
                                  : "text-[#131724] hover:bg-[#f4f6f4]"
                              }`}
                            >
                              {content.pricing.durationLabels[key]}
                            </button>
                          </li>
                        );
                      })}
                    </ul>,
                    document.body,
                  )
                : null}
            </div>

            <p className="flex items-center gap-[5px] whitespace-nowrap">
              <span className="text-[16px] leading-[1.2] text-[#494c54]">
                {content.labels.from}
              </span>
              <span className="text-[32px] leading-[1.1] font-semibold text-[#131724]">
                {formatInr(price)}
              </span>
            </p>
          </div>
        </div>

        <a
          href={whatsappPlanHref(plan.name, durationLabel)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 items-center justify-between rounded-[8px] border-t border-[#ececec] pt-2"
        >
          <span className="flex items-center gap-2.5">
            <WhatsAppIcon className="size-6 text-[#23ac56]" />
            <span className="text-[18px] leading-[1.3] font-normal text-[#131724]">
              {content.pricing.chatLabel}
            </span>
          </span>
          <Image
            src={content.pricing.icons.chevronRight}
            alt=""
            width={24}
            height={24}
            className="size-6 opacity-50"
          />
        </a>
      </div>
    </article>
  );
}
