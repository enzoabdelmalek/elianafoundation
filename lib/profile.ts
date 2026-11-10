/**
 * Coordonnées et informations légales de l'association, saisies dans le dashboard VWA (Paramètres → Établissement),
 * lues par la route /site/profile avec la clé du site. Même forme que `SiteProfile` de @vwa/site-kit (champs utiles ici).
 */
export type Legal = { legal_name: string; legal_form: string; siret: string; publisher: string; mentions: string };
export type Profile = {
    name: string;
    email: string | null;
    address_line: string | null;
    postal_code: string | null;
    city: string | null;
    legal?: Partial<Legal>;
};

export const CONTACT_EMAIL = "contact@elianafoundation.org";

/** null : dashboard injoignable ou site non configuré (les pages affichent alors ce qu'elles ont par défaut). */
export async function getProfile(): Promise<Profile | null> {
    const { VWA_API_URL: api, VWA_SITE_SECRET: secret, BUSINESS_ID: businessId } = process.env;
    if (!api || !secret || !businessId) return null;
    const res = await fetch(`${api.replace(/\/$/, "")}/api/v1/site/profile?business_id=${businessId}`, {
        headers: { "x-vwa-site-secret": secret },
        next: { revalidate: 3600 },
    }).catch(() => null);
    if (!res?.ok) return null;
    const json = await res.json().catch(() => null);
    return json?.profile ?? null;
}

export const fullAddress = (p: Profile | null) =>
    [p?.address_line, [p?.postal_code, p?.city].filter(Boolean).join(" ")].filter(Boolean).join(", ");
