import Link from "next/link";
import { listPosts } from "@/lib/posts";
import { IconArrow, IconButterfly } from "./components/Icons";
import Photo from "./components/Photo";
import PostCard from "./components/PostCard";
import DonCta from "./components/DonCta";

// Les dernières actualités publiées depuis le dashboard apparaissent en une minute.
export const revalidate = 60;

/* ─── Contenu ─── */
const STATS = [
    { num: "340+", label: "Enfants accompagnés" },
    { num: "12",   label: "Hôpitaux partenaires" },
    { num: "94 %", label: "Taux de satisfaction des familles" },
    { num: "2023", label: "Création, en activité en RDC" },
];

// Les huit actions de la fondation, rangées sous le pilier qu'elles servent.
const PILLARS = [
    { title: "Diagnostic précoce", desc: "Favoriser l'accès à un diagnostic précoce et fiable pour augmenter les chances de guérison.",
      actions: ["Favoriser l'accès au diagnostic précoce et fiable", "Renforcer les capacités des structures de santé"] },
    { title: "Soutien aux familles", desc: "Accompagner les enfants et leurs familles tout au long du traitement, sans les laisser seuls.",
      actions: ["Accompagner les enfants et leurs familles", "Prévenir les abandons de traitement"] },
    { title: "Sensibilisation", desc: "Développer des programmes d'éducation à la santé et des campagnes d'information en RDC.",
      actions: ["Développer des programmes de sensibilisation"] },
    { title: "Accès aux soins", desc: "Réduire les inégalités d'accès et soutenir des traitements conformes aux protocoles reconnus.",
      actions: ["Soutenir l'accès à des traitements appropriés", "Réduire les inégalités d'accès aux soins", "Établir des partenariats durables nationaux et internationaux"] },
];

const TIMELINE = [
    { year: "2016", title: "Diagnostic à 3 ans",       text: "Eliana reçoit son diagnostic de neuroblastome métastatique. Une famille plongée dans l'incertitude." },
    { year: "2020", title: "Quatre ans de combat",     text: "Traitements, espoir, rechutes. Eliana lutte avec une bravoure et une résilience qui inspirent tous ceux qui l'entourent." },
    { year: "2022", title: "Eliana s'en va",           text: "Après six ans de combat, Eliana nous quitte à l'âge de 9 ans. Ses arcs-en-ciel, ses papillons, sa lumière restent." },
    { year: "2023", title: "La fondation naît",        text: "Sa famille crée la Fondation Eliana pour transformer sa lumière en actions concrètes en République Démocratique du Congo." },
    { year: "2026", title: "340+ enfants accompagnés", text: "La mission grandit. 12 hôpitaux partenaires. Une équipe engagée pour chaque enfant qui doit affronter cette maladie." },
];

