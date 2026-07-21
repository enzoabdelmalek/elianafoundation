import { MetadataRoute } from "next";

const base = "https://www.elianafoundation.org";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return [
        { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
        { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ];
}
