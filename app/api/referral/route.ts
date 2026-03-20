import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function clean(val: unknown, max: number): string {
  return typeof val === "string" ? val.trim().slice(0, max).replace(/[<>]/g, "") : "";
}
function validEmail(e: string): boolean {
  return e.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const referrerName = clean(body.referrerName, 200);
  const referrerEmail = clean(body.referrerEmail, 254);
  const businessName = clean(body.businessName, 200);
  const contactName = clean(body.contactName, 200);
  const contactPhone = clean(body.contactPhone, 30);
  const contactEmail = clean(body.contactEmail, 254);
  const notes = clean(body.notes, 2000);

  if (!referrerName || !validEmail(referrerEmail) || !businessName) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  // Admin notification
  await resend.emails.send({
    from: "Apex Growth Referrals <noreply@apexgrowthmanagement.com>",
    to: "admin@apexgrowthmanagement.com",
    subject: `New Referral from ${referrerName}: ${businessName}`,
    html: `
      <h2>New Referral Submission</h2>
      <hr>
      <h3>Referred By</h3>
      <p><strong>Name:</strong> ${referrerName}</p>
      <p><strong>Email:</strong> ${referrerEmail}</p>
      <hr>
      <h3>Business Referred</h3>
      <p><strong>Business:</strong> ${businessName}</p>
      <p><strong>Contact:</strong> ${contactName || "Not provided"}</p>
      <p><strong>Phone:</strong> ${contactPhone || "Not provided"}</p>
      <p><strong>Email:</strong> ${contactEmail || "Not provided"}</p>
      ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ""}
      <hr>
      <p style="color:#888;font-size:13px;">$200 credit owed to ${referrerName} (${referrerEmail}) if this referral converts.</p>
    `,
  });

  // Confirmation email to referrer
  await resend.emails.send({
    from: "Apex Growth Management <noreply@apexgrowthmanagement.com>",
    to: referrerEmail,
    subject: "We got your referral — thanks!",
    html: `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:500px;margin:0 auto;padding:20px;">
        <h2 style="color:#111827;">Thanks for the referral, ${referrerName}!</h2>
        <p style="color:#6b7280;line-height:1.6;">
          We received your referral for <strong style="color:#111827;">${businessName}</strong> and will reach out to them soon.
        </p>
        <p style="color:#6b7280;line-height:1.6;">
          As a reminder, you'll receive a <strong style="color:#111827;">$200 credit</strong> on your next invoice when they sign up for a monthly plan. We'll email you when it happens.
        </p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
        <p style="color:#9ca3af;font-size:13px;">
          Apex Growth Management<br>
          <a href="mailto:admin@apexgrowthmanagement.com" style="color:#2563eb;">admin@apexgrowthmanagement.com</a> · (919) 744-0504
        </p>
      </div>
    `,
  }).catch(() => {});

  // Create HubSpot contact for the referred business
  const hubspotToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (hubspotToken && (contactEmail || contactPhone)) {
    const hsHeaders = { "Content-Type": "application/json", Authorization: `Bearer ${hubspotToken}` };
    try {
      const contactRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: hsHeaders,
        body: JSON.stringify({
          properties: {
            ...(contactName && { firstname: contactName.split(" ")[0], lastname: contactName.split(" ").slice(1).join(" ") || "" }),
            ...(contactEmail && { email: contactEmail }),
            phone: contactPhone || "",
            company: businessName,
            hs_lead_status: "NEW",
            message: `REFERRAL from ${referrerName} (${referrerEmail}). ${notes}`.trim(),
          },
        }),
      });

      if (contactRes.ok) {
        const contactData = await contactRes.json();
        // Create deal
        const dealRes = await fetch("https://api.hubapi.com/crm/v3/objects/deals", {
          method: "POST",
          headers: hsHeaders,
          body: JSON.stringify({
            properties: {
              dealname: `${businessName} (Referral from ${referrerName})`,
              pipeline: "default",
              dealstage: "appointmentscheduled",
              description: `Referred by: ${referrerName} (${referrerEmail})\n\n${notes}`,
            },
          }),
        });
        if (dealRes.ok) {
          const dealData = await dealRes.json();
          await fetch(
            `https://api.hubapi.com/crm/v3/objects/deals/${dealData.id}/associations/contacts/${contactData.id}/deal_to_contact`,
            { method: "PUT", headers: { Authorization: `Bearer ${hubspotToken}` } }
          );
        }
      }
    } catch {
      // HubSpot errors don't fail the form
    }
  }

  return NextResponse.json({ success: true });
}
