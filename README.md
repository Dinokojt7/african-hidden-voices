# African Hidden Voices — Website

Next.js 16 (App Router) website for African Hidden Voices (AHV), a global research institution for African Indigenous Spirituality (AIS).

---

## Environment Variables

Create a `.env.local` file in the project root. All variables below are required for full functionality.

### Firebase (Client SDK — public)

These are safe to expose in the browser. Get them from **Firebase Console → Project Settings → General → Your apps**.

| Variable | What it's for |
|---|---|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Authenticates requests to Firebase services from the browser |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Auth domain for Google sign-in popups |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Identifies your Firebase project |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase Storage bucket (for future file uploads) |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Cloud Messaging sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Unique ID for this Firebase web app |

### Firebase (Admin SDK — server only)

Used in server-side API routes. Never exposed to the browser. Get the values from **Firebase Console → Project Settings → Service Accounts → Generate new private key** (downloads a JSON file).

| Variable | What it's for |
|---|---|
| `FIREBASE_ADMIN_PROJECT_ID` | Same as your Firebase project ID |
| `FIREBASE_ADMIN_CLIENT_EMAIL` | Service account email from the downloaded JSON (`client_email`) |
| `FIREBASE_ADMIN_PRIVATE_KEY` | RSA private key from the downloaded JSON (`private_key`) — keep the `\n` line breaks |

### Stripe (Payments)

Used for the `/donate` page. Get keys from **Stripe Dashboard → Developers → API keys**.

| Variable | What it's for |
|---|---|
| `STRIPE_SECRET_KEY` | Secret key for creating checkout sessions on the server (`sk_live_...` or `sk_test_...`) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Public key used in the browser (`pk_live_...` or `pk_test_...`) |

### Resend (Transactional Email)

Used to send welcome emails when someone subscribes via `/newsletters`. Get your key from **resend.com → API Keys**.

| Variable | What it's for |
|---|---|
| `RESEND_API_KEY` | API key for sending transactional emails (`re_...`) |
| `RESEND_FROM_EMAIL` | The "from" address for newsletter emails — must be a verified domain in Resend |

### Site

| Variable | What it's for |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Full production URL (e.g. `https://african-hidden-voices.org`) — used by Stripe to redirect back after payment |

---

## Blog & Content Management

### How staff post content

All blog/news content is managed through the admin portal at:

```
/admin
```

**Access requires:**
1. A Google account
2. That account's UID must exist as a document in the Firestore `admins` collection

**To add a staff member as an admin:**
1. Ask them to attempt sign-in at `/admin` (they'll be blocked, but this creates their Firebase Auth entry)
2. Go to **Firebase Console → Authentication** and copy their UID
3. Go to **Firestore → admins collection → Add document**, set the document ID to their UID, add any field (e.g. `name: "Their Name"`)
4. They can now sign in and post

### What staff can do in the admin portal

- **Create new posts** — title, slug (auto-generated), author, topic, excerpt, cover image URL, body content
- **Save as draft** — post is saved but not visible on the public `/blog` page
- **Publish** — post goes live immediately on `/blog`
- **Toggle published/draft** — flip any post between live and hidden
- **Edit existing posts** — update any field and re-save
- **Delete posts** — permanent

### Public blog

The public blog listing is at `/blog`. Individual posts are at `/blog/[slug]`.

---

## Key Routes

| Route | Description |
|---|---|
| `/` | Homepage |
| `/about` | About AHV and the AIS framework |
| `/imboni` | The founding scholar |
| `/archive` | IImboni Database — documented spiritual authorities |
| `/research` | Research & Publications |
| `/areas-of-study` | The 6 AIS disciplines |
| `/podcast` | AHV Dialogue Series |
| `/blog` | Public blog / news listing |
| `/newsletters` | Newsletter subscription page |
| `/press` | Press releases and media kit |
| `/account` | User account — newsletter preferences, saved research |
| `/donate` | Donation page (Stripe) |
| `/contact` | Contact / collaboration enquiries |
| `/admin` | **Staff only** — blog post management |
| `/admin/new` | Create a new post |
| `/admin/edit/[id]` | Edit an existing post |

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + inline styles (design system tokens in `globals.css`)
- **Animations:** Framer Motion
- **Database:** Firebase Firestore
- **Auth:** Firebase Authentication (Google provider)
- **Payments:** Stripe Checkout
- **Email:** Resend
- **Fonts:** Spectral (headings), Hanken Grotesk (UI), Cinzel (display numbers)

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
