import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import {
    IconHeart, IconArrow, IconButterfly, IconSearch,
    IconUsers, IconMegaphone, IconCross, IconCheck, IconRainbowBrand,
} from "./components/Icons";

/* ─── Data ─── */
const PILLARS = [
    { Icon: IconSearch,    bg: "var(--gold-soft)",   border: "var(--gold-light)",   color: "var(--gold)",   title: "Diagnostic précoce",    desc: "Favoriser l'accès à un diagnostic précoce et fiable pour augmenter les chances de guérison." },
    { Icon: IconUsers,     bg: "#E0F2FE",             border: "#BAE6FD",             color: "#0284C7",       title: "Soutien aux familles",  desc: "Accompagner les enfants et leurs familles tout au long du traitement, sans les laisser seuls." },
    { Icon: IconMegaphone, bg: "var(--pink-light)",   border: "#FBCFE8",             color: "var(--pink)",   title: "Sensibilisation",       desc: "Développer des programmes d'éducation à la santé et des campagnes d'information en RDC." },
    { Icon: IconCross,     bg: "var(--purple-soft)",  border: "var(--purple-light)", color: "var(--purple)", title: "Accès aux soins",       desc: "Réduire les inégalités d'accès et soutenir des traitements conformes aux protocoles reconnus." },
];

const STATS = [
    { num: "340+",    label: "Enfants accompagnés" },
    { num: "12",      label: "Hôpitaux partenaires" },
    { num: "94 %",    label: "Taux de satisfaction familles" },
    { num: "Depuis 2023", label: "En activité en RDC" },
];

const TIMELINE = [
    { year: "2016", title: "Diagnostic à 3 ans",         text: "Eliana reçoit son diagnostic de neuroblastome métastatique. Une famille plongée dans l'incertitude." },
    { year: "2020", title: "Quatre ans de combat",        text: "Traitements, espoir, rechutes. Eliana lutte avec une bravoure et une résilience qui inspirent tous ceux qui l'entourent." },
    { year: "2022", title: "Eliana s'en va",              text: "Après six ans de combat, Eliana nous quitte à l'âge de 9 ans. Ses arcs-en-ciel, ses papillons, sa lumière restent." },
    { year: "2023", title: "La fondation naît",           text: "Sa famille crée la Fondation Eliana pour transformer sa lumière en actions concrètes en République Démocratique du Congo." },
    { year: "2026", title: "340+ enfants accompagnés",    text: "La mission grandit. 12 hôpitaux partenaires. Une équipe engagée pour chaque enfant qui doit affronter cette maladie." },
];

const ACTIONS = [
    "Favoriser l'accès au diagnostic précoce et fiable",
    "Soutenir l'accès à des traitements appropriés",
    "Réduire les inégalités d'accès aux soins",
    "Accompagner les enfants et leurs familles",
    "Prévenir les abandons de traitement",
    "Renforcer les capacités des structures de santé",
    "Développer des programmes de sensibilisation",
    "Établir des partenariats durables nationaux et internationaux",
];

/* ─── Blog fetch ─── */
async function getLatestPosts() {
    try {
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );
        const { data } = await supabase
            .from("blog_posts")
            .select("id, title, slug, excerpt, category, cover_image, published_at")
            .eq("business_id", process.env.NEXT_PUBLIC_ELIANA_BUSINESS_ID)
            .eq("active", true)
            .order("published_at", { ascending: false })
            .limit(3);
        return data ?? [];
    } catch { return []; }
}

/* ─── Rainbow watermark SVG ─── */
function RainbowWatermark() {
    return (
        <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", right: "-5%", top: "50%", transform: "translateY(-55%)", width: "clamp(360px, 55vw, 680px)", opacity: 0.10, pointerEvents: "none" }}
            className="float-slow">
            <path d="M 20 340 Q 300 30 580 340" stroke="#D97706" strokeWidth="28" strokeLinecap="round"/>
            <path d="M 55 340 Q 300 85 545 340" stroke="#DB2777" strokeWidth="28" strokeLinecap="round"/>
            <path d="M 90 340 Q 300 135 510 340" stroke="#5B21B6" strokeWidth="28" strokeLinecap="round"/>
        </svg>
    );
}

