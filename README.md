# Rest Well Baby — Digital Product Storefront

A Next.js storefront for selling the **Rest Well Baby Infant Sleep System** PDF package. Built for [Vercel](https://vercel.com) with [Stripe Checkout](https://stripe.com) payments and secure post-purchase downloads.

## Features

- Branded landing page with product details, pricing, and FAQ
- Stripe Checkout (one-time $24 purchase)
- Secure download — only verified paid sessions can access the ZIP
- Success page with re-download support
- Stripe webhook logs every purchase (view at `/admin`)

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

| Variable | Required | Value |
|----------|----------|-------|
| `STRIPE_SECRET_KEY` | Yes | Your `sk_live_...` key |
| `STRIPE_WEBHOOK_SECRET` | Yes | From Stripe webhook (step 4) |
| `ADMIN_PASSWORD` | Yes | Password for `/admin` purchase log |
| `BLOB_READ_WRITE_TOKEN` | Recommended | Vercel → Storage → Blob → token |
| `NEXT_PUBLIC_APP_URL` | Optional | `https://your-domain.vercel.app` |

Redeploy after adding variables.

### 4. Connect Stripe webhook (purchase logging)

1. Deploy once so you have a live URL (e.g. `https://rest-well-baby.vercel.app`)
2. [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks) → **Add endpoint**
3. Endpoint URL: `https://YOUR-DOMAIN.vercel.app/api/webhook`
4. Select event: **`checkout.session.completed`**
5. Click **Add endpoint** → reveal **Signing secret** (`whsec_...`)
6. Paste into Vercel as `STRIPE_WEBHOOK_SECRET` → **Redeploy**

Each completed purchase is logged automatically. View them at **`/admin`** (use your `ADMIN_PASSWORD`).

**Optional — persistent storage:** Vercel → your project → **Storage** → Create **Blob** store → connect to project → copy `BLOB_READ_WRITE_TOKEN` into env vars. Without this, `/admin` still works by reading from Stripe directly.

**Test webhook:** Stripe → Webhooks → your endpoint → **Send test event** → `checkout.session.completed`

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