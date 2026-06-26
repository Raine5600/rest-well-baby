# Rest Well Baby — Digital Product Storefront

A Next.js storefront for selling the **Rest Well Baby Infant Sleep System** PDF package. Built for [Vercel](https://vercel.com) with [Stripe Checkout](https://stripe.com) payments and secure post-purchase downloads.

## Features

- Branded landing page with product details, pricing, and FAQ
- Stripe Checkout (one-time $24 purchase)
- Secure download — only verified paid sessions can access the ZIP
- Success page with re-download support
- Stripe webhook for purchase logging

## Quick start (local)

```bash
npm install
cp .env.example .env.local
# Add your Stripe test keys to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Test payments

Use [Stripe test cards](https://docs.stripe.com/testing#cards): `4242 4242 4242 4242`, any future expiry, any CVC.

### Local webhooks (optional)

```bash
stripe listen --forward-to localhost:3000/api/webhook
```

Copy the webhook signing secret into `STRIPE_WEBHOOK_SECRET`.

## Deploy to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial Rest Well Baby storefront"
git remote add origin https://github.com/YOUR_USERNAME/rest-well-baby.git
git push -u origin main
```

### 2. Import in Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your `rest-well-baby` repository
3. Framework preset: **Next.js** (auto-detected)
4. Deploy

### 3. Add environment variables

In Vercel → Project → Settings → Environment Variables:

| Variable | Value |
|----------|-------|
| `STRIPE_SECRET_KEY` | `sk_live_...` (or test key while testing) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_live_...` |
| `STRIPE_WEBHOOK_SECRET` | From Stripe webhook (step 4) |
| `NEXT_PUBLIC_APP_URL` | `https://your-domain.vercel.app` |

Redeploy after adding variables.

### 4. Configure Stripe webhook (production)

1. [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks)
2. Add endpoint: `https://your-domain.vercel.app/api/webhook`
3. Events: `checkout.session.completed`
4. Copy signing secret → `STRIPE_WEBHOOK_SECRET` in Vercel

### 5. Custom domain (optional)

Vercel → Project → Settings → Domains → add `restwellbaby.com` (or your domain).

Update `NEXT_PUBLIC_APP_URL` to match.

## Product file

The downloadable ZIP lives at:

```
private/downloads/Rest_Well_Baby_Sleep_System_Package.zip
```

To update the product, replace this file and redeploy. It is **not** publicly accessible — downloads go through `/api/download` after Stripe payment verification.

## Project structure

```
app/
  page.tsx              # Landing page
  success/page.tsx      # Post-purchase download page
  api/checkout/         # Creates Stripe Checkout session
  api/download/         # Serves ZIP to paid customers
  api/webhook/          # Stripe event handler
components/             # UI sections
lib/                    # Product config, Stripe helpers
private/downloads/      # Product ZIP (server-only)
public/images/          # Marketing images
```

## Support email

Update `support@restwellbaby.com` in `components/Footer.tsx` and `app/success/page.tsx` with your real support address.

## Tech stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- Stripe Checkout
- TypeScript