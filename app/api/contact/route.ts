import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { clamp, isEmail, escapeHtml, singleLine } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const rl = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60_000 });
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfter) } }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a hidden field real users never see. If it's filled, it's a bot —
  // pretend success and drop the submission.
  if (clamp(body.website, 100) !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = clamp(body.name, 200);
  const company = clamp(body.company, 200);
  const email = clamp(body.email, 320);
  const phone = clamp(body.phone, 50);
  const industry = clamp(body.industry, 100);
  const concern = clamp(body.concern, 100);
  const message = clamp(body.message, 5000);

  if (!name || !company || !email || !industry || !concern) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Company", company],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Industry", industry],
    ["Primary concern", concern],
    ["Message", message || "—"],
  ];

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
      <h2 style="margin:0 0 16px;font-size:18px;">New free-assessment booking</h2>
      <table style="border-collapse:collapse;width:100%;max-width:560px;font-size:14px;">
        ${rows
          .map(
            ([k, v]) => `
        <tr>
          <td style="padding:8px 12px;background:#f1f5f9;font-weight:600;border:1px solid #e2e8f0;white-space:nowrap;vertical-align:top;">${escapeHtml(k)}</td>
          <td style="padding:8px 12px;border:1px solid #e2e8f0;white-space:pre-wrap;">${escapeHtml(v)}</td>
        </tr>`
          )
          .join("")}
      </table>
      <p style="margin-top:16px;color:#64748b;font-size:12px;">Submitted from the auresta.com.au contact form. Reply to this email to reach ${escapeHtml(name)} directly.</p>
    </div>`;

  try {
    await sendEmail({
      subject: singleLine(`New assessment booking — ${name} @ ${company}`),
      html,
      replyTo: email,
    });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please email team@auresta.com.au directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
