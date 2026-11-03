"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrow, IconButterfly } from "../components/Icons";

const FAQ = [
    {
        q: "Comment puis-je faire du bénévolat pour la fondation ?",
        a: "Nous accueillons des bénévoles dans de nombreux domaines : médical, logistique, communication, levée de fonds. Remplissez le formulaire en mentionnant vos disponibilités et compétences, nous vous recontacterons dans les 48h.",
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

export default function ContactPage() {
    const [form, setForm]       = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent]       = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError]     = useState("");
    const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setForm(f => ({ ...f, [k]: e.target.value }));

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
            <section className="container" style={{ paddingTop: "clamp(48px, 8vw, 88px)", paddingBottom: 56 }}>
                <span className="eyebrow h-anim">Contact</span>
                <h1 className="display h-anim h-a2" style={{ maxWidth: 820, margin: "8px 0 20px" }}>
                    Parlons de <em className="accent">votre engagement</em>
                </h1>
                <p className="lead h-anim h-a3" style={{ maxWidth: 620 }}>
                    Que vous souhaitiez faire un don, devenir bénévole, établir un partenariat ou simplement en savoir plus, nous sommes là.
                </p>
            </section>

            <section className="container" style={{ paddingBottom: "clamp(72px, 10vw, 112px)" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 32 }}>
                    <div className="card" style={{ flex: "2 1 520px", minWidth: 0 }}>
                        {sent ? (
                            <div style={{ textAlign: "center", padding: "24px 0" }} role="status">
                                <IconButterfly size={64} color="var(--ink)" fill="var(--sky)" />
                                <h2 style={{ fontSize: 34, margin: "20px 0 12px" }}>Message envoyé</h2>
                                <p className="muted">Nous vous répondrons dans les 48h. Merci pour votre intérêt pour la Fondation Eliana.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                                    <div className="field" style={{ flex: "1 1 220px" }}>
                                        <label htmlFor="c-name">Nom complet</label>
                                        <input id="c-name" className="input" type="text" required autoComplete="name" placeholder="Prénom Nom" value={form.name} onChange={set("name")} />
                                    </div>
                                    <div className="field" style={{ flex: "1 1 220px" }}>
                                        <label htmlFor="c-email">Adresse email</label>
                                        <input id="c-email" className="input" type="email" required autoComplete="email" placeholder="vous@exemple.com" value={form.email} onChange={set("email")} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="c-subject">Sujet</label>
                                    <select id="c-subject" className="input" required value={form.subject} onChange={set("subject")}>
                                        <option value="" disabled>Sélectionner un sujet…</option>
                                        {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="c-message">Message</label>
                                    <textarea id="c-message" className="input" required rows={6} placeholder="Décrivez votre demande ou votre projet…" value={form.message} onChange={set("message")} />
                                </div>
                                {error && <p role="alert" style={{ fontSize: 15, color: "var(--error)" }}>{error}</p>}
                                <button type="submit" disabled={loading} className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                                    {loading ? "Envoi en cours…" : <>Envoyer le message <IconArrow size={16} /></>}
                                </button>
                            </form>
                        )}
                    </div>

                    <aside style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: 20 }}>
                        <div className="card">
                            <h2 style={{ fontSize: 26, marginBottom: 14 }}>Nous trouver</h2>
                            <p className="muted" style={{ fontSize: 15, marginBottom: 8 }}>Kinshasa, République Démocratique du Congo</p>
                            <a href="mailto:contact@elianafoundation.org" className="link-hover" style={{ fontSize: 15, textDecoration: "underline" }}>contact@elianafoundation.org</a>
                        </div>
                        <div className="card" style={{ background: "var(--accent-tint)", border: 0 }}>
                            <h2 style={{ fontSize: 26, marginBottom: 10 }}>Devenir bénévole</h2>
                            <p className="muted" style={{ fontSize: 15, marginBottom: 18 }}>Médecins, soignants, communicants, logisticiens… nous avons besoin de vous.</p>
                            <button type="button" className="btn btn-outline btn-sm" onClick={() => { setForm(f => ({ ...f, subject: "Bénévolat" })); document.getElementById("c-name")?.focus(); }}>
                                Je veux aider
                            </button>
                        </div>
                        <div className="card">
                            <p className="muted" style={{ fontSize: 15, marginBottom: 16 }}>Soutenir financièrement la fondation</p>
                            <Link href="/don" className="link-arrow">Faire un don <IconArrow size={16} /></Link>
                        </div>
                    </aside>
                </div>
            </section>

            <section className="bg-surface" style={{ borderTop: "1px solid var(--line)" }}>
                <div className="container section split" style={{ alignItems: "flex-start" }}>
                    <div style={{ flexBasis: 320 }}>
                        <span className="eyebrow">FAQ</span>
                        <h2 className="h2" style={{ marginBottom: 16 }}>Questions <em className="accent">fréquentes</em></h2>
                        <p className="muted">Vous ne trouvez pas la réponse ? Écrivez-nous directement via le formulaire.</p>
                    </div>
                    <div className="faq" style={{ flexBasis: 560 }}>
                        {FAQ.map(item => (
                            <details key={item.q}>
                                <summary>{item.q}</summary>
                                <p>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
