"use client";

import { useState } from "react";
import { IconArrow, IconHeart } from "../components/Icons";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm(prev => ({ ...prev, [k]: e.target.value }));

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("sending");
        await new Promise(r => setTimeout(r, 1200));
        setStatus("success");
    }

    if (status === "success") {
        return (
            <div style={{
                padding: "48px 40px", textAlign: "center",
                background: "var(--purple-soft)", borderRadius: 20,
                border: "1px solid var(--purple-light)",
            }}>
                <div style={{
                    width: 64, height: 64, borderRadius: "50%",
                    background: "var(--purple)", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                }}>
                    <IconHeart size={28} color="#fff" />
                </div>
                <h3 style={{ fontSize: "1.4rem", color: "var(--navy)", marginBottom: 12 }}>Message envoyé</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, maxWidth: 380, margin: "0 auto 28px" }}>
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </p>
                <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="btn-outline"
                    style={{ fontSize: "0.85rem", padding: "10px 24px" }}
                >
                    Envoyer un autre message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <style>{`
                .ef-input {
                    width: 100%; padding: 13px 16px;
                    border: 1.5px solid var(--border);
                    border-radius: 10px;
                    font-family: 'Inter', sans-serif;
                    font-size: 0.9rem;
                    color: var(--fg);
                    background: #fff;
                    transition: border-color 0.2s, box-shadow 0.2s;
                    outline: none;
                }
                .ef-input:focus {
                    border-color: var(--purple);
                    box-shadow: 0 0 0 3px rgba(91,33,182,0.08);
                }
                .ef-input::placeholder { color: #9CA3AF; }
                .ef-label {
                    display: block;
                    font-size: 0.8rem; font-weight: 600;
                    color: var(--navy);
                    margin-bottom: 6px;
                    letter-spacing: 0.02em;
                }
            `}</style>

            <div className="grid-2" style={{ gap: 16 }}>
                <div>
                    <label className="ef-label">Prénom & Nom *</label>
                    <input
                        className="ef-input"
                        type="text"
                        placeholder="Marie Dupont"
                        value={form.name}
                        onChange={set("name")}
                        required
                    />
                </div>
                <div>
                    <label className="ef-label">Email *</label>
                    <input
                        className="ef-input"
                        type="email"
                        placeholder="marie@exemple.com"
                        value={form.email}
                        onChange={set("email")}
                        required
                    />
                </div>
            </div>

            <div>
                <label className="ef-label">Objet *</label>
                <select
                    className="ef-input"
                    value={form.subject}
                    onChange={set("subject")}
                    required
                    style={{ cursor: "pointer" }}
                >
                    <option value="">Sélectionnez un objet</option>
                    <option value="don">Faire un don</option>
                    <option value="partenariat">Devenir partenaire</option>
                    <option value="benevolat">Bénévolat</option>
                    <option value="presse">Presse & médias</option>
                    <option value="autre">Autre</option>
                </select>
            </div>

            <div>
                <label className="ef-label">Message *</label>
                <textarea
                    className="ef-input"
                    placeholder="Votre message..."
                    rows={6}
                    value={form.message}
                    onChange={set("message")}
                    required
                    style={{ resize: "vertical", minHeight: 140 }}
                />
            </div>

            <button
                type="submit"
                className="btn-gold"
                disabled={status === "sending"}
                style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 8, opacity: status === "sending" ? 0.7 : 1 }}
            >
                {status === "sending" ? "Envoi en cours…" : (
                    <>
                        Envoyer le message
                        <IconArrow size={14} color="#fff" />
                    </>
                )}
            </button>
        </form>
    );
}
