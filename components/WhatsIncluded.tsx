import Image from "next/image";
import { PACKAGE_ITEMS } from "@/lib/product";

const accentMap = {
  navy: "bg-navy text-white",
  sage: "bg-sage text-white",
  moon: "bg-moon text-navy-dark",
  rose: "bg-rose text-white",
  amber: "bg-amber text-white",
} as const;

export function WhatsIncluded() {
  return (
    <section id="included" className="py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sage">
              Complete toolkit
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy-dark sm:text-4xl">
              Everything in one download
            </h2>
            <p className="mt-4 text-lg text-ink-mid">
              Five beautifully designed PDFs you can read on your phone, print
              for the fridge, or fill out at 3 AM when you&apos;re tracking
              another wake window.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white p-4 shadow-sm">
              <Image
                src="/images/infographic_package_overview.png"
                alt="Overview of all five Rest Well Baby PDF tools"
                width={800}
                height={500}
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-4">
            {PACKAGE_ITEMS.map((item) => (
              <article
                key={item.num}
                className="flex gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:border-sage/40"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${accentMap[item.accent]}`}
                >
                  {item.num}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy-dark">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-mid">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}