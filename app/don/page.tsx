"use client";

import { useState } from "react";
import Link from "next/link";
import { IconHeart, IconArrow, IconButterfly, IconCheck } from "../components/Icons";

const AMOUNTS_UNIQUE   = [25, 50, 100, 250];
const AMOUNTS_MENSUEL  = [10, 25, 50, 100];

const IMPACTS: Record<number, string> = {
    10:  "10$ contribue à un repas pour une famille en traitement",
    25:  "25$ aide à financer du matériel de sensibilisation scolaire",
    50:  "50$ soutient une consultation médicale pour un enfant",
    100: "100$ finance un mois complet de suivi médical",
    250: "250$ forme un professionnel de santé en oncologie pédiatrique",
};

const TRUST = [
    "Transparence totale sur l'utilisation des fonds",
    "12 hôpitaux partenaires certifiés en RDC",
    "Rapport annuel d'activité disponible",
];

export default function DonPage() {
    const [tab, setTab]       = useState<"unique" | "mensuel">("unique");
    const [amount, setAmount] = useState(50);
    const [custom, setCustom] = useState("");
    const [step, setStep]     = useState<"select" | "form">("select");
    const [form, setForm]     = useState({ firstName: "", lastName: "", email: "", message: "" });

    const activeAmount = custom ? parseFloat(custom) || 0 : amount;
    const amounts = tab === "unique" ? AMOUNTS_UNIQUE : AMOUNTS_MENSUEL;
    const impact  = IMPACTS[activeAmount] ?? null;

    const handleSelect = (v: number) => { setAmount(v); setCustom(""); };

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
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "clamp(32px, 5vw, 56px)", alignItems: "start", marginTop: -60 }}>

                        {/* Card formulaire */}
                        <div style={{ background: "#fff", borderRadius: 24, boxShadow: "0 32px 80px rgba(15,37,64,.15)", overflow: "hidden" }}>
                            {/* Tabs */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                                {(["unique", "mensuel"] as const).map(t => (
                                    <button key={t} onClick={() => { setTab(t); setAmount(t === "unique" ? 50 : 25); setCustom(""); setStep("select"); }}
                                        style={{
                                            padding: "18px 24px", border: "none", cursor: "pointer",
                                            background: tab === t ? "#fff" : "var(--surface)",
                                            fontWeight: 700, fontSize: "0.85rem",
                                            color: tab === t ? "var(--navy)" : "var(--muted)",
                                            borderBottom: tab === t ? "2.5px solid var(--gold)" : "2.5px solid transparent",
                                            transition: "all 0.2s",
                                        }}>
                                        {t === "unique" ? "Don unique" : "Don mensuel"}
                                    </button>
                                ))}
                            </div>

                            <div style={{ padding: "clamp(28px, 4vw, 44px)" }}>
                                {step === "select" ? (
                                    <>
                                        <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: 24, lineHeight: 1.7 }}>
                                            {tab === "mensuel" ? "Votre don régulier nous permet de planifier et pérenniser nos actions sur le terrain." : "Votre don unique contribue directement à nos programmes en République Démocratique du Congo."}
                                        </p>

                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 14 }}>
                                            {amounts.map(a => (
                                                <button key={a} onClick={() => handleSelect(a)}
                                                    className={`amount-btn${amount === a && !custom ? " active" : ""}`}>
                                                    {a}$
                                                </button>
                                            ))}
                                        </div>

                                        <div style={{ position: "relative", marginBottom: 24 }}>
                                            <input type="number" placeholder="Autre montant ($)" value={custom}
                                                onChange={e => { setCustom(e.target.value); setAmount(0); }}
                                                style={{ width: "100%", padding: "13px 20px 13px 40px", borderRadius: 12, border: "2px solid var(--border)", fontSize: "0.92rem", outline: "none", transition: "border 0.2s" }}
                                                onFocus={e => e.target.style.borderColor = "var(--gold)"}
                                                onBlur={e => e.target.style.borderColor = "var(--border)"}
                                            />
                                            <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--muted)", fontWeight: 600, fontSize: "0.85rem" }}>$</span>
                                        </div>

                                        {impact && (
                                            <div style={{ padding: "14px 18px", borderRadius: 12, background: "var(--gold-soft)", border: "1px solid var(--gold-light)", display: "flex", gap: 12, alignItems: "center", marginBottom: 24 }}>
                                                <IconHeart size={16} color="var(--gold)" style={{ flexShrink: 0 }} />
                                                <p style={{ fontSize: "0.83rem", color: "var(--gold-dark)", lineHeight: 1.6 }}>{impact}</p>
                                            </div>
                                        )}

                                        {activeAmount > 0 && (
                                            <div style={{ padding: "18px 22px", borderRadius: 14, background: "var(--surface)", border: "1px solid var(--border)", marginBottom: 22, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{tab === "unique" ? "Don unique de" : "Don mensuel de"}</span>
                                                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}>{activeAmount} $</span>
                                            </div>
                                        )}

                                        <button onClick={() => setStep("form")} disabled={activeAmount <= 0}
                                            className="btn btn-gold" style={{ width: "100%", justifyContent: "center", opacity: activeAmount <= 0 ? 0.5 : 1 }}>
                                            <IconHeart size={15} color="#fff" />
                                            Continuer — {activeAmount}${tab === "mensuel" ? "/mois" : ""}
                                        </button>
                                    </>
                                ) : (
                                    <form onSubmit={e => { e.preventDefault(); alert("Connexion Stripe à venir. Merci !"); }}>
                                        <button type="button" onClick={() => setStep("select")}
                                            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: "var(--muted)", fontSize: "0.82rem", marginBottom: 24 }}>
                                            <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}><IconArrow size={12} color="var(--muted)" /></span> Retour
                                        </button>
                                        <div style={{ padding: "14px 20px", borderRadius: 12, background: "var(--gold-soft)", border: "1px solid var(--gold-light)", marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <span style={{ fontSize: "0.82rem", color: "var(--gold-dark)" }}>Votre don</span>
                                            <span style={{ fontWeight: 800, fontSize: "1.3rem", color: "var(--gold)", fontFamily: "'Playfair Display', serif" }}>{activeAmount}${tab === "mensuel" ? "/mois" : ""}</span>
                                        </div>
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                                            {[
                                                { id: "firstName", label: "Prénom", type: "text" },
                                                { id: "lastName",  label: "Nom",    type: "text" },
                                            ].map(({ id, label, type }) => (
                                                <div key={id}>
                                                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--navy)", marginBottom: 6 }}>{label}</label>
                                                    <input type={type} required value={(form as any)[id]} onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                                                        style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "2px solid var(--border)", fontSize: "0.88rem", outline: "none", transition: "border 0.2s" }}
                                                        onFocus={e => e.target.style.borderColor = "var(--gold)"}
                                                        onBlur={e => e.target.style.borderColor = "var(--border)"} />
                                                </div>
                                            ))}
                                        </div>
                                        <div style={{ marginBottom: 14 }}>
                                            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--navy)", marginBottom: 6 }}>Email</label>
                                            <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                                style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "2px solid var(--border)", fontSize: "0.88rem", outline: "none", transition: "border 0.2s" }}
                                                onFocus={e => e.target.style.borderColor = "var(--gold)"}
                                                onBlur={e => e.target.style.borderColor = "var(--border)"} />
                                        </div>
                                        <div style={{ marginBottom: 22 }}>
                                            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--navy)", marginBottom: 6 }}>Message (optionnel)</label>
                                            <textarea rows={3} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                                style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "2px solid var(--border)", fontSize: "0.88rem", outline: "none", resize: "none", transition: "border 0.2s" }}
                                                onFocus={e => e.target.style.borderColor = "var(--gold)"}
                                                onBlur={e => e.target.style.borderColor = "var(--border)"} />
                                        </div>
                                        <p style={{ fontSize: "0.72rem", color: "var(--muted)", marginBottom: 20, lineHeight: 1.6 }}>
                                            Paiement sécurisé par Stripe. Vos données ne sont jamais partagées. Reçu fiscal envoyé par email.
                                        </p>
                                        <button type="submit" className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }}>
                                            <IconHeart size={15} color="#fff" />
                                            Faire un don de {activeAmount}${tab === "mensuel" ? "/mois" : ""}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingTop: 60 }}>
                            {/* Photo */}
                            <div className="photo-slot" style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }}>
                                <img src="https://picsum.photos/seed/eliana-don/600/450" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
