import { MetadataRoute } from "next";
import { listPosts } from "@/lib/posts";

const base = "https://www.elianafoundation.org";

export const revalidate = 3600;

// Dates de modification seulement quand elles sont vraies (articles, page Actualités) : une date « maintenant » à chaque
// régénération apprend à Google à ignorer le champ.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await listPosts();
    const latest = posts[0]?.published_at ?? posts[0]?.created_at;
    return [
        { url: base, changeFrequency: "monthly", priority: 1 },
        { url: `${base}/actualites`, ...(latest ? { lastModified: latest } : {}), changeFrequency: "weekly", priority: 0.8 },
        ...posts.map(p => ({ url: `${base}/actualites/${p.slug}`, lastModified: p.published_at ?? p.created_at, priority: 0.7 })),
        { url: `${base}/don`, changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.8 },
    ];
}
