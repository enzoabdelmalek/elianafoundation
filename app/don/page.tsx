import Link from "next/link";
import { IconArrow, IconButterfly, IconCheck } from "../components/Icons";

export const metadata = {
    title: "Faire un don — Fondation Eliana",
    description: "Soutenez la Fondation Eliana dans sa lutte contre le cancer pédiatrique en RDC.",
};

// Adresse « widget » du formulaire de don HelloAsso (HelloAsso > formulaire > Diffusion > Intégrer).
// Vide : la page explique que la collecte n'est pas encore ouverte.
const HELLOASSO_WIDGET_URL = process.env.HELLOASSO_WIDGET_URL;

const TRUST = [
    "Transparence totale sur l'utilisation des fonds",
    "12 hôpitaux partenaires certifiés en RDC",
    "Rapport annuel d'activité disponible",
];

export default function DonPage() {
    return (
        <>
            {/* ── HERO compact navy ── */}
            <section style={{
                background: "linear-gradient(150deg, var(--navy-deep) 0%, var(--navy) 100%)",
                padding: "clamp(60px, 9vw, 100px) 0 clamp(80px, 12vw, 130px)",
                textAlign: "center", color: "#fff", position: "relative", overflow: "hidden",
                marginTop: -92,
            }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(217,119,6,.14) 0%, transparent 60%)", pointerEvents: "none" }} />
                <div className="container-sm" style={{ position: "relative", zIndex: 1 }}>
                    <div className="h-anim h-a1" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                        <div className="float"><IconButterfly size={44} color="rgba(255,255,255,.5)" /></div>
                    </div>
                    <p className="h-anim h-a2 section-label section-label-white" style={{ textAlign: "center" }}>Faire un don</p>
                    <h1 className="h-anim h-a3" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", marginBottom: 16, lineHeight: 1.12 }}>
                        Ensemble, changeons{" "}
                        <span className="font-script" style={{ color: "var(--gold)", fontSize: "1.08em" }}>des vies</span>
                    </h1>
                    <p className="h-anim h-a4" style={{ color: "rgba(255,255,255,.65)", fontSize: "1rem", lineHeight: 1.9, maxWidth: 520, margin: "0 auto" }}>
                        Votre soutien permet à la Fondation Eliana de continuer sa mission pour chaque enfant atteint de cancer en RDC.
                    </p>
                </div>
            </section>

            {/* ── FORM (chevauche le hero) ── */}
            <section style={{ background: "var(--beige)", paddingBottom: "clamp(64px, 10vw, 100px)" }}>
                <div className="container">
                    <div className="grid-don-form" style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "clamp(32px, 5vw, 56px)", alignItems: "start", marginTop: -60, position: "relative", zIndex: 1 }}>

                        {/* Card don : formulaire HelloAsso, ou message tant que la collecte n'est pas ouverte */}
                        <div style={{ background: "#fff", borderRadius: 24, boxShadow: "0 32px 80px rgba(15,37,64,.15)", overflow: "hidden" }}>
                            {HELLOASSO_WIDGET_URL ? (
                                <iframe src={HELLOASSO_WIDGET_URL} title="Formulaire de don HelloAsso"
                                    style={{ display: "block", width: "100%", height: 760, border: "none" }} />
                            ) : (
                                <div style={{ padding: "clamp(28px, 4vw, 44px)", textAlign: "center" }}>
                                    <div className="float" style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                                        <IconButterfly size={48} color="var(--navy)" />
                                    </div>
                                    <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", color: "var(--navy)", marginBottom: 14 }}>
                                        La collecte de dons arrive bientôt
                                    </h2>
                                    <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: 460, margin: "0 auto 28px" }}>
                                        La collecte de dons n&apos;est pas encore active sur notre site. Vous pouvez nous contacter via le formulaire pour avoir plus d&apos;informations.
                                    </p>
                                    <Link href="/contact" className="btn btn-gold">
                                        Nous contacter <IconArrow size={14} color="#fff" />
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="sidebar-don-pt" style={{ display: "flex", flexDirection: "column", gap: 20, paddingTop: 60 }}>
                            {/* Photo */}
                            <div className="photo-slot" style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }}>
                                <img src="https://picsum.photos/seed/eliana-don/600/450" alt="Impact de vos dons en RDC" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>

                            {/* Pourquoi donner */}
                            <div style={{ padding: "28px", borderRadius: 20, background: "var(--navy-deep)", color: "#fff" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                                    <IconButterfly size={22} color="rgba(255,255,255,.5)" />
                                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700 }}>Pourquoi donner ?</h3>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                    {TRUST.map((t, i) => (
                                        <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(217,119,6,.25)", border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                                                <IconCheck size={10} color="var(--gold)" />
                                            </div>
                                            <p style={{ fontSize: "0.83rem", color: "rgba(255,255,255,.7)", lineHeight: 1.65 }}>{t}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact */}
                            <div style={{ padding: "22px", borderRadius: 16, background: "#fff", border: "1px solid var(--border)" }}>
                                <p style={{ fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 14 }}>
                                    Vous préférez faire un virement ou devenir partenaire institutionnel ?
                                </p>
                                <Link href="/contact" className="btn btn-outline" style={{ width: "100%", justifyContent: "center", padding: "11px 20px", fontSize: "0.8rem" }}>
                                    Nous contacter <IconArrow size={13} color="var(--navy)" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
