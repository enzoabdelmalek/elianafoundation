import { notFound } from "next/navigation";
import Link from "next/link";
import { findPost, listPosts, postDate, renderMarkdown } from "@/lib/posts";
import { IconArrow } from "../../components/Icons";
import Photo from "../../components/Photo";
import PostCard from "../../components/PostCard";
import DonCta from "../../components/DonCta";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await findPost(slug);
    if (!post) return { title: "Article introuvable — Eliana Foundation" };
    return {
        title: `${post.title} — Eliana Foundation`,
        description: post.excerpt ?? "Eliana Foundation — cancer pédiatrique en RDC",
        openGraph: { title: post.title, description: post.excerpt ?? undefined, ...(post.cover_url ? { images: [post.cover_url] } : {}) },
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
            <article>
                <header className="container-sm" style={{ paddingTop: "clamp(40px, 7vw, 72px)", paddingBottom: 40 }}>
                    <nav aria-label="Fil d'Ariane" className="muted h-anim" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, fontSize: 14, marginBottom: 28 }}>
                        <Link href="/" className="link-hover">Accueil</Link>
                        <span aria-hidden="true">/</span>
                        <Link href="/actualites" className="link-hover">Actualités</Link>
                        {category && <><span aria-hidden="true">/</span><span>{category}</span></>}
                    </nav>
                    {category && <span className="post-tag h-anim" style={{ display: "block", marginBottom: 14 }}>{category}</span>}
                    <h1 className="h-anim h-a2" style={{ fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.08, marginBottom: 20 }}>{post.title}</h1>
                    {post.excerpt && <p className="lead h-anim h-a3" style={{ marginBottom: 20 }}>{post.excerpt}</p>}
                    <p className="muted h-anim h-a3" style={{ fontSize: 14 }}>{postDate(post)}</p>
                </header>

                {post.cover_url && (
                    <div className="container" style={{ marginBottom: 56 }}>
                        <Photo src={post.cover_url} alt={post.title} style={{ aspectRatio: "16 / 9", maxHeight: 560, width: "100%", borderRadius: 24 }} />
                    </div>
                )}

                <div className="container-sm article-body" style={{ paddingBottom: "clamp(56px, 8vw, 88px)" }}
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content ?? "") }} />
            </article>

            <DonCta />

            {related.length > 0 && (
                <section className="bg-surface" style={{ borderTop: "1px solid var(--line)" }}>
                    <div className="container section">
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 48 }}>
                            <div data-sr>
                                <span className="eyebrow">À lire aussi</span>
                                <h2 className="h2" style={{ fontSize: 40 }}>Autres articles</h2>
                            </div>
                            <Link href="/actualites" className="link-arrow">Toutes les actualités <IconArrow size={16} /></Link>
                        </div>
                        <div className="cards">{related.map(p => <PostCard key={p.id} post={p} />)}</div>
                    </div>
                </section>
            )}
        </>
    );
}
