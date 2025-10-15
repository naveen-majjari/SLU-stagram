import { useCallback } from "react";
import { Link } from "react-router-dom"; 
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

export default function PostCard({ post, setPosts }) {
  const likeCount = Number(post.likeCount) || 0;
  const toggleLike = useCallback(() => {
    setPosts(prev =>
      prev.map(p => {
        if (p.id !== post.id) return p;
        const nextLiked = !p.likedByMe;
        const nextCount = (Number(p.likeCount) || 0) + (nextLiked ? 1 : -1);
        return { ...p, likedByMe: nextLiked, likeCount: nextCount };
      })
    );
  }, [post.id, setPosts]);

  return (
    <article
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        overflow: "hidden",
        margin: "12px 0",
        background: "white"
      }}
      aria-label={`post by ${post.author}`}
    >
      <header style={{ display: "flex", alignItems: "center", gap: 8, padding: 8 }}>
        <img
          src={post.avatar}
          alt={`${post.author} avatar`}
          width="36"
          height="36"
          style={{ borderRadius: "50%" }}
        />
        <strong style={{ color: "#111" }}>
          <Link
            to={`/u/${post.author}`}
            style={{ color: "inherit", textDecoration: "none" }}
            aria-label={`View @${post.author}'s profile`}
          >
            @{post.author}
          </Link>
        </strong>
      </header>

      <img
        src={post.imageUrl}
        alt={post.caption ? post.caption : `Photo by @${post.author}`}
        style={{ width: "100%", display: "block" }}
      />

      <div style={{ padding: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "green" }}>
          <button
            onClick={toggleLike}
            aria-pressed={post.likedByMe}
            aria-label={post.likedByMe ? "Unlike" : "Like"}
            title={post.likedByMe ? "Unlike" : "Like"}
            // make the heart/button text red when liked
            style={{ color: post.likedByMe ? "red" : "inherit" }}
          >
            {post.likedByMe ? "♥" : "♡"} Like
          </button>
          <span>{post.likeCount} likes</span>
        </div>

        {post.caption && (
          <p style={{ marginTop: 8 }}>
            <strong>@{post.author}</strong> {post.caption}
          </p>
        )}

        {/* Part 4: comments */}
        <CommentList comments={post.comments ?? []} />
        <CommentForm postId={post.id} setPosts={setPosts} />
      </div>
    </article>
  );
}
