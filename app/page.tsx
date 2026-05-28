import Link from "next/link";
import {
    IconRibbon, IconSearch, IconUsers, IconMegaphone, IconCross,
    IconHeart, IconHeartOutline, IconRainbow, IconButterfly, IconArrow,
} from "./components/Icons";

const ACTIONS = [
    {
        Icon: IconSearch,
        bg: "var(--purple-light)",
        color: "var(--purple)",
        title: "Diagnostic précoce",
        desc: "Favoriser l'accès au diagnostic précoce et fiable des cancers chez l'enfant pour augmenter les chances de guérison.",
    },
    {
        Icon: IconUsers,
        bg: "#E0F2FE",
        color: "#0284C7",
        title: "Soutien aux familles",
        desc: "Accompagner les enfants atteints de cancer et leurs familles tout au long du traitement, sans les laisser seuls.",
    },
    {
        Icon: IconMegaphone,
        bg: "#FCE7F3",
        color: "var(--pink)",
        title: "Sensibilisation",
        desc: "Développer des programmes de sensibilisation et d'éducation à la santé dans les communautés de RDC.",
    },
    {
        Icon: IconCross,
        bg: "var(--gold-light)",
        color: "var(--gold)",
        title: "Accès aux soins",
        desc: "Réduire les inégalités d'accès aux soins et soutenir l'accès à des traitements conformes aux protocoles reconnus.",
    },
];

const MISSIONS = [
    "Favoriser l'accès au diagnostic précoce et fiable des cancers chez l'enfant",
    "Soutenir l'accès à des traitements appropriés, conformes aux protocoles reconnus",
    "Réduire les inégalités d'accès aux soins liées aux contraintes économiques, géographiques et structurelles",
    "Accompagner les enfants atteints de cancer ainsi que leurs familles tout au long du traitement",
    "Prévenir les interruptions ou abandons de traitements et améliorer la continuité de la prise en charge",
    "Appuyer les structures de santé dans le renforcement de leurs capacités en oncologie pédiatrique",
    "Développer des programmes de sensibilisation et d'éducation à la santé",
    "Établir des partenariats durables avec les autorités publiques, les organismes internationaux et les ONG",
];

