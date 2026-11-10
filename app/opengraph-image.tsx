import { ImageResponse } from "next/og";

// Aperçu des liens partagés (WhatsApp, Facebook, LinkedIn…), généré au build. Les articles avec une couverture la gardent.
export const alt = "Eliana Foundation — Ensemble contre le cancer pédiatrique en RDC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TAGLINE = "Ensemble contre le cancer pédiatrique en RDC";

/** Police Google réduite aux lettres utilisées ; sans réseau au build, la police par défaut. */
async function googleFont(family: string, text: string) {
    try {
        const css = await fetch(`https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`).then(r => r.text());
        const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
        return url ? await fetch(url).then(r => r.arrayBuffer()) : null;
    } catch {
        return null;
    }
}

export default async function Image() {
    // Les polices du logo : Newsreader italique pour « Eliana », Figtree pour « FOUNDATION ».
    const [serifFont, sansFont] = await Promise.all([googleFont("Newsreader:ital@1", `Eliana${TAGLINE}`), googleFont("Figtree:wght@600", "FOUNDATION")]);
    const serif = serifFont ? "Newsreader" : undefined;
    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 96px", background: "#FAF8F5", color: "#14213D" }}>
                <svg width="200" height="200" viewBox="0 0 32 32" fill="none">
                    <path d="M3 23a13 13 0 0 1 26 0" stroke="#F0B44C" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M7.5 23a8.5 8.5 0 0 1 17 0" stroke="#D06A40" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M12 23a4 4 0 0 1 8 0" stroke="#5E95E6" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
                <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 150, lineHeight: 1, marginTop: -20 }}>Eliana</div>
                <div style={{ fontFamily: sansFont ? "Figtree" : undefined, fontSize: 26, fontWeight: 600, letterSpacing: "0.3em", color: "#5A6478", marginTop: 18 }}>FOUNDATION</div>
                <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 48, color: "#B0512B", marginTop: 56 }}>{TAGLINE}</div>
            </div>
        ),
        {
            ...size,
            fonts: [
                ...(serifFont ? [{ name: "Newsreader", data: serifFont, style: "italic" as const, weight: 400 as const }] : []),
                ...(sansFont ? [{ name: "Figtree", data: sansFont, style: "normal" as const, weight: 600 as const }] : []),
            ],
        },
    );
}
