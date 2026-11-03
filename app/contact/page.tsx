"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrow, IconMapPin, IconMail, IconPhone, IconPlus, IconHeart, IconButterfly, IconUsers } from "../components/Icons";

const FAQ = [
    {
        q: "Comment puis-je faire du bénévolat pour la fondation ?",
        a: "Nous accueillons des bénévoles dans de nombreux domaines : médical, logistique, communication, levée de fonds. Remplissez le formulaire ci-contre en mentionnant vos disponibilités et compétences, nous vous recontacterons dans les 48h.",
    },
    {
        q: "Mes dons sont-ils déductibles des impôts ?",
        a: "La Fondation Eliana est reconnue d'utilité publique, ce qui permet à nos donateurs de bénéficier d'une réduction fiscale. Un reçu fiscal vous est automatiquement envoyé par email après chaque don.",
    },
    {
        q: "Comment la fondation utilise-t-elle les fonds reçus ?",
        a: "Nous publions un rapport annuel d'activité complet et transparent. En 2024, 87% des fonds ont été alloués directement à nos programmes terrain (diagnostics, soins, accompagnement), 8% à la sensibilisation, et 5% aux frais de fonctionnement.",
    },
    {
        q: "Peut-on établir un partenariat institutionnel avec la fondation ?",
        a: "Absolument. Nous cherchons des partenaires dans les domaines médical, pharmaceutique, éducatif et institutionnel. Contactez-nous via le formulaire en sélectionnant « Partenariat » comme sujet pour que notre équipe dédiée vous réponde.",
    },
    {
        q: "Dans quelles zones de la RDC intervenez-vous ?",
        a: "Nos 12 hôpitaux partenaires sont principalement situés à Kinshasa, Lubumbashi et Goma. Nous développons progressivement notre présence dans les zones rurales à travers des programmes de sensibilisation mobiles.",
    },
];

const SUBJECTS = ["Bénévolat", "Partenariat", "Don / fiscal", "Question générale", "Presse & médias"];

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="faq-item">
            <button className="faq-btn" onClick={() => setOpen(!open)}>
                <span>{q}</span>
                <span className={`faq-icon${open ? " open" : ""}`}>
                    <IconPlus size={20} color={open ? "var(--gold)" : "var(--muted)"} />
                </span>
            </button>
            <div className={`faq-body${open ? " open" : ""}`}>
                <div className="faq-body-inner">{a}</div>
            </div>
        </div>
    );
}

