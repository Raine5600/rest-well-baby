import Image from "next/image";
import { BRAND, PRODUCT } from "@/lib/product";
import { CheckoutButton } from "./CheckoutButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-dark text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #7b9ec4 0%, transparent 45%), radial-gradient(circle at 80% 10%, #5b8a72 0%, transparent 35%)",
        }}
      />
      <div className="pointer-events-none absolute right-8 top-16 text-moon/30 text-6xl">
        ✦
      </div>
      <div className="pointer-events-none absolute left-12 top-32 text-moon/20 text-4xl">
        ✦
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-sage/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sage-lt">
            For parents of babies 0–12 months
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[3.25rem]">
            Finally, a clear path through baby sleep chaos
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-moon-lt">
            {BRAND.tagline}. The {PRODUCT.name} gives you science-backed
            strategies, printable tools, and a step-by-step plan — especially
            for the 4-month shift.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CheckoutButton size="lg" />
            <p className="text-sm text-moon-lt">
              <span className="font-semibold text-white">${PRODUCT.price}</span>{" "}
              · Instant download · 14-day guarantee
            </p>
          </div>
          <ul className="mt-10 grid gap-3 text-sm text-moon-lt sm:grid-cols-2">
            {[
              "5 printable PDF guides",
              "14-day regression plan",
              "Wake window cheat sheet",
              "Sleep log worksheets",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-sage">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/hero_sleeping_baby.jpg"
                alt="Peaceful baby sleeping in a crib at night"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-sage">
              Bundle value
            </p>
            <p className="font-display text-2xl font-semibold text-navy-dark">
              <span className="text-ink-lt line-through">${PRODUCT.compareAt}</span>{" "}
              ${PRODUCT.price}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}