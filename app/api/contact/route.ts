import { NextResponse } from "next/server";

/**
 * İletişim formu uç noktası.
 * Şu an talebi doğrulayıp sunucu loguna yazar. Yayına almadan önce
 * aşağıdaki TODO kısmına e-posta (Resend, Postmark) veya CRM / Google Sheets / n8n webhook bağlayın.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Geçersiz istek" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  if (!name || (!phone && !email)) {
    return NextResponse.json({ ok: false, error: "Ad ve en az bir iletişim bilgisi gerekli" }, { status: 422 });
  }
  if (String(body.message ?? "").length > 5000) {
    return NextResponse.json({ ok: false, error: "Mesaj çok uzun" }, { status: 413 });
  }

  const lead = {
    name,
    phone,
    email,
    business: String(body.business ?? ""),
    sector: String(body.sector ?? ""),
    services: Array.isArray(body.services) ? body.services.map(String) : [],
    budget: String(body.budget ?? ""),
    message: String(body.message ?? ""),
    receivedAt: new Date().toISOString(),
  };

  // TODO: e-posta / CRM / webhook entegrasyonu
  // await fetch(process.env.LEAD_WEBHOOK_URL!, { method: "POST", body: JSON.stringify(lead) });
  console.info("[lead]", lead);

  return NextResponse.json({ ok: true });
}