export default function HomePage() {
    return (
        <>
            {/* ─── HERO ─── */}
            <section style={{
                minHeight: "calc(100vh - 72px)",
                background: "linear-gradient(135deg, #F5F3FF 0%, #FFF7ED 50%, #FDF2F8 100%)",
                display: "flex", alignItems: "center",
                position: "relative", overflow: "hidden",
            }}>
                <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: "0", left: "-5%", width: "30vw", height: "30vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

                <div className="container" style={{ position: "relative", zIndex: 1, padding: "clamp(48px, 8vw, 80px) clamp(20px, 5vw, 80px)" }}>
                    <div className="grid-2" style={{ alignItems: "center" }}>
                        <div>
                            <div className="anim-1" style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
                                <span className="tag">Fondation</span>
                                <span className="tag tag-gold">Cancer pédiatrique · RDC</span>
                            </div>
                            <h1 className="anim-2" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "var(--navy)", lineHeight: 1.15, marginBottom: 16 }}>
                                Ensemble contre le<br />
                                <span style={{ color: "var(--gold)", fontStyle: "italic" }}>cancer</span>{" "}
                                <span className="font-script" style={{ color: "var(--purple)", fontSize: "1.05em" }}>pédiatrique</span>
                            </h1>
                            <div className="anim-3" style={{
                                display: "inline-flex", alignItems: "center",
                                background: "var(--purple)", color: "#fff",
                                padding: "8px 20px", borderRadius: 4,
                                fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em",
                                marginBottom: 28,
                            }}>
                                EN RDC, AGISSONS MAINTENANT !
                            </div>
                            <p className="anim-3" style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.85, maxWidth: 480, marginBottom: 36 }}>
                                Le cancer pédiatrique est une maladie grave, souvent diagnostiquée trop tard en RDC. La Fondation Eliana œuvre pour changer cela — pour nos enfants, pour leur avenir.
                            </p>
                            <div className="anim-4" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
                                <Link href="/contact" className="btn-gold" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                                    <IconHeart size={16} color="#fff" />
                                    Soutenir la fondation
                                </Link>
                                <Link href="/#histoire" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                                    Notre histoire
                                    <IconArrow size={14} color="var(--purple)" />
                                </Link>
                            </div>
                            <div className="anim-5" style={{
                                padding: "16px 20px",
                                background: "rgba(255,255,255,0.8)",
                                backdropFilter: "blur(8px)",
                                borderRadius: 12,
                                border: "1px solid rgba(124,58,237,0.1)",
                                maxWidth: 420,
                            }}>
                                <p className="font-script" style={{ color: "var(--purple)", fontSize: "1.25rem", lineHeight: 1.5 }}>
                                    &ldquo;Chaque enfant mérite de grandir, de rêver, de vivre.&rdquo;
                                </p>
                            </div>
                        </div>

                        {/* Visual */}
                        <div className="anim-2 hide-mobile" style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
                            <div style={{
                                width: "clamp(220px, 30vw, 320px)", aspectRatio: "1",
                                background: "radial-gradient(circle, rgba(217,119,6,0.08) 0%, rgba(124,58,237,0.06) 60%, transparent 80%)",
                                borderRadius: "50%",
                                display: "flex", alignItems: "center", justifyContent: "center",
                            }} className="float">
                                <IconRibbon size={160} color="var(--gold)" />
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <p style={{ fontSize: "0.75rem", color: "var(--gold)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Ruban d&apos;or</p>
                                <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: 4 }}>Symbole du cancer pédiatrique</p>
                            </div>
                            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                                {[
                                    { num: "300 000+", label: "enfants diagnostiqués/an dans le monde" },
                                    { num: "80%", label: "de survie possible avec un diagnostic précoce" },
                                ].map(s => (
                                    <div key={s.num} style={{
                                        padding: "14px 18px", borderRadius: 12,
                                        background: "rgba(255,255,255,0.9)",
                                        border: "1px solid var(--border)",
                                        textAlign: "center", flex: 1,
                                    }}>
                                        <p style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--purple)", fontFamily: "'Playfair Display', serif" }}>{s.num}</p>
                                        <p style={{ fontSize: "0.68rem", color: "var(--muted)", marginTop: 4, lineHeight: 1.4 }}>{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 4 MISSIONS ─── */}
            <section id="mission" className="section-sm" style={{ background: "#fff" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Nos Engagements</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "var(--navy)" }}>Quatre piliers d&apos;action</h2>
                    </div>
                    <div className="grid-4">
                        {ACTIONS.map((a) => (
                            <div key={a.title} className="action-card" style={{ textAlign: "center" }}>
                                <div style={{
                                    width: 56, height: 56, borderRadius: "50%",
                                    background: a.bg,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    margin: "0 auto 16px",
                                }}>
                                    <a.Icon size={24} color={a.color} />
                                </div>
                                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy)", marginBottom: 10, fontFamily: "inherit" }}>{a.title}</h3>
                                <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.7 }}>{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── NOTRE HISTOIRE ─── */}
            <section id="histoire" className="section" style={{ background: "var(--cream)" }}>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: "center" }}>
                        <div>
                            <span className="tag" style={{ marginBottom: 20, display: "inline-block" }}>Notre Histoire</span>
                            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--navy)", marginBottom: 20 }}>
                                Née de l&apos;amour,<br />
                                <span className="font-script" style={{ color: "var(--purple)", fontSize: "1.15em" }}>du courage et de la force</span>
                            </h2>
                            <div className="divider" />
                            <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 20 }}>
                                La Fondation Eliana est née de l&apos;amour, du courage et de la force extraordinaire d&apos;un enfant confronté au cancer.
                            </p>
                            <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 20 }}>
                                Lorsqu&apos;un enfant reçoit un diagnostic de cancer, toute une famille tombe dans un monde d&apos;incertitude, de peur et d&apos;épreuves. Pourtant, au cœur de cette épreuve, se révèlent souvent une bravoure remarquable, une grande résilience et beaucoup d&apos;espoir.
                            </p>
                            <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 32 }}>
                                Inspirée par la force d&apos;Eliana et de ces nombreux enfants qui luttent chaque jour contre cette maladie, la fondation a pour mission de contribuer à l&apos;amélioration de la prise en charge des cancers pédiatriques en République Démocratique du Congo.
                            </p>
                            <Link href="/#actions" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                                Découvrir nos actions
                                <IconArrow size={14} color="#fff" />
                            </Link>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            <div style={{
                                padding: "32px",
                                background: "linear-gradient(135deg, var(--purple) 0%, var(--purple-mid) 100%)",
                                borderRadius: 20, color: "#fff",
                            }}>
                                <IconRainbow size={40} style={{ marginBottom: 16 }} />
                                <p className="font-script" style={{ fontSize: "1.4rem", lineHeight: 1.6, marginBottom: 16 }}>
                                    &ldquo;La fondation s&apos;engage à sensibiliser les communautés et croit que l&apos;espoir est une force, que la compassion est essentielle.&rdquo;
                                </p>
                                <p style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.6 }}>Fondation Eliana</p>
                            </div>
                            <div style={{
                                padding: "24px 28px", background: "#fff",
                                borderRadius: 16, border: "1px solid var(--border)",
                                display: "flex", gap: 16, alignItems: "flex-start",
                            }}>
                                <div style={{ flexShrink: 0, marginTop: 2 }}>
                                    <IconHeart size={28} color="var(--pink)" />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 600, color: "var(--navy)", marginBottom: 6 }}>Le cancer pédiatrique en RDC</p>
                                    <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7 }}>
                                        En RDC, le cancer de l&apos;enfant est souvent diagnostiqué trop tard, réduisant drastiquement les chances de guérison. Un diagnostic précoce peut sauver une vie.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── NOS ACTIONS ─── */}
            <section id="actions" className="section" style={{ background: "#fff" }}>
                <div className="container">
                    <div style={{ maxWidth: 640, marginBottom: 56 }}>
                        <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Nos Actions</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--navy)", marginBottom: 16 }}>
                            Ce que nous faisons, concrètement
                        </h2>
                        <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
                            À travers des mouvements de sensibilisation et des campagnes d&apos;information en collaboration avec des professionnels de santé, la fondation œuvre sur 8 axes essentiels.
                        </p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
                        {MISSIONS.map((m, i) => (
                            <div key={i} style={{
                                display: "flex", gap: 16, alignItems: "flex-start",
                                padding: "20px 24px", borderRadius: 12,
                                background: i % 2 === 0 ? "var(--purple-soft)" : "var(--gold-soft)",
                                border: `1px solid ${i % 2 === 0 ? "var(--purple-light)" : "var(--gold-light)"}`,
                            }}>
                                <div style={{
                                    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                                    background: i % 2 === 0 ? "var(--purple)" : "var(--gold)",
                                    color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "0.75rem", fontWeight: 700, marginTop: 2,
                                }}>
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <p style={{ fontSize: "0.88rem", color: "var(--navy)", lineHeight: 1.7 }}>{m}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── LES SYMBOLES ─── */}
            <section className="section-sm" style={{ background: "var(--cream)" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Nos Symboles</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "var(--navy)" }}>L&apos;espoir et la transformation</h2>
                    </div>
                    <div className="grid-2">
                        <div style={{ padding: "36px 40px", borderRadius: 20, background: "var(--purple-soft)", border: "1px solid var(--purple-light)", textAlign: "center" }}>
                            <div className="float" style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                                <IconRainbow size={72} />
                            </div>
                            <h3 style={{ fontSize: "1.4rem", color: "var(--navy)", marginBottom: 16 }}>L&apos;arc-en-ciel</h3>
                            <p style={{ color: "var(--muted)", lineHeight: 1.85, fontSize: "0.92rem" }}>
                                L&apos;arc-en-ciel représente l&apos;espoir après la tempête. Il nous rappelle que même dans les moments les plus sombres, la lumière et les couleurs peuvent revenir. Pour les familles confrontées au cancer de l&apos;enfant, il symbolise la résilience, la force et la promesse que l&apos;espoir peut toujours briller.
                            </p>
                        </div>
                        <div style={{ padding: "36px 40px", borderRadius: 20, background: "#EFF6FF", border: "1px solid #BFDBFE", textAlign: "center" }}>
                            <div className="float" style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                                <IconButterfly size={72} color="#3B82F6" />
                            </div>
                            <h3 style={{ fontSize: "1.4rem", color: "var(--navy)", marginBottom: 16 }}>Le papillon bleu</h3>
                            <p style={{ color: "var(--muted)", lineHeight: 1.85, fontSize: "0.92rem" }}>
                                Le papillon bleu symbolise la transformation, la liberté et l&apos;esprit délicat mais puissant d&apos;un enfant. Il représente aussi l&apos;esprit doux d&apos;Eliana et l&apos;empreinte durable qu&apos;elle laisse dans le cœur de ceux qui l&apos;ont aimée.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── HOMMAGE ─── */}
            <section id="hommage" className="section" style={{
                background: "linear-gradient(135deg, var(--navy) 0%, #2D1B69 100%)",
                color: "#fff", position: "relative", overflow: "hidden",
            }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 80%, rgba(217,119,6,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(124,58,237,0.12) 0%, transparent 50%)", pointerEvents: "none" }} />
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
                        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                            <IconButterfly size={56} color="rgba(255,255,255,0.6)" />
                        </div>
                        <span style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: 20 }}>Hommage</span>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", marginBottom: 32, color: "#fff" }}>
                            À Eliana,{" "}
                            <span className="font-script" style={{ color: "var(--gold)", fontSize: "1.1em" }}>notre petite princesse</span>
                        </h2>
                        <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, var(--gold), var(--pink))", margin: "0 auto 36px" }} />
                        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", lineHeight: 2, marginBottom: 28 }}>
                            Cette fondation est dédiée à <strong style={{ color: "#fff" }}>Eliana</strong>, âgée de sept ans, qui a lutté pendant quatre ans contre un neuroblastome métastatique. Elle représente le courage et la force de tous ces enfants qui doivent affronter cette maladie malgré eux.
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", lineHeight: 2, marginBottom: 28 }}>
                            Eliana apportait de la couleur, de la joie et de la lumière dans le monde qui l&apos;entourait. Armée de compassion et remplie de rêves, cette petite princesse aimait les arcs-en-ciel, les papillons bleus, danser librement et peindre avec imagination.
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", lineHeight: 2, marginBottom: 48 }}>
                            Son esprit continuera de vivre dans chaque geste de solidarité, chaque moment d&apos;espoir et chaque pas vers un avenir où le cancer pédiatrique peut être soigné en République Démocratique du Congo.
                        </p>
                        <div style={{ padding: "28px 36px", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, marginBottom: 32 }}>
                            <p className="font-script" style={{ fontSize: "1.5rem", color: "var(--gold)", lineHeight: 1.7 }}>
                                &ldquo;Que chaque enfant que nous aidons porte en lui la même lumière, la même force et les mêmes couleurs.&rdquo;
                            </p>
                        </div>
                        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                            {["Pour nos enfants", "Pour leur avenir", "Pour la RDC"].map(t => (
                                <span key={t} style={{ padding: "6px 18px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", display: "inline-flex", alignItems: "center", gap: 6 }}>
                                    <IconHeartOutline size={12} color="var(--gold)" />
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CTA FINAL ─── */}
            <section className="section" style={{ background: "#fff", textAlign: "center" }}>
                <div className="container">
                    <div style={{ maxWidth: 640, margin: "0 auto" }}>
                        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 24 }}>
                            <IconRainbow size={40} />
                            <IconButterfly size={40} color="#3B82F6" />
                        </div>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--navy)", marginBottom: 20 }}>
                            Ensemble, faisons<br />
                            <span className="font-script" style={{ color: "var(--purple)", fontSize: "1.15em" }}>une réelle différence</span>
                        </h2>
                        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.9, marginBottom: 36 }}>
                            Chaque geste compte. Soutenez la Fondation Eliana dans sa mission de lutte contre le cancer pédiatrique en RDC. Parce que chaque enfant mérite de grandir, de rêver, de vivre.
                        </p>
                        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn-gold" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                                <IconHeart size={16} color="#fff" />
                                Faire un don
                            </Link>
                            <Link href="/contact" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                                Nous contacter
                                <IconArrow size={14} color="var(--purple)" />
                            </Link>
                        </div>
                        <p style={{ marginTop: 28, fontSize: "0.8rem", color: "var(--muted)", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                            Chaque enfant compte.
                            <IconButterfly size={14} color="var(--purple)" />
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
