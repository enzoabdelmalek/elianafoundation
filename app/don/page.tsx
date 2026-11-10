import Link from "next/link";
import { IconArrow, IconButterfly } from "../components/Icons";

export const metadata = {
    title: "Faire un don — Eliana Foundation",
    description: "Soutenez Eliana Foundation dans sa lutte contre le cancer pédiatrique en RDC.",
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
            <section className="container" style={{ paddingTop: "clamp(48px, 8vw, 88px)", paddingBottom: 56 }}>
                <span className="eyebrow h-anim">Faire un don</span>
                <h1 className="display h-anim h-a2" style={{ maxWidth: 820, margin: "8px 0 20px" }}>
                    Ensemble, changeons <em className="accent">des vies</em>
                </h1>
                <p className="lead h-anim h-a3" style={{ maxWidth: 620 }}>
                    Votre soutien permet à Eliana Foundation de continuer sa mission pour chaque enfant atteint de cancer en RDC.
                </p>
            </section>

            <section className="container" style={{ paddingBottom: "clamp(72px, 10vw, 112px)" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 32 }}>
                    {/* Formulaire HelloAsso, ou message tant que la collecte n'est pas ouverte */}
                    <div className="card" style={{ flex: "2 1 520px", minWidth: 0, padding: HELLOASSO_WIDGET_URL ? 0 : undefined, overflow: "hidden" }}>
                        {HELLOASSO_WIDGET_URL ? (
                            <iframe src={HELLOASSO_WIDGET_URL} title="Formulaire de don HelloAsso"
                                style={{ display: "block", width: "100%", height: 760, border: "none" }} />
                        ) : (
                            <div style={{ textAlign: "center", padding: "24px 0" }}>
                                <IconButterfly size={64} color="var(--ink)" fill="var(--sky)" />
                                <h2 style={{ fontSize: "clamp(28px, 3vw, 36px)", margin: "20px 0 14px" }}>La collecte de dons arrive bientôt</h2>
                                <p className="muted" style={{ maxWidth: 460, margin: "0 auto 28px" }}>
                                    La collecte de dons n&apos;est pas encore active sur notre site. Vous pouvez nous contacter via le formulaire pour avoir plus d&apos;informations.
                                </p>
                                <Link href="/contact" className="btn btn-primary">Nous contacter <IconArrow size={16} /></Link>
                            </div>
                        )}
                    </div>

                    <aside style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: 20 }}>
                        <div className="card" style={{ background: "var(--accent-tint)", border: 0 }}>
                            <h2 style={{ fontSize: 26, marginBottom: 18 }}>Pourquoi donner ?</h2>
                            <ul className="dots" style={{ fontSize: 16 }}>{TRUST.map(t => <li key={t}>{t}</li>)}</ul>
                        </div>
                        <div className="card">
                            <p className="muted" style={{ fontSize: 15, marginBottom: 16 }}>
                                Vous préférez faire un virement ou devenir partenaire institutionnel ?
                            </p>
                            <Link href="/contact" className="link-arrow">Nous contacter <IconArrow size={16} /></Link>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
}
