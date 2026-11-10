import Link from "next/link";
import { listPosts, postDate } from "@/lib/posts";
import { IconArrow, IconButterfly } from "../components/Icons";
import Photo from "../components/Photo";
import PostCard from "../components/PostCard";
import DonCta from "../components/DonCta";

export const revalidate = 60;

export const metadata = {
    title: "Actualités — Eliana Foundation",
    description: "Actualités, articles de sensibilisation et ressources sur le cancer pédiatrique en RDC.",
};

export default async function ActualitesPage() {
    const posts = await listPosts();
    const [featured, ...rest] = posts;

    return (
        <>
            <section className="container" style={{ paddingTop: "clamp(48px, 8vw, 88px)", paddingBottom: 56 }}>
                <span className="eyebrow h-anim">Actualités</span>
                <h1 className="display h-anim h-a2" style={{ maxWidth: 820, margin: "8px 0 20px" }}>
                    Sensibilisation &amp; <em className="accent">ressources</em>
                </h1>
                <p className="lead h-anim h-a3" style={{ maxWidth: 620 }}>
                    Articles, témoignages et actualités sur le cancer pédiatrique en RDC et les actions d&apos;Eliana Foundation.
                </p>
            </section>

            {!featured ? (
                <section className="container" style={{ paddingBottom: "clamp(72px, 10vw, 112px)" }}>
                    <div className="card" style={{ textAlign: "center" }}>
                        <IconButterfly size={64} color="var(--ink)" fill="var(--sky)" />
                        <h2 style={{ fontSize: 32, margin: "20px 0 12px" }}>Bientôt disponible</h2>
                        <p className="muted">Nous préparons des articles et des ressources. Revenez bientôt.</p>
                    </div>
                </section>
            ) : (
                <>
                    {/* À la une */}
                    <section className="container" style={{ paddingBottom: rest.length ? 72 : "clamp(72px, 10vw, 112px)" }}>
                        <Link href={`/actualites/${featured.slug}`} className="post-card split" style={{ flexDirection: "row", gap: "32px 56px", borderTop: "1px solid var(--line)", paddingTop: 48 }}>
                            <Photo src={featured.cover_url} alt={featured.title} style={{ aspectRatio: "4 / 3", borderRadius: 20 }} />
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                <span className="post-tag">{featured.tags[0] ?? "À la une"}</span>
                                <h2 className="post-title" style={{ fontSize: "clamp(30px, 3.4vw, 44px)", lineHeight: 1.12 }}>{featured.title}</h2>
                                {featured.excerpt && <p className="lead">{featured.excerpt}</p>}
                                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                                    <span className="muted" style={{ fontSize: 14 }}>{postDate(featured)}</span>
                                    <span className="link-arrow" style={{ color: "var(--accent-strong)" }}>Lire l&apos;article <IconArrow size={16} /></span>
                                </div>
                            </div>
                        </Link>
                    </section>

                    {rest.length > 0 && (
                        <section className="container" style={{ paddingBottom: "clamp(72px, 10vw, 112px)" }}>
                            <h2 className="h2" style={{ fontSize: 32, marginBottom: 40 }} data-sr>Toutes les publications</h2>
                            <div className="cards">{rest.map(p => <PostCard key={p.id} post={p} />)}</div>
                        </section>
                    )}
                </>
            )}

            <DonCta />
        </>
    );
}
