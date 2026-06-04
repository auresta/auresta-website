// Thin wrapper over the Resend REST API (https://resend.com/docs/api-reference).
// Uses fetch directly so we don't add an SDK dependency. Requires, at minimum,
// RESEND_API_KEY in the environment (set in Vercel project settings).

const RESEND_ENDPOINT = "https://api.resend.com/emails";

// From address MUST be on a domain verified in Resend (verify auresta.com.au).
const DEFAULT_FROM = "Auresta Website <noreply@auresta.com.au>";
const DEFAULT_TO = "team@auresta.com.au";

type SendArgs = {
  subject: string;
  html: string;
  /** Submitter's address — set as reply-to so the team can reply directly. */
  replyTo?: string;
};

export async function sendEmail({ subject, html, replyTo }: SendArgs): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const from = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM;
  const to = process.env.CONTACT_TO_EMAIL || DEFAULT_TO;

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend API error ${res.status}: ${detail.slice(0, 500)}`);
  }
}
