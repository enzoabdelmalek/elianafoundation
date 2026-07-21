import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { IconArrow, IconButterfly, IconHeart } from "../components/Icons";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    category?: string;
    cover_image?: string;
    published_at: string;
    author?: string;
}

async function getPosts() {
    try {
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );
        const { data } = await supabase
            .from("blog_posts")
            .select("id, title, slug, excerpt, category, cover_image, published_at, author")
            .eq("business_id", process.env.NEXT_PUBLIC_ELIANA_BUSINESS_ID)
            .eq("active", true)
            .order("published_at", { ascending: false });
        return data ?? [];
    } catch { return []; }
}

export const metadata = {
    title: "Blog — Fondation Eliana",
    description: "Actualités, articles de sensibilisation et ressources sur le cancer pédiatrique en RDC.",
};

export default async function BlogPage() {
    const posts  = await getPosts();
    const featured = posts[0] ?? null;
    const rest     = posts.slice(1);

    return (
        <>
            {/* ── HERO ── */}
            <section style={{
                background: "linear-gradient(150deg, var(--navy-deep) 0%, var(--navy) 100%)",
                padding: "clamp(80px, 12vw, 130px) 0 clamp(56px, 8vw, 88px)",
                textAlign: "center", color: "#fff", position: "relative", overflow: "hidden",
                marginTop: -92,
            }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse 50% 60% at 50% 110%, rgba(217,119,6,.12) 0%, transparent 55%)", pointerEvents: "none" }} />
                <div className="container-sm" style={{ position: "relative", zIndex: 1 }}>
                    <div className="h-anim h-a1" style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                        <div className="float"><IconButterfly size={44} color="rgba(255,255,255,.45)" /></div>
                    </div>
                    <p className="h-anim h-a2 section-label section-label-white" style={{ textAlign: "center" }}>Blog & Actualités</p>
                    <h1 className="h-anim h-a3" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", marginBottom: 16, lineHeight: 1.12 }}>
                        Sensibilisation &amp;{" "}
                        <span className="font-script" style={{ color: "var(--gold)", fontSize: "1.08em" }}>ressources</span>
                    </h1>
                    <p className="h-anim h-a4" style={{ color: "rgba(255,255,255,.6)", fontSize: "1rem", lineHeight: 1.9 }}>
                        Articles, témoignages et actualités sur le cancer pédiatrique en RDC et les actions de la Fondation Eliana.
                    </p>
                </div>
            </section>

            {posts.length === 0 ? (
                <section className="section" style={{ background: "#fff", textAlign: "center" }}>
                    <div className="container-sm">
                        <div className="float" style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
                            <IconButterfly size={72} color="var(--purple-light)" />
                        </div>
                        <h2 style={{ color: "var(--navy)", marginBottom: 16 }}>Bientôt disponible</h2>
                        <p style={{ color: "var(--muted)", lineHeight: 1.9 }}>Nous préparons des articles et ressources. Revenez bientôt.</p>
                        <div style={{ marginTop: 40 }}>
                            <Link href="/" className="btn btn-outline">Retour à l&apos;accueil</Link>
                        </div>
                    </div>
                </section>
            ) : (
                <>
                    {/* ── ARTICLE À LA UNE — bandeau navy ── */}
                    {featured && (
                        <section style={{ background: "var(--navy-deep)" }}>
                            <div className="container">
                                <Link href={`/blog/${featured.slug}`} style={{ display: "block" }}>
                                    <div className="grid-featured" style={{
                                        display: "grid", gridTemplateColumns: "1fr 1fr",
                                        gap: "clamp(40px, 6vw, 80px)", alignItems: "center",
                                        padding: "clamp(48px, 7vw, 88px) 0",
                                    }}>
                                        {/* Image */}
                                        <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }}>
                                            <div className="photo-slot" style={{ width: "100%", height: "100%" }}>
                                                {featured.cover_image && (
                                                    <img src={featured.cover_image} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                )}
                                            </div>
                                            <div style={{ position: "absolute", top: 16, left: 16 }}>
                                                <span className="tag tag-gold">À la une</span>
                                            </div>
                                        </div>
                                        {/* Text */}
                                        <div>
                                            {featured.category && <span className="tag tag-white" style={{ marginBottom: 18, display: "inline-flex" }}>{featured.category}</span>}
                                            <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", color: "#fff", lineHeight: 1.25, marginTop: 12, marginBottom: 18 }}>{featured.title}</h2>
                                            {featured.excerpt && <p style={{ color: "rgba(255,255,255,.62)", lineHeight: 1.9, fontSize: "0.92rem", marginBottom: 28 }}>{featured.excerpt}</p>}
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                                                <p style={{ fontSize: "0.74rem", color: "rgba(255,255,255,.4)" }}>
                                                    {new Date(featured.published_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                                                    {featured.author && ` · ${featured.author}`}
                                                </p>
                                                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.82rem", color: "var(--gold)", fontWeight: 600 }}>
                                                    Lire l&apos;article <IconArrow size={14} color="var(--gold)" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </section>
                    )}

                    {/* ── GRILLE articles ── */}
                    {rest.length > 0 && (
                        <section className="section" style={{ background: "#fff" }}>
                            <div className="container">
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
                                    <div>
                                        <span className="section-label" data-sr>Tous les articles</span>
                                        <h2 data-sr style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--navy)" }}>Nos publications</h2>
                                    </div>
                                </div>
                                <div className="grid-3">
                                    {rest.map((post: BlogPost) => (
                                        <Link key={post.id} href={`/blog/${post.slug}`} className="card blog-card" style={{ display: "flex", flexDirection: "column" }}>
                                            <div className="blog-card-img photo-slot">
                                                {post.cover_image && <img src={post.cover_image} alt={post.title} />}
                                            </div>
                                            <div className="blog-card-body">
                                                {post.category && <span className="tag tag-gold" style={{ alignSelf: "flex-start", fontSize: "0.62rem" }}>{post.category}</span>}
                                                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: "var(--navy)", lineHeight: 1.4 }}>{post.title}</h3>
                                                {post.excerpt && <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.75, flex: 1 }}>{post.excerpt}</p>}
                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                                                    <p style={{ fontSize: "0.72rem", color: "var(--muted-light)" }}>
                                                        {new Date(post.published_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}
                                                    </p>
                                                    <span style={{ fontSize: "0.72rem", color: "var(--navy)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 }}>
                                                        Lire <IconArrow size={11} color="var(--navy)" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </>
            )}

            {/* ── CTA don ── */}
            <section className="section-sm" style={{ background: "var(--beige)", textAlign: "center" }}>
                <div className="container-xs">
                    <h2 data-sr style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--navy)", marginBottom: 16 }}>
                        Vous souhaitez contribuer ?
                    </h2>
                    <p data-sr style={{ color: "var(--muted)", marginBottom: 32, lineHeight: 1.85 }}>
                        Chaque don, chaque partage aide à faire avancer notre mission.
                    </p>
                    <div data-sr style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/don" className="btn btn-gold"><IconHeart size={14} color="#fff" />Faire un don</Link>
                        <Link href="/contact" className="btn btn-outline">Nous contacter</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
