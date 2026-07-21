import { Fragment } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { IconArrow, IconHeart, IconButterfly } from "../../components/Icons";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    category?: string;
    cover_image?: string;
    published_at: string;
    author?: string;
    content?: string;
    quote?: string;
}

async function getPost(slug: string) {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("business_id", process.env.NEXT_PUBLIC_ELIANA_BUSINESS_ID)
        .eq("active", true)
        .single();
    return data;
}

async function getRelated(currentSlug: string) {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, category, cover_image, published_at")
        .eq("business_id", process.env.NEXT_PUBLIC_ELIANA_BUSINESS_ID)
        .eq("active", true)
        .neq("slug", currentSlug)
        .order("published_at", { ascending: false })
        .limit(3);
    return data ?? [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return { title: "Article introuvable — Fondation Eliana" };
    return {
        title: `${post.title} — Fondation Eliana`,
        description: post.excerpt ?? "Fondation Eliana — cancer pédiatrique en RDC",
        openGraph: { title: post.title, description: post.excerpt, images: post.cover_image ? [post.cover_image] : [] },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const [post, related] = await Promise.all([getPost(slug), getRelated(slug)]);
    if (!post) notFound();

    const paragraphs = (post.content ?? "").split(/\n\n+/);
    // Insert a quote block after the 3rd paragraph if content is long enough
    const quoteIndex = Math.min(3, Math.floor(paragraphs.length / 2));
    const quoteText = post.quote ?? null;

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
                        <Link href="/blog" style={{ color: "rgba(255,255,255,.45)" }}>Blog</Link>
                        {post.category && (
                            <>
                                <IconArrow size={10} color="rgba(255,255,255,.3)" />
                                <span style={{ color: "var(--gold)" }}>{post.category}</span>
                            </>
                        )}
                    </div>

                    {post.category && (
                        <span className="h-anim h-a2 tag tag-gold" style={{ marginBottom: 20, display: "inline-flex" }}>{post.category}</span>
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
                        {post.author && (
                            <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
                                <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(217,119,6,.3)", border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <IconButterfly size={13} color="var(--gold)" />
                                </div>
                                {post.author}
                            </span>
                        )}
                        {post.published_at && (
                            <span>{new Date(post.published_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                        )}
                    </div>
                </div>
            </section>

            {/* ── IMAGE DE COUVERTURE pleine largeur ── */}
            <div style={{ position: "relative", height: "clamp(280px, 40vw, 520px)", overflow: "hidden" }}>
                {post.cover_image ? (
                    <img src={post.cover_image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                    <div className="photo-slot" style={{ width: "100%", height: "100%" }} />
                )}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,37,64,.3) 0%, transparent 40%, transparent 70%, rgba(255,255,255,.15) 100%)" }} />
            </div>

            {/* ── CORPS article ── */}
            <article style={{ background: "#fff", paddingBottom: 80 }}>
                <div style={{ maxWidth: 740, margin: "0 auto", padding: "clamp(40px, 6vw, 72px) clamp(20px, 5vw, 72px) 0" }}>
                    <div style={{ lineHeight: 2, color: "var(--fg)", fontSize: "17.5px" }}>
                        {paragraphs.map((block: string, i: number) => {
                            const isHeading = block.startsWith("**") && block.endsWith("**") && !block.slice(2, -2).includes("**");

                            const quoteEl = (quoteText && i === quoteIndex) ? (
                                <blockquote key={`quote-${i}`} style={{
                                    margin: "40px 0", padding: "28px 36px",
                                    background: "var(--beige)", borderLeft: "4px solid var(--gold)",
                                    borderRadius: "0 16px 16px 0",
                                }}>
                                    <p className="font-serif" style={{ fontStyle: "italic", fontSize: "1.15rem", color: "var(--navy)", lineHeight: 1.8 }}>{quoteText}</p>
                                </blockquote>
                            ) : null;

                            const el = isHeading ? (
                                <h2 key={i} style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "var(--navy)", margin: "44px 0 16px" }}>
                                    {block.slice(2, -2)}
                                </h2>
                            ) : (
                                <p key={i} style={{ marginBottom: 26, lineHeight: 2 }}>
                                    {block.split(/(\*\*[^*]+\*\*)/).map((chunk: string, j: number) =>
                                        chunk.startsWith("**") && chunk.endsWith("**")
                                            ? <strong key={j} style={{ fontWeight: 700, color: "var(--navy)" }}>{chunk.slice(2, -2)}</strong>
                                            : chunk
                                    )}
                                </p>
                            );

                            return quoteEl ? <Fragment key={i}>{quoteEl}{el}</Fragment> : el;
                        })}
                    </div>

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
                        <Link href="/don" className="btn btn-gold" style={{ whiteSpace: "nowrap" }}>
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
                            <Link href="/blog" className="btn btn-outline" data-sr style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                                Tous les articles <IconArrow size={13} color="var(--navy)" />
                            </Link>
                        </div>
                        <div className="grid-3">
                            {related.map((p: BlogPost) => (
                                <Link key={p.id} href={`/blog/${p.slug}`} className="card blog-card" style={{ display: "flex", flexDirection: "column" }}>
                                    <div className="blog-card-img photo-slot">
                                        {p.cover_image && <img src={p.cover_image} alt={p.title} />}
                                    </div>
                                    <div className="blog-card-body">
                                        {p.category && <span className="tag tag-gold" style={{ alignSelf: "flex-start", fontSize: "0.62rem" }}>{p.category}</span>}
                                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: "var(--navy)", lineHeight: 1.4 }}>{p.title}</h3>
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
