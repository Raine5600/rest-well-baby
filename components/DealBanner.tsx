"use client";

import { useEffect, useState } from "react";
import { PRODUCT, SUMMER_DEAL } from "@/lib/product";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(endMs: number): TimeLeft | null {
  const diff = endMs - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function DealBanner() {
  const endMs = new Date(SUMMER_DEAL.endsAt).getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() =>
    SUMMER_DEAL.active ? getTimeLeft(endMs) : null
  );

  useEffect(() => {
    if (!SUMMER_DEAL.active) return;
    const tick = () => setTimeLeft(getTimeLeft(endMs));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endMs]);

  if (!SUMMER_DEAL.active || !timeLeft) return null;

  const savings = PRODUCT.compareAt - PRODUCT.price;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-amber via-[#c9973a] to-sage text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 50%, white 0%, transparent 40%), radial-gradient(circle at 90% 50%, white 0%, transparent 35%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-3 text-center sm:flex-row sm:px-8 sm:text-left">
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <span aria-hidden>☀️</span>
            {SUMMER_DEAL.label}
          </span>
          <p className="text-sm font-medium sm:text-[0.95rem]">
            <span className="font-semibold">{SUMMER_DEAL.headline}</span>
            <span className="hidden text-white/90 sm:inline">
              {" "}
              — ${PRODUCT.price} today (save ${savings})
            </span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-1.5 rounded-xl bg-navy-dark/35 px-3 py-1.5 font-mono text-sm tabular-nums backdrop-blur-sm"
            aria-live="polite"
            aria-label={`Deal ends in ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes`}
          >
            <span className="text-[0.65rem] font-sans font-semibold uppercase tracking-wide text-white/80">
              Ends in
            </span>
            <span className="font-semibold">
              {timeLeft.days > 0 ? `${timeLeft.days}d ` : ""}
              {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
            </span>
          </div>
          <a
            href="#pricing"
            className="hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-navy-dark shadow-sm transition hover:bg-moon-lt sm:inline-block"
          >
            Claim offer
          </a>
        </div>
      </div>
    </div>
  );
}