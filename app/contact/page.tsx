import type { Metadata } from "next";
import Link from "next/link";
import { IconHeart, IconUsers, IconMegaphone, IconButterfly, IconArrow } from "../components/Icons";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
    title: "Contact — Fondation Eliana",
    description: "Contactez la Fondation Eliana. Faites un don, devenez partenaire ou bénévole dans la lutte contre le cancer pédiatrique en RDC.",
};

const WAYS = [
    {
        Icon: IconHeart,
        bg: "var(--gold-light)",
        color: "var(--gold)",
        title: "Faire un don",
        desc: "Chaque contribution, petite ou grande, aide directement les enfants atteints de cancer en RDC.",
        subject: "don",
    },
    {
        Icon: IconUsers,
        bg: "var(--purple-light)",
        color: "var(--purple)",
        title: "Devenir partenaire",
        desc: "Associations, entreprises, institutions — rejoignez notre réseau de partenaires engagés.",
        subject: "partenariat",
    },
    {
        Icon: IconMegaphone,
        bg: "#FCE7F3",
        color: "#DB2777",
        title: "Bénévolat",
        desc: "Vos compétences et votre temps peuvent transformer des vies. Rejoignez notre équipe de bénévoles.",
        subject: "benevolat",
    },
];

export default function ContactPage() {
    return (
        <>
            {/* ─── HERO ─── */}
            <section style={{
                background: "linear-gradient(135deg, var(--navy) 0%, #2D1B69 100%)",
                color: "#fff",
                padding: "clamp(64px, 10vw, 112px) 0 clamp(48px, 8vw, 80px)",
                textAlign: "center",
                position: "relative", overflow: "hidden",
            }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 80%, rgba(217,119,6,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(124,58,237,0.12) 0%, transparent 50%)", pointerEvents: "none" }} />
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                        <IconButterfly size={48} color="rgba(255,255,255,0.5)" />
                    </div>
                    <span style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: 16 }}>Nous rejoindre</span>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", marginBottom: 20 }}>
                        Agissons{" "}
                        <span className="font-script" style={{ color: "var(--gold)", fontSize: "1.05em" }}>ensemble</span>
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: 1.85, maxWidth: 540, margin: "0 auto" }}>
                        Que vous souhaitiez soutenir financièrement, devenir partenaire, offrir votre temps ou simplement en savoir plus — nous sommes là.
                    </p>
                </div>
            </section>

            {/* ─── 3 WAYS ─── */}
            <section style={{ background: "var(--cream)", padding: "clamp(48px, 7vw, 80px) 0" }}>
                <div className="container">
                    <div className="grid-3">
                        {WAYS.map(w => (
                            <div key={w.title} className="action-card" style={{ textAlign: "center" }}>
                                <div style={{
                                    width: 56, height: 56, borderRadius: "50%",
                                    background: w.bg,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    margin: "0 auto 16px",
                                }}>
                                    <w.Icon size={24} color={w.color} />
                                </div>
                                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy)", marginBottom: 10, fontFamily: "inherit" }}>{w.title}</h3>
                                <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: 20 }}>{w.desc}</p>
                                <a
                                    href={`#formulaire`}
                                    style={{
                                        fontSize: "0.78rem", fontWeight: 600, color: w.color,
                                        textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4,
                                    }}
                                >
                                    Nous écrire <IconArrow size={12} color={w.color} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FORM + INFO ─── */}
            <section id="formulaire" className="section" style={{ background: "#fff" }}>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: "flex-start", gap: "clamp(40px, 6vw, 96px)" }}>

                        {/* Form */}
                        <div>
                            <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Formulaire de contact</span>
                            <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "var(--navy)", marginBottom: 8 }}>
                                Envoyez-nous un message
                            </h2>
                            <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 32 }}>
                                Nous vous répondons dans les meilleurs délais.
                            </p>
                            <ContactForm />
                        </div>

                        {/* Info */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                            <div>
                                <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Informations</span>
                                <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "var(--navy)", marginBottom: 20 }}>
                                    En contact direct
                                </h2>
                            </div>

                            <div style={{
                                padding: "28px 32px", borderRadius: 16,
                                background: "var(--purple-soft)", border: "1px solid var(--purple-light)",
                            }}>
                                <p style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--purple)", fontWeight: 700, marginBottom: 8 }}>Email</p>
                                <a href="mailto:contact@elianafoundation.org" style={{ color: "var(--navy)", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
                                    contact@elianafoundation.org
                                </a>
                            </div>

                            <div style={{
                                padding: "28px 32px", borderRadius: 16,
                                background: "var(--gold-soft)", border: "1px solid var(--gold-light)",
                            }}>
                                <p style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: 8 }}>Siège</p>
                                <p style={{ color: "var(--navy)", fontWeight: 600, fontSize: "0.95rem" }}>République Démocratique du Congo</p>
                            </div>

                            <div style={{
                                padding: "28px 32px", borderRadius: 20,
                                background: "linear-gradient(135deg, var(--purple) 0%, var(--purple-mid) 100%)",
                                color: "#fff",
                            }}>
                                <IconButterfly size={32} color="rgba(255,255,255,0.6)" style={{ marginBottom: 16 }} />
                                <p className="font-script" style={{ fontSize: "1.2rem", lineHeight: 1.6, color: "#fff", marginBottom: 12 }}>
                                    &ldquo;Chaque enfant mérite de grandir, de rêver, de vivre.&rdquo;
                                </p>
                                <p style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Fondation Eliana</p>
                            </div>

                            <div style={{
                                padding: "24px 28px", borderRadius: 14,
                                background: "var(--cream)", border: "1px solid var(--border)",
                            }}>
                                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.8 }}>
                                    Vous pouvez aussi nous rejoindre sur les réseaux sociaux sous{" "}
                                    <strong style={{ color: "var(--navy)" }}>@elianafoundation</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── BOTTOM CTA ─── */}
            <section className="section-sm" style={{
                background: "var(--cream)",
                borderTop: "1px solid var(--border)",
                textAlign: "center",
            }}>
                <div className="container">
                    <div style={{ maxWidth: 560, margin: "0 auto" }}>
                        <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 20 }}>
                            Vous souhaitez en savoir plus sur la fondation avant de nous contacter ?
                        </p>
                        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/#mission" className="btn-outline" style={{ fontSize: "0.85rem", padding: "10px 24px", display: "inline-flex", alignItems: "center", gap: 8 }}>
                                Notre mission
                                <IconArrow size={13} color="var(--purple)" />
                            </Link>
                            <Link href="/#hommage" className="btn-primary" style={{ fontSize: "0.85rem", padding: "10px 24px", display: "inline-flex", alignItems: "center", gap: 8 }}>
                                <IconHeart size={14} color="#fff" />
                                Hommage à Eliana
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