export default function ContactPage() {
    const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent]     = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError]   = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error();
            setSent(true);
        } catch {
            setError("Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* ── HERO ── */}
            <section style={{ background: "var(--cream)", padding: "clamp(80px, 12vw, 120px) 0 clamp(56px, 8vw, 80px)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse 40% 60% at 80% 50%, rgba(91,33,182,.05) 0%, transparent 55%)", pointerEvents: "none" }} />
                <div className="container-sm" style={{ position: "relative", zIndex: 1 }}>
                    <span className="h-anim h-a1 section-label">Contact</span>
                    <h1 className="h-anim h-a2" style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", color: "var(--navy)", marginBottom: 16 }}>
                        Parlons de<br />
                        <span className="font-script" style={{ color: "var(--purple)", fontSize: "1.1em" }}>votre engagement</span>
                    </h1>
                    <div className="divider h-anim h-a3" />
                    <p className="h-anim h-a4" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.9, maxWidth: 520 }}>
                        Que vous souhaitiez faire un don, devenir bénévole, établir un partenariat ou simplement en savoir plus — nous sommes là.
                    </p>
                </div>
            </section>

            {/* ── FORMULAIRE + SIDEBAR ── */}
            <section className="section" style={{ background: "#fff" }}>
                <div className="container">
                    <div className="grid-contact-form" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "clamp(40px, 6vw, 72px)", alignItems: "start" }}>

                        {/* Formulaire */}
                        <div>
                            {sent ? (
                                <div style={{ padding: "clamp(32px,5vw,56px) clamp(20px,5vw,48px)", background: "var(--beige)", borderRadius: 24, textAlign: "center" }}>
                                    <div className="float" style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                                        <IconButterfly size={64} color="var(--purple)" />
                                    </div>
                                    <h2 style={{ fontSize: "1.6rem", color: "var(--navy)", marginBottom: 12 }}>Message envoyé !</h2>
                                    <p style={{ color: "var(--muted)", lineHeight: 1.85 }}>Nous vous répondrons dans les 48h. Merci pour votre intérêt pour la Fondation Eliana.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                    <div className="grid-name-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                        <div>
                                            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--navy)", marginBottom: 7 }}>Nom complet</label>
                                            <input type="text" required placeholder="Prénom Nom" value={form.name}
                                                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                                style={{ width: "100%", padding: "13px 16px", borderRadius: 12, border: "1.5px solid var(--border)", fontSize: "0.9rem", outline: "none", transition: "border 0.2s" }}
                                                onFocus={e => e.target.style.borderColor = "var(--navy)"}
                                                onBlur={e => e.target.style.borderColor = "var(--border)"} />
                                        </div>
                                        <div>
                                            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--navy)", marginBottom: 7 }}>Adresse email</label>
                                            <input type="email" required placeholder="vous@exemple.com" value={form.email}
                                                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                                style={{ width: "100%", padding: "13px 16px", borderRadius: 12, border: "1.5px solid var(--border)", fontSize: "0.9rem", outline: "none", transition: "border 0.2s" }}
                                                onFocus={e => e.target.style.borderColor = "var(--navy)"}
                                                onBlur={e => e.target.style.borderColor = "var(--border)"} />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--navy)", marginBottom: 7 }}>Sujet</label>
                                        <select required value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                                            style={{ width: "100%", padding: "13px 16px", borderRadius: 12, border: "1.5px solid var(--border)", fontSize: "0.9rem", outline: "none", background: "#fff", appearance: "none", cursor: "pointer", transition: "border 0.2s", color: form.subject ? "var(--fg)" : "var(--muted)" }}
                                            onFocus={e => e.target.style.borderColor = "var(--navy)"}
                                            onBlur={e => e.target.style.borderColor = "var(--border)"}>
                                            <option value="" disabled>Sélectionner un sujet…</option>
                                            {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>

                                    <div>
                                        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--navy)", marginBottom: 7 }}>Message</label>
                                        <textarea required rows={6} placeholder="Décrivez votre demande ou votre projet…"
                                            value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                            style={{ width: "100%", padding: "13px 16px", borderRadius: 12, border: "1.5px solid var(--border)", fontSize: "0.9rem", outline: "none", resize: "vertical", transition: "border 0.2s", fontFamily: "inherit", lineHeight: 1.7 }}
                                            onFocus={e => e.target.style.borderColor = "var(--navy)"}
                                            onBlur={e => e.target.style.borderColor = "var(--border)"} />
                                    </div>

                                    {error && (
                                        <p style={{ fontSize: "0.82rem", color: "var(--pink)", lineHeight: 1.6 }}>{error}</p>
                                    )}
                                    <button type="submit" disabled={loading} className="btn btn-gold" style={{ alignSelf: "flex-start", opacity: loading ? 0.7 : 1 }}>
                                        {loading ? "Envoi en cours…" : "Envoyer le message"}
                                        {!loading && <IconArrow size={14} color="#fff" />}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="sidebar-sticky" style={{ display: "flex", flexDirection: "column", gap: 20, position: "sticky", top: 100 }}>
                            {/* Coordonnées */}
                            <div style={{ padding: "28px", borderRadius: 20, background: "var(--navy-deep)", color: "#fff" }}>
                                <h3 style={{ fontSize: "1rem", marginBottom: 22, fontFamily: "var(--font-serif)" }}>Nous trouver</h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                                        <IconMapPin size={16} color="var(--gold)" style={{ marginTop: 3, flexShrink: 0 }} />
                                        <p style={{ fontSize: "0.83rem", color: "rgba(255,255,255,.62)", lineHeight: 1.65 }}>Kinshasa, République Démocratique du Congo</p>
                                    </div>
                                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                                        <IconMail size={16} color="var(--gold)" style={{ flexShrink: 0 }} />
                                        <a href="mailto:contact@elianafoundation.org" style={{ fontSize: "0.83rem", color: "rgba(255,255,255,.62)", transition: "color 0.2s" }}
                                            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                                            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.62)")}>
                                            contact@elianafoundation.org
                                        </a>
                                    </div>
                                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                                        <IconPhone size={16} color="var(--gold)" style={{ flexShrink: 0 }} />
                                        <span style={{ fontSize: "0.83rem", color: "rgba(255,255,255,.62)" }}>+243 XXX XXX XXX</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bénévolat */}
                            <div style={{ padding: "24px", borderRadius: 20, background: "var(--beige)", border: "1px solid var(--border)" }}>
                                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                                    <div style={{ width: 38, height: 38, borderRadius: 10, background: "var(--purple-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <IconUsers size={18} color="var(--purple)" />
                                    </div>
                                    <h3 style={{ fontSize: "0.95rem", color: "var(--navy)", fontFamily: "var(--font-serif)" }}>Devenir bénévole</h3>
                                </div>
                                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 14 }}>
                                    Médecins, soignants, communicants, logisticiens… nous avons besoin de vous.
                                </p>
                                <button onClick={() => setForm(f => ({ ...f, subject: "Bénévolat" }))}
                                    className="btn btn-outline" style={{ width: "100%", justifyContent: "center", padding: "10px 16px", fontSize: "0.8rem" }}>
                                    Je veux aider <IconArrow size={12} color="var(--navy)" />
                                </button>
                            </div>

                            {/* Don */}
                            <div style={{ padding: "20px 24px", borderRadius: 16, background: "var(--gold-soft)", border: "1px solid var(--gold-light)", textAlign: "center" }}>
                                <p style={{ fontSize: "0.82rem", color: "var(--gold-dark)", lineHeight: 1.7, marginBottom: 12 }}>
                                    Soutenir financièrement la fondation
                                </p>
                                <Link href="/don" className="btn btn-gold" style={{ display: "inline-flex", width: "100%", justifyContent: "center", fontSize: "0.82rem", padding: "11px 20px" }}>
                                    <IconHeart size={13} color="#fff" />
                                    Faire un don
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="section" style={{ background: "var(--beige)" }}>
                <div className="container">
                    <div className="grid-contact-faq" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }}>
                        <div className="faq-sticky" style={{ position: "sticky", top: 110 }}>
                            <span className="section-label" data-sr>FAQ</span>
                            <h2 data-sr style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "var(--navy)", marginBottom: 16 }}>
                                Questions<br />
                                <span className="font-script" style={{ color: "var(--purple)", fontSize: "1.1em" }}>fréquentes</span>
                            </h2>
                            <div className="divider" data-sr />
                            <p data-sr style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.85 }}>
                                Vous ne trouvez pas la réponse ? Écrivez-nous directement via le formulaire.
                            </p>
                        </div>
                        <div data-sr>
                            {FAQ.map((item, i) => (
                                <FaqItem key={i} q={item.q} a={item.a} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
