import { notFound } from "next/navigation";
import Link from "next/link";
import { findPost, listPosts, postDate, renderMarkdown } from "@/lib/posts";
import { IconArrow, IconHeart, IconButterfly } from "../../components/Icons";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await findPost(slug);
    if (!post) return { title: "Article introuvable — Fondation Eliana" };
    return {
        title: `${post.title} — Fondation Eliana`,
        description: post.excerpt ?? "Fondation Eliana — cancer pédiatrique en RDC",
        openGraph: { title: post.title, description: post.excerpt ?? undefined, images: post.cover_url ? [post.cover_url] : [] },
    };
}

export default async function ActualitePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const [post, latest] = await Promise.all([findPost(slug), listPosts(4)]);
    if (!post) notFound();
    const related = latest.filter(p => p.slug !== slug).slice(0, 3);
    const category = post.tags[0];

    return (
        <>
            {/* ── HEADER article centré ── */}
            <section style={{
                background: "linear-gradient(180deg, var(--navy-deep) 0%, var(--navy) 100%)",
                padding: "clamp(80px, 12vw, 130px) 0 clamp(56px, 8vw, 88px)",
                textAlign: "center", color: "#fff", position: "relative",
                marginTop: -92,
            }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 60% at 50% 110%, rgba(217,119,6,.1) 0%, transparent 60%)", pointerEvents: "none" }} />
                <div className="container-sm" style={{ position: "relative", zIndex: 1 }}>
                    {/* Breadcrumb */}
                    <div className="h-anim h-a1" style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginBottom: 28, fontSize: "0.75rem", color: "rgba(255,255,255,.45)", flexWrap: "wrap" }}>
                        <Link href="/" style={{ color: "rgba(255,255,255,.45)" }}>Accueil</Link>
                        <IconArrow size={10} color="rgba(255,255,255,.3)" />
                        <Link href="/actualites" style={{ color: "rgba(255,255,255,.45)" }}>Actualités</Link>
                        {category && (
                            <>
                                <IconArrow size={10} color="rgba(255,255,255,.3)" />
                                <span style={{ color: "var(--gold)" }}>{category}</span>
                            </>
                        )}
                    </div>

                    {category && (
                        <span className="h-anim h-a2 tag tag-gold" style={{ marginBottom: 20, display: "inline-flex" }}>{category}</span>
                    )}

                    <h1 className="h-anim h-a3" style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)", color: "#fff", lineHeight: 1.2, margin: "12px 0 20px" }}>
                        {post.title}
                    </h1>

                    {post.excerpt && (
                        <p className="h-anim h-a4" style={{ fontSize: "1.05rem", color: "rgba(255,255,255,.62)", lineHeight: 1.85, marginBottom: 28 }}>
                            {post.excerpt}
                        </p>
                    )}

                    <div className="h-anim h-a5" style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "center", fontSize: "0.75rem", color: "rgba(255,255,255,.4)", flexWrap: "wrap" }}>
                        <span>{postDate(post)}</span>
                    </div>
                </div>
            </section>

            {/* ── IMAGE DE COUVERTURE pleine largeur ── */}
            <div style={{ position: "relative", height: "clamp(280px, 40vw, 520px)", overflow: "hidden" }}>
                {post.cover_url ? (
                    <img src={post.cover_url} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                    <div className="photo-slot" style={{ width: "100%", height: "100%" }} />
                )}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,37,64,.3) 0%, transparent 40%, transparent 70%, rgba(255,255,255,.15) 100%)" }} />
            </div>

            {/* ── CORPS article ── */}
            <article style={{ background: "#fff", paddingBottom: 80 }}>
                <div style={{ maxWidth: 740, margin: "0 auto", padding: "clamp(40px, 6vw, 72px) clamp(20px, 5vw, 72px) 0" }}>
                    <div className="article-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content ?? "") }} />

                    {/* CTA don navy */}
                    <div style={{
                        marginTop: 64, padding: "36px 40px", borderRadius: 20,
                        background: "linear-gradient(135deg, var(--navy-deep), var(--navy))",
                        display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap",
                    }}>
                        <div className="float"><IconButterfly size={44} color="rgba(255,255,255,.4)" /></div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: "1.05rem", color: "#fff", marginBottom: 6 }}>Soutenez la Fondation Eliana</h3>
                            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,.6)", lineHeight: 1.7 }}>
                                Chaque don contribue à améliorer la prise en charge du cancer pédiatrique en RDC.
                            </p>
                        </div>
                        <Link href="/don" className="btn btn-gold">
                            <IconHeart size={14} color="#fff" />
                            Faire un don
                        </Link>
                    </div>
                </div>
            </article>

            {/* ── Articles liés ── */}
            {related.length > 0 && (
                <section style={{ background: "var(--surface)", padding: "clamp(64px, 10vw, 100px) 0" }}>
                    <div className="container">
                        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
                            <div>
                                <span className="section-label" data-sr>À lire aussi</span>
                                <h2 data-sr style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--navy)" }}>Autres articles</h2>
                            </div>
                            <Link href="/actualites" className="btn btn-outline" data-sr style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                                Toutes les actualités <IconArrow size={13} color="var(--navy)" />
                            </Link>
                        </div>
                        <div className="grid-3">
                            {related.map(p => (
                                <Link key={p.id} href={`/actualites/${p.slug}`} className="card blog-card" style={{ display: "flex", flexDirection: "column" }}>
                                    <div className="blog-card-img photo-slot">
                                        {p.cover_url && <img src={p.cover_url} alt={p.title} />}
                                    </div>
                                    <div className="blog-card-body">
                                        {p.tags[0] && <span className="tag tag-gold" style={{ alignSelf: "flex-start", fontSize: "0.62rem" }}>{p.tags[0]}</span>}
                                        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 700, color: "var(--navy)", lineHeight: 1.4 }}>{p.title}</h3>
                                        {p.excerpt && <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.75 }}>{p.excerpt}</p>}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
