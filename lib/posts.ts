import { cache } from "react";
import { createClient } from "@supabase/supabase-js";

/**
 * Actualités publiées par l'association depuis le dashboard VWA (table `blog_posts` de la base V2),
 * lues côté serveur avec la clé publique : la RLS ne laisse voir que les articles publiés.
 * Mêmes variables d'environnement que les sites du monorepo (@vwa/site-kit).
 */
export type Post = {
    id: string;
    slug: string;
    title: string;
    excerpt: string | null;
    content: string | null;
    cover_url: string | null;
    tags: string[];
    published_at: string | null;
    created_at: string;
};

const LIST_FIELDS = "id, slug, title, excerpt, cover_url, tags, published_at, created_at";
const BUSINESS_ID = process.env.BUSINESS_ID;

function db() {
    const url = process.env.VWA_SUPABASE_URL;
    const key = process.env.VWA_SUPABASE_ANON_KEY;
    if (!url || !key || !BUSINESS_ID) {
        console.error("[actualités] VWA_SUPABASE_URL, VWA_SUPABASE_ANON_KEY ou BUSINESS_ID manquant");
        return null;
    }
    return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

/** Articles publiés, du plus récent au plus ancien. */
export async function listPosts(limit?: number): Promise<Post[]> {
    const client = db();
    if (!client) return [];
    let q = client
        .from("blog_posts")
        .select(LIST_FIELDS)
        .eq("business_id", BUSINESS_ID!)
        .eq("status", "published")
        .order("published_at", { ascending: false });
    if (limit) q = q.limit(limit);
    const { data, error } = await q;
    if (error) console.error("[actualités] liste :", error.message);
    return ((data ?? []) as Omit<Post, "content">[]).map((p) => ({ ...p, content: null }));
}

/** Un article publié par son slug (mis en cache pour la requête : métadonnées et page le lisent). */
export const findPost = cache(async (slug: string): Promise<Post | null> => {
    const client = db();
    if (!client) return null;
    const { data, error } = await client
        .from("blog_posts")
        .select(`${LIST_FIELDS}, content`)
        .eq("business_id", BUSINESS_ID!)
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();
    if (error) console.error("[actualités] article :", error.message);
    return (data as Post | null) ?? null;
});

/** « 24 août 2026 ». */
export const postDate = (p: Post) =>
    new Date(p.published_at ?? p.created_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Paris" });

const escapeHtml = (v: string) => v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * Markdown du dashboard en HTML, copie de `renderMarkdown` (@vwa/site-kit/blog.ts) : tout est échappé d'abord,
 * puis seules quelques balises sont produites (##, ###, paragraphes, listes, liens, gras, italique, citations).
 */
export function renderMarkdown(source: string): string {
    const inline = (t: string) =>
        t
            .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)/g, (_m, label: string, href: string) =>
                `<a href="${href}"${href.startsWith("http") ? ' target="_blank" rel="noreferrer noopener"' : ""}>${label}</a>`)
            .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
            .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
    return escapeHtml(source.replace(/\r\n/g, "\n"))
        .split(/\n{2,}/)
        .map((b) => b.trim())
        .filter(Boolean)
        .map((b) => {
            if (b.startsWith("### ")) return `<h3>${inline(b.slice(4))}</h3>`;
            if (b.startsWith("## ")) return `<h2>${inline(b.slice(3))}</h2>`;
            if (b.startsWith("&gt; ")) return `<blockquote>${inline(b.split("\n").map((l) => l.replace(/^&gt;\s?/, "")).join(" "))}</blockquote>`;
            if (/^[-*]\s/.test(b)) return `<ul>${b.split("\n").filter((l) => /^[-*]\s/.test(l)).map((l) => `<li>${inline(l.replace(/^[-*]\s+/, ""))}</li>`).join("")}</ul>`;
            return `<p>${inline(b.replace(/\n/g, "<br />"))}</p>`;
        })
        .join("\n");
}
