/** Mise en page commune des mentions légales et de la politique de confidentialité. */
export function LegalPage({ eyebrow, title, accent, children }: { eyebrow: string; title: string; accent: string; children: React.ReactNode }) {
    return (
        <>
            <section className="container" style={{ paddingTop: "clamp(48px, 8vw, 88px)", paddingBottom: 40 }}>
                <span className="eyebrow h-anim">{eyebrow}</span>
                <h1 className="display h-anim h-a2" style={{ maxWidth: 820, margin: "8px 0 0" }}>
                    {title} <em className="accent">{accent}</em>
                </h1>
            </section>
            <section className="container" style={{ paddingBottom: "clamp(72px, 10vw, 112px)" }}>
                <div style={{ maxWidth: 760, display: "flex", flexDirection: "column" }}>{children}</div>
            </section>
        </>
    );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section style={{ borderTop: "1px solid var(--line)", padding: "28px 0", display: "flex", flexDirection: "column", gap: 8 }}>
            <h2 style={{ fontSize: 26, marginBottom: 6 }}>{title}</h2>
            {children}
        </section>
    );
}

/** Information pas encore saisie dans le dashboard : visible, pour ne pas l'oublier avant de compléter la fiche. */
export function ToFill({ what }: { what: string }) {
    return <mark style={{ background: "var(--accent-tint)", color: "var(--accent-strong)", padding: "0 6px", borderRadius: 4 }}>{what} : à compléter</mark>;
}
