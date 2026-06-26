import { BRAND } from "@/lib/product";
import { getContactEmail } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-navy-dark">
            {BRAND.name}
          </p>
          <p className="mt-2 max-w-sm text-sm text-ink-mid">{BRAND.tagline}</p>
        </div>
        <div className="text-sm text-ink-mid">
          <p className="font-semibold text-navy-dark">Support</p>
          <a
            href={`mailto:${getContactEmail("support")}`}
            className="mt-2 block transition hover:text-sage"
          >
            {getContactEmail("support")}
          </a>
          <p className="mt-6 max-w-xs text-xs leading-relaxed text-ink-lt">
            Not medical advice. Consult your pediatrician for health concerns.
            © {new Date().getFullYear()} {BRAND.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}