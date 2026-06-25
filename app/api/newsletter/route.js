import { NextResponse } from "next/server";
import { collection, addDoc, query, where, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Resend } from "resend";

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");
  try {
    const { email, firstName, topics } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required." }, { status: 400 });
    }

    // Check for duplicate
    const existing = await getDocs(query(collection(db, "subscribers"), where("email", "==", email.toLowerCase())));
    if (!existing.empty) {
      return NextResponse.json({ error: "This email is already subscribed." }, { status: 409 });
    }

    // Save to Firestore
    await addDoc(collection(db, "subscribers"), {
      email: email.toLowerCase(),
      firstName: firstName || "",
      topics: topics || [],
      subscribedAt: serverTimestamp(),
      active: true,
    });

    // Send welcome email if Resend key is configured
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "newsletters@african-hidden-voices.org",
        to: email,
        subject: "Welcome to AHV Research Updates",
        html: `
          <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #111;">
            <div style="background:#111; padding:24px 32px; border-bottom: 3px solid #C9A24B;">
              <div style="font-family: Arial, sans-serif; font-size:11px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:#C9A24B; margin-bottom:8px;">African Hidden Voices</div>
              <div style="color:rgba(255,255,255,.9); font-size:13px; font-family:Arial,sans-serif;">Research Updates — You're subscribed</div>
            </div>
            <div style="padding: 40px 32px;">
              <p style="font-size:20px; line-height:1.4; margin:0 0 20px;">
                ${firstName ? `Welcome, ${firstName}.` : "Welcome."}
              </p>
              <p style="font-size:16px; line-height:1.75; color:#3A3530; margin:0 0 20px;">
                You're now subscribed to AHV Research Updates. You'll receive new research findings, database entries, institutional news, and AIS scholarship directly to your inbox.
              </p>
              ${topics?.length ? `
              <p style="font-size:14px; font-family:Arial,sans-serif; color:#5C5650; margin:0 0 8px;">Your selected topics:</p>
              <ul style="margin:0 0 24px; padding-left:20px; color:#3A3530; font-size:15px; line-height:1.8;">
                ${topics.map((t) => `<li>${t}</li>`).join("")}
              </ul>` : ""}
              <p style="font-size:14px; font-family:Arial,sans-serif; color:#5C5650; margin:0;">
                <a href="https://african-hidden-voices.org/newsletters/unsubscribe?email=${encodeURIComponent(email)}" style="color:#8C6B1A;">Unsubscribe</a> at any time.
              </p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Subscription failed. Please try again." }, { status: 500 });
  }
}