export default async function HomePage() {
    const posts = await listPosts(3);

    return (
        <>
            {/* ── OUVERTURE ── */}
            <section className="container split" style={{ paddingTop: "clamp(48px, 8vw, 88px)", paddingBottom: "clamp(72px, 10vw, 104px)", gap: 64, overflowX: "clip" }}>
                <div style={{ flexBasis: 480 }}>
                    <span className="eyebrow h-anim">Fondation · Cancer pédiatrique · RDC</span>
                    <h1 className="display h-anim h-a2" style={{ margin: "8px 0 24px" }}>
                        Agir pour chaque <em className="accent">enfant</em> qui mérite de vivre
                    </h1>
                    <p className="lead h-anim h-a3" style={{ maxWidth: 520, marginBottom: 36 }}>
                        Le cancer pédiatrique est souvent diagnostiqué trop tard en RDC. La Fondation Eliana œuvre pour changer cela, pour nos enfants, pour leur avenir.
                    </p>
                    <div className="h-anim h-a4" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                        <Link href="/don" className="btn btn-primary">Faire un don</Link>
                        <Link href="/#histoire" className="btn btn-outline">Notre histoire <IconArrow size={16} /></Link>
                    </div>
                </div>

                <div className="h-anim h-a3" style={{ flexBasis: 380, display: "flex", justifyContent: "center" }}>
                    {/* 64 px de marge : les arcs débordent de 32 px de chaque côté de l'arche. */}
                    <div style={{ position: "relative", width: "calc(100% - 64px)", maxWidth: 440, paddingTop: 32 }}>
                        <svg viewBox="0 0 504 284" fill="none" aria-hidden="true" style={{ position: "absolute", top: 0, left: -32, width: "calc(100% + 64px)" }}>
                            <path d="M20 252a232 232 0 0 1 464 0" stroke="var(--sky)" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M12 252a240 240 0 0 1 480 0" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M4 252a248 248 0 0 1 496 0" stroke="var(--sun)" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                        <Photo className="arch" alt="Enfants accompagnés par la Fondation Eliana" label="Photo à venir" />
                        <div style={{ position: "absolute", left: 16, bottom: 40, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 16, padding: "16px 22px", boxShadow: "0 18px 40px rgba(20,33,61,.12)" }}>
                            <p style={{ fontFamily: "var(--font-serif)", fontSize: 40, lineHeight: 1 }}>340+</p>
                            <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>enfants accompagnés depuis 2023</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CHIFFRES ── */}
            <section aria-label="La fondation en chiffres" className="bg-surface" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
                <div className="container stats" style={{ paddingTop: 32, paddingBottom: 32 }}>
                    {STATS.map(s => (
                        <div key={s.label} className="stat" data-sr>
                            <p style={{ fontFamily: "var(--font-serif)", fontSize: 52, lineHeight: 1 }}>{s.num}</p>
                            <p className="muted" style={{ fontSize: 15, marginTop: 10 }}>{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── MISSION ── */}
            <section id="mission" className="container section">
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 64px", marginBottom: 64 }}>
                    <div data-sr style={{ flex: "1 1 420px" }}>
                        <span className="eyebrow">Nos engagements</span>
                        <h2 className="h2">Quatre piliers d&apos;action</h2>
                    </div>
                    <p className="muted" data-sr style={{ flex: "1 1 380px", maxWidth: 480 }}>
                        La Fondation Eliana agit sur quatre axes fondamentaux pour améliorer la prise en charge du cancer pédiatrique en République Démocratique du Congo.
                    </p>
                </div>
                <div className="pillars">
                    {PILLARS.map((p, i) => (
                        <div key={p.title} className="pillar" data-sr>
                            <p style={{ fontSize: 14, fontWeight: 600, color: "var(--accent-strong)" }}>{String(i + 1).padStart(2, "0")}</p>
                            <h3 style={{ fontSize: 27, fontWeight: 500, lineHeight: 1.2, margin: "10px 0" }}>{p.title}</h3>
                            <p className="muted" style={{ fontSize: 16, marginBottom: 20 }}>{p.desc}</p>
                            <ul className="dots">{p.actions.map(a => <li key={a}>{a}</li>)}</ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── HISTOIRE ── */}
            <section id="histoire" className="bg-surface">
                <div className="container section">
                    <div className="split">
                        <div data-sr style={{ flexBasis: 440 }}>
                            <span className="eyebrow">Notre histoire</span>
                            <h2 className="h2" style={{ marginBottom: 24 }}>Née de l&apos;amour, <em className="accent">du courage et de la force</em></h2>
                            <p className="muted" style={{ maxWidth: 520 }}>
                                Inspirée par la force d&apos;Eliana et de ces nombreux enfants qui luttent chaque jour, la fondation contribue à l&apos;amélioration de la prise en charge des cancers pédiatriques en RDC.
                            </p>
                        </div>
                        <Photo alt="Histoire de la Fondation Eliana" label="Photo à venir" style={{ flexBasis: 380, aspectRatio: "4 / 3" }} />
                    </div>
                    <ol className="timeline" style={{ marginTop: 80 }}>
                        {TIMELINE.map(t => (
                            <li key={t.year} data-sr>
                                <p style={{ fontFamily: "var(--font-serif)", fontSize: 30, lineHeight: 1 }}>{t.year}</p>
                                <p style={{ fontWeight: 600, fontSize: 16, margin: "12px 0 6px" }}>{t.title}</p>
                                <p className="muted" style={{ fontSize: 15 }}>{t.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ── SYMBOLES ── */}
            <section className="bg-tint">
                <div className="container section">
                    <div style={{ textAlign: "center", marginBottom: 56 }} data-sr>
                        <span className="eyebrow" style={{ color: "var(--ink)" }}>Nos symboles</span>
                        <h2 className="h2">L&apos;espoir et la transformation</h2>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
                        <div className="card" data-sr style={{ flex: "1 1 420px", border: 0, display: "flex", flexWrap: "wrap", gap: "24px 32px", alignItems: "flex-start" }}>
                            <svg width="104" height="60" viewBox="0 0 104 60" fill="none" aria-hidden="true" style={{ flex: "none" }}>
                                <path d="M6 56a46 46 0 0 1 92 0" stroke="var(--sun)" strokeWidth="7" strokeLinecap="round" />
                                <path d="M17 56a35 35 0 0 1 70 0" stroke="var(--accent)" strokeWidth="7" strokeLinecap="round" />
                                <path d="M28 56a24 24 0 0 1 48 0" stroke="#9B86D9" strokeWidth="7" strokeLinecap="round" />
                                <path d="M39 56a13 13 0 0 1 26 0" stroke="var(--sky)" strokeWidth="7" strokeLinecap="round" />
                            </svg>
                            <div style={{ flex: "1 1 240px" }}>
                                <h3 style={{ fontSize: 30, fontWeight: 500, marginBottom: 12 }}>L&apos;arc-en-ciel</h3>
                                <p className="muted" style={{ fontSize: 16 }}>
                                    L&apos;arc-en-ciel représente l&apos;espoir après la tempête. Il rappelle que même dans les moments les plus sombres, la lumière peut revenir. Il symbolise la résilience et la promesse que l&apos;espoir brille toujours.
                                </p>
                            </div>
                        </div>
                        <div className="card" data-sr style={{ flex: "1 1 420px", border: 0, display: "flex", flexWrap: "wrap", gap: "24px 32px", alignItems: "flex-start" }}>
                            <IconButterfly size={104} color="var(--ink)" fill="var(--sky)" />
                            <div style={{ flex: "1 1 240px" }}>
                                <h3 style={{ fontSize: 30, fontWeight: 500, marginBottom: 12 }}>Le papillon bleu</h3>
                                <p className="muted" style={{ fontSize: 16 }}>
                                    Le papillon bleu symbolise la transformation, la liberté et l&apos;esprit délicat mais puissant d&apos;un enfant. Il représente l&apos;esprit doux d&apos;Eliana et l&apos;empreinte durable qu&apos;elle laisse dans nos cœurs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOMMAGE ── */}
            <section id="hommage" className="night">
                <div className="container section split" style={{ gap: "56px 80px" }}>
                    <div data-sr style={{ flexBasis: 340, display: "flex", justifyContent: "center" }}>
                        <Photo className="arch" alt="Eliana" label="Photo à venir" style={{ width: "100%", maxWidth: 400, background: "var(--night-2)", color: "var(--on-night)" }} />
                    </div>
                    <div data-sr style={{ flexBasis: 460 }}>
                        <span className="eyebrow">Hommage</span>
                        <h2 className="h2" style={{ marginBottom: 28 }}>À Eliana, <em style={{ color: "var(--accent-night)" }}>notre petite princesse</em></h2>
                        <p style={{ marginBottom: 18 }}>
                            Cette fondation est dédiée à <strong style={{ color: "#fff", fontWeight: 600 }}>Eliana</strong>, qui a lutté pendant six ans contre un neuroblastome métastatique. Elle représente le courage de tous ces enfants qui affrontent la maladie malgré eux.
                        </p>
                        <p>
                            Eliana apportait de la couleur, de la joie et de la lumière. Cette petite princesse aimait les arcs-en-ciel, les papillons bleus, danser librement et peindre avec imagination.
                        </p>
                        <blockquote style={{ marginTop: 40, paddingTop: 28, borderTop: "1px solid rgba(250,248,245,.2)", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 26, lineHeight: 1.4 }}>
                            « Que chaque enfant que nous aidons porte en lui la même lumière, la même force et les mêmes couleurs. »
                        </blockquote>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 32 }}>
                            {["Pour nos enfants", "Pour leur avenir", "Pour la RDC"].map(t => (
                                <span key={t} style={{ padding: "6px 14px", borderRadius: 999, border: "1px solid rgba(250,248,245,.28)", fontSize: 13, color: "var(--on-night)" }}>{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ACTUALITÉS ── */}
            {posts.length > 0 && (
                <section className="container section">
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 48 }}>
                        <div data-sr>
                            <span className="eyebrow">Actualités</span>
                            <h2 className="h2">Dernières nouvelles</h2>
                        </div>
                        <Link href="/actualites" className="link-arrow">Toutes les actualités <IconArrow size={16} /></Link>
                    </div>
                    <div className="cards">{posts.map(p => <PostCard key={p.id} post={p} />)}</div>
                </section>
            )}

            <div style={{ paddingTop: posts.length > 0 ? 0 : "clamp(72px, 10vw, 112px)" }}>
                <DonCta />
            </div>
        </>
    );
}
