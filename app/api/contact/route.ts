import { NextRequest, NextResponse } from "next/server";
import { CONTACT_SUBJECTS } from "@/lib/contact";

// Formulaire de contact → dashboard VWA (Demandes) : la demande y est enregistrée, l'association prévenue par email et
// le visiteur reçoit un accusé de réception. La clé du site (VWA_SITE_SECRET) reste côté serveur.

export async function POST(req: NextRequest) {
    const { VWA_API_URL: api, VWA_SITE_SECRET: secret, BUSINESS_ID: businessId } = process.env;
    if (!api || !secret || !businessId) return NextResponse.json({ error: "Formulaire non configuré" }, { status: 500 });

    const body: unknown = await req.json().catch(() => null);
    if (!body || typeof body !== "object") return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
    const pick = (k: string) => { const v = (body as Record<string, unknown>)[k]; return typeof v === "string" ? v : ""; };
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

    const res = await fetch(`${api.replace(/\/$/, "")}/api/v1/site/widgets/contact`, {
        method: "POST",
        headers: { "content-type": "application/json", "x-vwa-site-secret": secret, ...(ip ? { "x-vwa-visitor-ip": ip } : {}) },
        body: JSON.stringify({
            business_id: businessId,
            subjects: CONTACT_SUBJECTS,
            values: { first_name: pick("first_name"), last_name: pick("last_name"), email: pick("email"), phone: pick("phone"), subject: pick("subject"), message: pick("message") },
        }),
        cache: "no-store",
    }).catch(() => null);
    if (!res) return NextResponse.json({ error: "Service indisponible" }, { status: 503 });
    // Réponse du dashboard transmise telle quelle : 201, ou 422 avec le détail par champ.
    return NextResponse.json(await res.json().catch(() => ({})), { status: res.status });
}
