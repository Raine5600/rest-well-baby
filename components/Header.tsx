import Link from "next/link";
import { BRAND } from "@/lib/product";

export function Header() {
  return (
    <header className="border-b border-border/60 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-dark text-lg text-white shadow-sm">
            ☾
          </span>
          <div>
            <p className="font-display text-lg font-semibold leading-tight text-navy-dark">
              {BRAND.name}
            </p>
            <p className="hidden text-xs text-ink-lt sm:block">Infant sleep system</p>
          </div>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-ink-mid">
          <a href="#included" className="hidden transition hover:text-navy-dark sm:inline">
            What&apos;s included
          </a>
          <a href="#pricing" className="hidden transition hover:text-navy-dark sm:inline">
            Pricing
          </a>
          <a
            href="#pricing"
            className="rounded-full bg-sage px-5 py-2.5 text-white shadow-sm transition hover:bg-[#4d7762]"
          >
            Get the system
          </a>
        </nav>
      </div>
    </header>
  );
}