import { MetadataRoute } from "next";
import { listPosts } from "@/lib/posts";

const base = "https://www.elianafoundation.org";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();
    const posts = await listPosts();
    return [
        { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
        { url: `${base}/actualites`, lastModified: posts[0]?.published_at ?? now, changeFrequency: "weekly", priority: 0.8 },
        ...posts.map(p => ({ url: `${base}/actualites/${p.slug}`, lastModified: p.published_at ?? p.created_at, priority: 0.7 })),
        { url: `${base}/don`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ];
}
