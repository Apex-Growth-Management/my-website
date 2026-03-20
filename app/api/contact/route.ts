import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

const resend = new Resend(process.env.RESEND_API_KEY);
const ZAPIER_WEBHOOK = "https://hooks.zapier.com/hooks/catch/26639307/u0709gu/";
const LEAD_ALERT_WEBHOOK = "https://agm-lead-form-alert.wispy-darkness-dcb3.workers.dev";

// ── Rate limiting (5 submissions per IP per minute) ──────────────────────────
const rateMap = new Map<string, number[]>();
const WINDOW = 60_000;
const LIMIT = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateMap.get(ip) ?? []).filter((t) => now - t < WINDOW);
  if (hits.length >= LIMIT) return true;
  rateMap.set(ip, [...hits, now]);
  return false;
}

// ── Input helpers ─────────────────────────────────────────────────────────────
function clean(val: unknown, max: number): string {
  return typeof val === "string" ? val.trim().slice(0, max).replace(/[<>]/g, "") : "";
}
function validEmail(e: string): boolean {
  return e.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

export async function POST(req: NextRequest) {
  // Rate limit
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    Sentry.captureMessage("Contact form rate limited", {
      level: "warning",
      extra: { ip, timestamp: new Date().toISOString() },
    });
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json();

  // Validate & sanitize
  const firstName  = clean(body.firstName, 100);
  const lastName   = clean(body.lastName,  100);
  const email      = clean(body.email,     254);
  const business   = clean(body.business,  200);
  const service    = clean(body.service,   100);
  const phone      = clean(body.phone,     30);
  const message    = clean(body.message,  2000);
  const utmSource  = clean(body.utm_source,   100);
  const utmMedium  = clean(body.utm_medium,   100);
  const utmCampaign = clean(body.utm_campaign, 100);

  if (!firstName || !lastName || !validEmail(email)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  // Turnstile verification (skip if secret not configured)
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const turnstileToken = typeof body.turnstileToken === "string" ? body.turnstileToken : "";
    if (!turnstileToken) {
      return NextResponse.json({ error: "CAPTCHA verification required" }, { status: 400 });
    }
    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: turnstileSecret, response: turnstileToken, remoteip: ip }),
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      Sentry.captureMessage("Turnstile verification failed", { level: "warning", extra: { ip, codes: verifyData["error-codes"] } });
      return NextResponse.json({ error: "CAPTCHA verification failed" }, { status: 403 });
    }
  }

  // Send email via Resend
  const { error } = await resend.emails.send({
    from: "Apex Growth Contact <noreply@apexgrowthmanagement.com>",
    to: "admin@apexgrowthmanagement.com",
    subject: `New inquiry from ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Business:</strong> ${business || "Not provided"}</p>
      <p><strong>Service:</strong> ${service || "Not selected"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      ${utmSource ? `<hr><p style="color:#888;font-size:13px;"><strong>Source:</strong> ${utmSource} / ${utmMedium} / ${utmCampaign}</p>` : ""}
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
    html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background-color:#111827;border-radius:12px 12px 0 0;padding:32px;text-align:center;">
          <img src="https://apexgrowthmanagement.com/logo.png" alt="Apex Growth Management" height="40" style="filter:brightness(0) invert(1);max-width:180px;" />
        </td></tr>

        <!-- Blue accent line -->
        <tr><td style="background-color:#2563eb;height:4px;font-size:0;line-height:0;">&nbsp;</td></tr>

        <!-- Body -->
        <tr><td style="background-color:#ffffff;padding:40px 40px 32px;">
          <h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#111827;">Thanks for reaching out, ${firstName}!</h1>
          <p style="margin:0 0 24px;font-size:16px;color:#6b7280;line-height:1.6;">We received your message and will get back to you within <strong style="color:#111827;">24 hours</strong>. Here's a summary of what you sent us:</p>

          <!-- Summary box -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;margin-bottom:28px;">
            <tr>
              <td style="padding:14px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#6b7280;width:120px;vertical-align:top;">Service</td>
              <td style="padding:14px 16px;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111827;font-weight:500;">${service || "Not specified"}</td>
            </tr>
            ${business ? `<tr>
              <td style="padding:14px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#6b7280;vertical-align:top;">Business</td>
              <td style="padding:14px 16px;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111827;font-weight:500;">${business}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:14px 16px;font-size:13px;color:#6b7280;vertical-align:top;">Message</td>
              <td style="padding:14px 16px;font-size:14px;color:#111827;line-height:1.5;">${message}</td>
            </tr>
          </table>

          <!-- Calendly CTA -->
          <p style="margin:0 0 16px;font-size:15px;color:#374151;">Prefer to talk through it? Book a free 15-minute call at a time that works for you.</p>
          <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
            <tr><td style="background-color:#2563eb;border-radius:50px;">
              <a href="https://calendly.com/apexgrowthmanagement" style="display:inline-block;padding:14px 28px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;">Book a Free Call →</a>
            </td></tr>
          </table>

          <!-- Onboarding nudge -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;margin-bottom:8px;">
            <tr><td style="padding:16px 20px;">
              <p style="margin:0 0 4px;font-size:14px;font-weight:600;color:#1e40af;">Already ready to move forward?</p>
              <p style="margin:0 0 12px;font-size:13px;color:#3b82f6;line-height:1.5;">Fill out our onboarding form so we can hit the ground running when we connect.</p>
              <a href="https://www.jotform.com/form/260581311492049" style="font-size:13px;font-weight:600;color:#2563eb;text-decoration:underline;">Fill Out Onboarding Form →</a>
            </td></tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background-color:#111827;border-radius:0 0 12px 12px;padding:24px 40px;text-align:center;">
          <p style="margin:0 0 8px;font-size:13px;color:rgba(255,255,255,0.5);">Raleigh, NC</p>
          <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.4);">
            <a href="tel:9197440504" style="color:rgba(255,255,255,0.5);text-decoration:none;">(919) 744-0504</a>
            &nbsp;·&nbsp;
            <a href="mailto:admin@apexgrowthmanagement.com" style="color:rgba(255,255,255,0.5);text-decoration:none;">admin@apexgrowthmanagement.com</a>
          </p>
          <p style="margin:12px 0 0;font-size:11px;color:rgba(255,255,255,0.25);">© ${new Date().getFullYear()} Apex Growth Management. All rights reserved.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
  });

  // Send to Zapier webhook + lead alert worker (fire-and-forget, don't block response)
  const webhookPayload = JSON.stringify({ firstName, lastName, email, phone, business, service, message, utmSource, utmMedium, utmCampaign });
  const webhookHeaders = { "Content-Type": "application/json" };
  const webhookResults = await Promise.allSettled([
    fetch(ZAPIER_WEBHOOK, { method: "POST", headers: webhookHeaders, body: webhookPayload }),
    fetch(LEAD_ALERT_WEBHOOK, { method: "POST", headers: webhookHeaders, body: webhookPayload }),
  ]);
  const webhookNames = ["Zapier", "Lead Alert Worker"];
  webhookResults.forEach((result, i) => {
    if (result.status === "rejected") {
      Sentry.captureException(result.reason, { extra: { webhook: webhookNames[i], email } });
    } else if (!result.value.ok) {
      Sentry.captureMessage(`${webhookNames[i]} webhook returned ${result.value.status}`, {
        level: "error",
        extra: { webhook: webhookNames[i], status: result.value.status, email },
      });
    }
  });

  // Create or update HubSpot contact + deal
  const hubspotToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (hubspotToken) {
    const hsHeaders = { "Content-Type": "application/json", Authorization: `Bearer ${hubspotToken}` };
    const contactProps = {
      firstname: firstName,
      lastname: lastName,
      email,
      phone: phone || "",
      company: business || "",
      hs_lead_status: "NEW",
      message,
      ...(utmSource && {
        hs_analytics_source: utmSource,
        hs_analytics_source_data_1: utmMedium,
        hs_analytics_source_data_2: utmCampaign,
      }),
    };

    try {
      // Search for existing contact by email
      let contactId: string | null = null;
      const searchRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/search", {
        method: "POST",
        headers: hsHeaders,
        body: JSON.stringify({
          filterGroups: [{ filters: [{ propertyName: "email", operator: "EQ", value: email }] }],
          properties: ["email"],
          limit: 1,
        }),
      });

      if (searchRes.ok) {
        const searchData = await searchRes.json();
        if (searchData.total > 0) {
          contactId = searchData.results[0].id;
        }
      }

      if (contactId) {
        // Update existing contact
        await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`, {
          method: "PATCH",
          headers: hsHeaders,
          body: JSON.stringify({ properties: contactProps }),
        });
      } else {
        // Create new contact
        const contactRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
          method: "POST",
          headers: hsHeaders,
          body: JSON.stringify({ properties: contactProps }),
        });
        if (contactRes.ok) {
          const contactData = await contactRes.json();
          contactId = contactData.id;
        }
      }

      // Create deal linked to the contact
      const dealRes = await fetch("https://api.hubapi.com/crm/v3/objects/deals", {
        method: "POST",
        headers: hsHeaders,
        body: JSON.stringify({
          properties: {
            dealname: `${firstName} ${lastName}${business ? ` — ${business}` : ""}`,
            pipeline: "default",
            dealstage: "appointmentscheduled",
            description: `Service: ${service || "Not specified"}\n\n${message}`,
          },
        }),
      });

      // Associate deal with contact
      if (contactId && dealRes.ok) {
        const dealData = await dealRes.json();
        await fetch(
          `https://api.hubapi.com/crm/v3/objects/deals/${dealData.id}/associations/contacts/${contactId}/deal_to_contact`,
          {
            method: "PUT",
            headers: { Authorization: `Bearer ${hubspotToken}` },
          }
        );
      }
    } catch {
      // HubSpot errors don't fail the form — silently continue
    }
  }

  return NextResponse.json({ success: true });
}
