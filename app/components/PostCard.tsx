import Link from "next/link";
import { postDate, type Post } from "@/lib/posts";
import Photo from "./Photo";

export default function PostCard({ post }: { post: Post }) {
    return (
        <Link href={`/actualites/${post.slug}`} className="post-card">
            <Photo src={post.cover_url} alt={post.title} />
            {post.tags[0] && <span className="post-tag">{post.tags[0]}</span>}
            <h3 className="post-title">{post.title}</h3>
            {post.excerpt && <p className="muted" style={{ fontSize: 15 }}>{post.excerpt}</p>}
            <span className="muted" style={{ fontSize: 13 }}>{postDate(post)}</span>
        </Link>
    );
}