export default async function HomePage() {
    const posts = await getLatestPosts();

    return (
        <>
            {/* ── HERO ── */}
            <section style={{
                minHeight: "100vh", background: "linear-gradient(150deg, var(--navy-deep) 0%, var(--navy) 100%)",
                display: "flex", alignItems: "center", position: "relative", overflow: "hidden",
                marginTop: -92,
            }}>
                <RainbowWatermark />
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 70% at 15% 50%, rgba(217,119,6,.07) 0%, transparent 60%)", pointerEvents: "none" }} />

                <div className="container" style={{ position: "relative", zIndex: 1, padding: "clamp(100px, 14vw, 160px) clamp(20px, 5vw, 72px) clamp(80px, 10vw, 120px)" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "clamp(48px, 7vw, 96px)", alignItems: "center" }}>

                        {/* Left */}
                        <div>
                            <div className="h-anim h-a1" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", borderRadius: 100, border: "1px solid rgba(217,119,6,.4)", background: "rgba(217,119,6,.1)", marginBottom: 28 }}>
                                <IconRainbowBrand size={18} />
                                <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" }}>Fondation · Cancer pédiatrique · RDC</span>
                            </div>

                            <h1 className="h-anim h-a2" style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)", color: "#fff", lineHeight: 1.08, marginBottom: 22 }}>
                                Agir pour chaque{" "}
                                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>enfant</span><br />
                                <span className="font-script" style={{ fontSize: "1.06em", color: "rgba(255,255,255,.85)" }}>qui mérite de vivre</span>
                            </h1>

                            <p className="h-anim h-a3" style={{ color: "rgba(255,255,255,.68)", fontSize: "1.02rem", lineHeight: 1.9, maxWidth: 480, marginBottom: 40 }}>
                                Le cancer pédiatrique est souvent diagnostiqué trop tard en RDC. La Fondation Eliana œuvre pour changer cela — pour nos enfants, pour leur avenir.
                            </p>

                            <div className="h-anim h-a4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                                <Link href="/don" className="btn btn-gold">
                                    <IconHeart size={15} color="#fff" />
                                    Faire un don
                                </Link>
                                <Link href="/#histoire" className="btn btn-outline-white">
                                    Notre histoire
                                    <IconArrow size={14} color="#fff" />
                                </Link>
                            </div>
                        </div>

                        {/* Right — photo + stat card */}
                        <div className="h-anim h-a5 hide-mobile" style={{ position: "relative" }}>
                            <div className="photo-slot" style={{ aspectRatio: "4/5", borderRadius: 24, overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,.4)" }}>
                                <img src="https://picsum.photos/seed/eliana-hero/800/1000" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            {/* Floating stat card */}
                            <div style={{
                                position: "absolute", bottom: -20, left: -32,
                                background: "#fff", borderRadius: 18,
                                padding: "18px 26px",
                                boxShadow: "0 24px 64px rgba(0,0,0,.2)",
                                minWidth: 190,
                            }}>
                                <p style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 6 }}>Enfants accompagnés</p>
                                <p style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--navy)", fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>340+</p>
                                <p style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: 6 }}>depuis 2023 en RDC</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATS BAND ── */}
            <section style={{ background: "var(--navy-deep)", padding: "clamp(40px, 6vw, 64px) 0" }}>
                <div className="container">
                    <div className="grid-4">
                        {STATS.map((s, i) => (
                            <div key={i} data-sr style={{
                                textAlign: "center", padding: "8px 16px",
                                borderRight: i < 3 ? "1px solid rgba(255,255,255,.08)" : "none",
                            }}>
                                <p style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "var(--gold)", fontFamily: "'Playfair Display', serif", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{s.num}</p>
                                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,.5)", marginTop: 8, lineHeight: 1.4 }}>{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4 PILIERS ── */}
            <section id="mission" className="section" style={{ background: "#fff" }}>
                <div className="container">
                    <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 64px" }}>
                        <span className="section-label" data-sr>Nos Engagements</span>
                        <h2 data-sr style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)", color: "var(--navy)", marginBottom: 16 }}>Quatre piliers d&apos;action</h2>
                        <div className="divider divider-center" data-sr />
                        <p data-sr style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.9 }}>
                            La Fondation Eliana agit sur quatre axes fondamentaux pour améliorer la prise en charge du cancer pédiatrique en République Démocratique du Congo.
                        </p>
                    </div>
                    <div className="grid-4">
                        {PILLARS.map(p => (
                            <div key={p.title} className="action-card" data-sr style={{ textAlign: "center" }}>
                                <div style={{ width: 58, height: 58, borderRadius: 16, background: p.bg, border: `1px solid ${p.border}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                                    <p.Icon size={26} color={p.color} />
                                </div>
                                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy)", marginBottom: 10, fontFamily: "'Playfair Display', serif" }}>{p.title}</h3>
                                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.8 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HISTOIRE + TIMELINE ── */}
            <section id="histoire" className="section" style={{ background: "var(--beige)" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px, 7vw, 96px)", alignItems: "start" }}>

                        {/* Photo */}
                        <div data-sr>
                            <div className="photo-slot" style={{ aspectRatio: "4/5", borderRadius: 24, overflow: "hidden", boxShadow: "0 32px 72px rgba(30,58,95,.12)" }}>
                                <img src="https://picsum.photos/seed/eliana-histoire/800/1000" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                        </div>

                        {/* Timeline */}
                        <div data-sr>
                            <span className="section-label">Notre Histoire</span>
                            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--navy)", marginBottom: 16 }}>
                                Née de l&apos;amour,<br />
                                <span className="font-script" style={{ color: "var(--purple)", fontSize: "1.12em" }}>du courage et de la force</span>
                            </h2>
                            <div className="divider" />
                            <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 40, fontSize: "0.92rem" }}>
                                Inspirée par la force d&apos;Eliana et de ces nombreux enfants qui luttent chaque jour, la fondation contribue à l&apos;amélioration de la prise en charge des cancers pédiatriques en RDC.
                            </p>

                            <div className="timeline">
                                {TIMELINE.map((item, i) => (
                                    <div key={i} className="timeline-item">
                                        <div className="timeline-dot">
                                            {i === TIMELINE.length - 1
                                                ? <IconHeart size={15} color="var(--gold)" />
                                                : <IconButterfly size={15} color="var(--gold)" />
                                            }
                                        </div>
                                        <div style={{ flex: 1, paddingTop: 6 }}>
                                            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 4 }}>{item.year}</span>
                                            <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy)", marginBottom: 6, fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                                            <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.75 }}>{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 8 ACTIONS ── */}
            <section id="actions" className="section" style={{ background: "#fff" }}>
                <div className="container">
                    <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 64px" }}>
                        <span className="section-label" data-sr>Nos Actions</span>
                        <h2 data-sr style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)", color: "var(--navy)" }}>Ce que nous faisons,<br /><span className="font-script" style={{ color: "var(--purple)", fontSize: "1.06em" }}>concrètement</span></h2>
                        <div className="divider divider-center" data-sr />
                    </div>
                    <div className="grid-4" style={{ gap: "clamp(12px, 2vw, 20px)" }}>
                        {ACTIONS.map((a, i) => (
                            <div key={i} data-sr style={{
                                padding: "24px 22px", borderRadius: 16,
                                background: i % 2 === 0 ? "var(--beige)" : "#fff",
                                border: "1px solid var(--border)",
                                display: "flex", gap: 14, alignItems: "flex-start",
                            }}>
                                <div style={{
                                    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                                    background: "var(--navy-deep)", display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    <IconCheck size={13} color="#fff" />
                                </div>
                                <p style={{ fontSize: "0.85rem", color: "var(--navy)", lineHeight: 1.7, fontWeight: 500 }}>{a}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: "center", marginTop: 48 }}>
                        <Link href="/don" className="btn btn-gold">
                            <IconHeart size={15} color="#fff" />
                            Soutenir nos actions
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── SYMBOLES ── */}
            <section className="section-sm" style={{ background: "var(--beige)" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 52 }}>
                        <span className="section-label" data-sr>Nos Symboles</span>
                        <h2 data-sr style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "var(--navy)" }}>L&apos;espoir et la transformation</h2>
                    </div>
                    <div className="grid-2">
                        <div data-sr style={{ padding: "44px 40px", borderRadius: 24, background: "#fff", border: "1px solid var(--border)", textAlign: "center" }}>
                            <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                                <svg viewBox="0 0 120 76" fill="none" width="120" className="float-slow">
                                    <path d="M 6 68 Q 60 6 114 68" stroke="#D97706" strokeWidth="10" strokeLinecap="round"/>
                                    <path d="M 16 68 Q 60 22 104 68" stroke="#DB2777" strokeWidth="10" strokeLinecap="round"/>
                                    <path d="M 26 68 Q 60 36 94 68" stroke="#5B21B6" strokeWidth="10" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3 style={{ fontSize: "1.3rem", color: "var(--navy)", marginBottom: 14 }}>L&apos;arc-en-ciel</h3>
                            <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "0.9rem" }}>
                                L&apos;arc-en-ciel représente l&apos;espoir après la tempête. Il rappelle que même dans les moments les plus sombres, la lumière peut revenir. Il symbolise la résilience et la promesse que l&apos;espoir brille toujours.
                            </p>
                        </div>
                        <div data-sr style={{ padding: "44px 40px", borderRadius: 24, background: "#fff", border: "1px solid var(--border)", textAlign: "center" }}>
                            <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                                <IconButterfly size={80} color="#1E3A5F" className="float" />
                            </div>
                            <h3 style={{ fontSize: "1.3rem", color: "var(--navy)", marginBottom: 14 }}>Le papillon bleu</h3>
                            <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "0.9rem" }}>
                                Le papillon bleu symbolise la transformation, la liberté et l&apos;esprit délicat mais puissant d&apos;un enfant. Il représente l&apos;esprit doux d&apos;Eliana et l&apos;empreinte durable qu&apos;elle laisse dans nos cœurs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOMMAGE ── */}
            <section id="hommage" className="section" style={{
                background: "linear-gradient(150deg, var(--navy-deep) 0%, var(--navy) 100%)",
                color: "#fff", position: "relative", overflow: "hidden",
            }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse 50% 60% at 15% 50%, rgba(217,119,6,.1) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 85% 30%, rgba(91,33,182,.15) 0%, transparent 55%)", pointerEvents: "none" }} />

                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "480px 1fr", gap: "clamp(48px, 7vw, 96px)", alignItems: "center" }}>

                        {/* Photo */}
                        <div data-sr style={{ position: "relative" }}>
                            <div className="photo-slot" style={{ aspectRatio: "3/4", borderRadius: 24, overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,.4)" }}>
                                <img src="https://picsum.photos/seed/eliana-hommage/700/900" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 45%, rgba(15,37,64,.6) 100%)" }} />
                            </div>
                            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
                                {["Pour nos enfants", "Pour leur avenir", "Pour la RDC"].map(t => (
                                    <span key={t} style={{ padding: "6px 14px", borderRadius: 100, border: "1px solid rgba(255,255,255,.2)", color: "rgba(255,255,255,.6)", fontSize: "0.72rem" }}>{t}</span>
                                ))}
                            </div>
                        </div>

                        {/* Text */}
                        <div data-sr>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                                <IconButterfly size={32} color="rgba(255,255,255,.4)" />
                                <span style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.35)" }}>Hommage</span>
                            </div>
                            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", lineHeight: 1.12, marginBottom: 24 }}>
                                À Eliana,{" "}
                                <span className="font-script" style={{ color: "var(--gold)", fontSize: "1.08em" }}>notre petite princesse</span>
                            </h2>
                            <div className="divider divider-white" />
                            <p style={{ color: "rgba(255,255,255,.7)", fontSize: "0.95rem", lineHeight: 2, marginBottom: 20 }}>
                                Cette fondation est dédiée à <strong style={{ color: "#fff" }}>Eliana</strong>, qui a lutté pendant six ans contre un neuroblastome métastatique. Elle représente le courage de tous ces enfants qui affrontent la maladie malgré eux.
                            </p>
                            <p style={{ color: "rgba(255,255,255,.7)", fontSize: "0.95rem", lineHeight: 2, marginBottom: 36 }}>
                                Eliana apportait de la couleur, de la joie et de la lumière. Cette petite princesse aimait les arcs-en-ciel, les papillons bleus, danser librement et peindre avec imagination.
                            </p>
                            <div style={{ padding: "24px 32px", background: "rgba(255,255,255,.06)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 18 }}>
                                <p className="font-serif" style={{ fontStyle: "italic", fontSize: "1.1rem", color: "var(--gold)", lineHeight: 1.8 }}>
                                    &ldquo;Que chaque enfant que nous aidons porte en lui la même lumière, la même force et les mêmes couleurs.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BLOG PREVIEW ── */}
            {posts.length > 0 && (
                <section className="section" style={{ background: "var(--surface)" }}>
                    <div className="container">
                        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 20 }}>
                            <div>
                                <span className="section-label" data-sr>Blog & Actualités</span>
                                <h2 data-sr style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "var(--navy)" }}>Dernières nouvelles</h2>
                            </div>
                            <Link href="/blog" className="btn btn-outline" data-sr style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                                Tous les articles <IconArrow size={14} color="var(--navy)" />
                            </Link>
                        </div>
                        <div className="grid-3">
                            {posts.map((post: any) => (
                                <Link key={post.id} href={`/blog/${post.slug}`} className="card blog-card" style={{ display: "flex", flexDirection: "column" }}>
                                    <div className="blog-card-img photo-slot">
                                        {post.cover_image && <img src={post.cover_image} alt={post.title} />}
                                    </div>
                                    <div className="blog-card-body">
                                        {post.category && <span className="tag tag-gold">{post.category}</span>}
                                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: "var(--navy)", lineHeight: 1.4 }}>{post.title}</h3>
                                        {post.excerpt && <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.75, flex: 1 }}>{post.excerpt}</p>}
                                        <p style={{ fontSize: "0.72rem", color: "var(--muted-light)" }}>
                                            {new Date(post.published_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── CTA FINAL ── */}
            <section className="section" style={{ background: "var(--navy-deep)", textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(217,119,6,.12) 0%, transparent 60%)", pointerEvents: "none" }} />
                <div className="container-xs" style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 36 }}>
                        <div className="float-slow">
                            <svg viewBox="0 0 120 76" fill="none" width="96">
                                <path d="M 6 68 Q 60 6 114 68" stroke="#D97706" strokeWidth="8" strokeLinecap="round" opacity="0.7"/>
                                <path d="M 16 68 Q 60 22 104 68" stroke="#DB2777" strokeWidth="8" strokeLinecap="round" opacity="0.7"/>
                                <path d="M 26 68 Q 60 36 94 68" stroke="#5B21B6" strokeWidth="8" strokeLinecap="round" opacity="0.7"/>
                            </svg>
                        </div>
                    </div>
                    <h2 data-sr style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", color: "#fff", marginBottom: 20 }}>
                        Ensemble, faisons une<br />
                        <span className="font-script" style={{ color: "var(--gold)", fontSize: "1.1em" }}>réelle différence</span>
                    </h2>
                    <p data-sr style={{ color: "rgba(255,255,255,.6)", fontSize: "1rem", lineHeight: 1.9, marginBottom: 40 }}>
                        Chaque geste compte. Soutenez la Fondation Eliana dans sa mission de lutte contre le cancer pédiatrique en RDC.
                    </p>
                    <div data-sr style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/don" className="btn btn-gold">
                            <IconHeart size={15} color="#fff" />
                            Faire un don
                        </Link>
                        <Link href="/contact" className="btn btn-outline-white">
                            Nous contacter
                            <IconArrow size={14} color="#fff" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
