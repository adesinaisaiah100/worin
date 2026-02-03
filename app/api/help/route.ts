import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type HelpPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY" },
      { status: 500 }
    );
  }

  let body: Partial<HelpPayload>;
  try {
    body = (await req.json()) as Partial<HelpPayload>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = normalize(body.name);
  const phone = normalize(body.phone);
  const email = normalize(body.email);
  const message = normalize(body.message);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Name is required";
  if (phone.length < 7) errors.phone = "Phone number is required";
  if (!isValidEmail(email)) errors.email = "Valid email is required";
  if (message.length < 10) errors.message = "Message is required";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Validation failed", errors }, { status: 400 });
  }

  const resend = new Resend(resendApiKey);

  const toAddress = process.env.HELP_TO_EMAIL ?? "yembukad@yahoo.com";
  const fromAddress =
    process.env.HELP_FROM_EMAIL ?? "WORIN Help <onboarding@resend.dev>";

  const subject = `WORIN Help Request — ${name}`;
  const text = [
    "New help request received:",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height:1.6">
      <h2 style="margin:0 0 12px; color:#2E1A47">New help request</h2>
      <table style="border-collapse:collapse; width:100%; max-width:640px">
        <tr><td style="padding:6px 0; color:#555">Name</td><td style="padding:6px 0"><strong>${escapeHtml(
          name
        )}</strong></td></tr>
        <tr><td style="padding:6px 0; color:#555">Phone</td><td style="padding:6px 0"><strong>${escapeHtml(
          phone
        )}</strong></td></tr>
        <tr><td style="padding:6px 0; color:#555">Email</td><td style="padding:6px 0"><strong>${escapeHtml(
          email
        )}</strong></td></tr>
      </table>
      <div style="margin-top:16px; padding:14px; border-radius:12px; background:#FDFBF7; border:1px solid rgba(197,160,89,0.35)">
        <div style="font-weight:700; color:#2E1A47; margin-bottom:6px">Message</div>
        <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
      </div>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      subject,
      replyTo: email,
      text,
      html,
    });

    return NextResponse.json({ ok: true, id: result.data?.id ?? null });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to send";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
