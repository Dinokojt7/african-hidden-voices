import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_placeholder");
  try {
    const { amount, frequency, donorName, donorEmail, message } = await req.json();

    if (!amount || amount < 1) {
      return NextResponse.json({ error: "Invalid amount." }, { status: 400 });
    }

    const metadata = {
      donorName: donorName || "Anonymous",
      message: message || "",
      frequency,
    };

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    if (frequency === "monthly") {
      // Recurring — create a price on the fly then a checkout session
      const price = await stripe.prices.create({
        currency: "zar",
        unit_amount: Math.round(amount * 100),
        recurring: { interval: "month" },
        product_data: { name: "AHV Monthly Research Support" },
      });

      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [{ price: price.id, quantity: 1 }],
        customer_email: donorEmail || undefined,
        metadata,
        success_url: `${baseUrl}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/donate`,
      });

      return NextResponse.json({ url: session.url });
    } else {
      // One-time payment
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [{
          price_data: {
            currency: "zar",
            unit_amount: Math.round(amount * 100),
            product_data: {
              name: "AHV Research Donation",
              description: "Supporting African Indigenous Spirituality research at African Hidden Voices",
            },
          },
          quantity: 1,
        }],
        customer_email: donorEmail || undefined,
        metadata,
        success_url: `${baseUrl}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/donate`,
      });

      return NextResponse.json({ url: session.url });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
