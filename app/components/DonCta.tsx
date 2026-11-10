import Link from "next/link";

/** Appel au don en fin de page (accueil, actualités, articles). */
export default function DonCta() {
    return (
        <section className="container" style={{ paddingBottom: "clamp(72px, 10vw, 112px)" }}>
            <div className="cta-panel" data-sr>
                <svg viewBox="0 0 504 252" fill="none" aria-hidden="true" style={{ position: "absolute", left: "50%", bottom: -2, width: 720, maxWidth: "140%", transform: "translateX(-50%)", opacity: 0.22 }}>
                    <path d="M20 252a232 232 0 0 1 464 0M60 252a192 192 0 0 1 384 0M100 252a152 152 0 0 1 304 0" stroke="#fff" strokeWidth="2" />
                </svg>
                <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
                    <h2 className="h2" style={{ marginBottom: 20 }}>Ensemble, faisons une <em>réelle différence</em></h2>
                    <p style={{ fontSize: 18, color: "rgba(255,255,255,.9)", marginBottom: 36 }}>
                        Chaque geste compte. Soutenez Eliana Foundation dans sa mission de lutte contre le cancer pédiatrique en RDC.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
                        <Link href="/don" className="btn btn-light">Faire un don</Link>
                        <Link href="/contact" className="btn btn-ghost-light">Nous contacter</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
