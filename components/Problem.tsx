export function Problem() {
  const pains = [
    {
      title: "The 2 AM spiral",
      body: "You're googling at 2 AM wondering if you'll ever sleep again — and every article contradicts the last one.",
    },
    {
      title: "The 4-month wall",
      body: "Your good sleeper suddenly wakes every 45 minutes. Nothing that worked before works now.",
    },
    {
      title: "Information overload",
      body: "Books, courses, Instagram reels — $200 later and you still don't have a simple plan to follow tonight.",
    },
  ];

  return (
    <section className="border-y border-border bg-white py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sage">
            Sound familiar?
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-dark sm:text-4xl">
            You&apos;re not failing. You&apos;re just exhausted.
          </h2>
          <p className="mt-4 text-lg text-ink-mid">
            Most sleep advice is either too vague, too expensive, or not built
            for the stage you&apos;re actually in. This system is different.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pains.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-cream p-6 shadow-sm"
            >
              <h3 className="font-display text-xl font-semibold text-navy-dark">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-mid">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}