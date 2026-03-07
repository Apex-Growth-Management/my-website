import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const ZAPIER_WEBHOOK = "https://hooks.zapier.com/hooks/catch/26639307/u0709gu/";

export async function POST(req: Request) {
  const { firstName, lastName, email, business, service, message } = await req.json();

  // Send email via Resend
  const { error } = await resend.emails.send({
    from: "Apex Growth Contact <noreply@apexgrowthmanagement.com>",
    to: "admin@apexgrowthmanagement.com",
    subject: `New inquiry from ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Business:</strong> ${business || "Not provided"}</p>
      <p><strong>Service:</strong> ${service || "Not selected"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  // Send confirmation email to lead
  await resend.emails.send({
    from: "Apex Growth Management <noreply@apexgrowthmanagement.com>",
    to: email,
    subject: "We got your message — we'll be in touch soon!",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
        <h2 style="color: #2563eb;">Thanks for reaching out, ${firstName}!</h2>
        <p>We received your message and will get back to you within 24 hours.</p>
        <p>Here's a summary of what you sent us:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Service</td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${service || "Not specified"}</td></tr>
          ${business ? `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Business</td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${business}</td></tr>` : ""}
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Message</td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${message}</td></tr>
        </table>
        <p>In the meantime, feel free to <a href="https://calendly.com/admin-apexgrowthmanagement/30min" style="color: #2563eb;">book a free 30-min call</a> if you'd prefer to talk.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <p style="color: #6b7280; font-size: 14px;">Apex Growth Management · Raleigh, NC · (919) 744-0504</p>
      </div>
    `,
  });

  // Send to Zapier webhook
  await fetch(ZAPIER_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, email, business, service, message }),
  });

  return NextResponse.json({ success: true });
}
