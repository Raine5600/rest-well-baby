import Link from "next/link";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
import { DownloadButton } from "@/components/DownloadButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PACKAGE_ITEMS, PRODUCT } from "@/lib/product";
import { getContactEmail } from "@/lib/site";
import { getStripe } from "@/lib/stripe";

type Props = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function SuccessPage({ searchParams }: Props) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    redirect("/");
  }

  let customerEmail: string | null = null;
  let paid = false;

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    paid = session.payment_status === "paid";
    customerEmail = session.customer_details?.email ?? null;
  } catch {
    redirect("/");
  }

  if (!paid) {
    redirect("/");
  }

  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-cream py-16">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage-lt text-3xl text-sage">
            ✓
          </div>
          <h1 className="mt-6 font-display text-3xl font-semibold text-navy-dark sm:text-4xl">
            You&apos;re in — welcome to better sleep
          </h1>
          <p className="mt-4 text-lg text-ink-mid">
            Thank you for purchasing the {PRODUCT.fullName}. Your download is
            ready below.
          </p>
          {customerEmail ? (
            <p className="mt-2 text-sm text-ink-lt">
              Receipt sent to <strong className="text-ink">{customerEmail}</strong>
            </p>
          ) : null}

          <div className="mt-10 rounded-3xl border border-border bg-white p-8 shadow-sm">
            <DownloadButton sessionId={sessionId} />
            <p className="mt-4 text-sm text-ink-lt">
              Save the ZIP to your device. You can re-download from this page
              anytime using the same link.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-white p-6 text-left shadow-sm">
            <h2 className="font-display text-lg font-semibold text-navy-dark">
              What&apos;s in your download
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-mid">
              {PACKAGE_ITEMS.map((item) => (
                <li key={item.num} className="flex gap-3">
                  <span className="font-semibold text-sage">{item.num}</span>
                  <span>
                    <strong className="text-ink">{item.title}</strong> —{" "}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-sm text-ink-lt">
            Need help?{" "}
            <a
              href={`mailto:${getContactEmail("support")}`}
              className="font-medium text-sage hover:underline"
            >
              Email support
            </a>{" "}
            ·{" "}
            <Link href="/" className="font-medium text-sage hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}