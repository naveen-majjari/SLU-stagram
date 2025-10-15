// src/components/Composer.jsx
import { useState } from "react";

function makeId() {
  return (crypto?.randomUUID?.() ?? `p_${Date.now()}_${Math.random().toString(36).slice(2)}`);
}

export default function Composer({ setPosts, me = "you" }) {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");

  const canShare = imageUrl.trim().length > 0;

  function submit(e) {
    e.preventDefault();
    const url = imageUrl.trim();
    if (!url) return;

    const newPost = {
      id: makeId(),
      author: me,
      avatar: "https://i.pravatar.cc/100?u=" + encodeURIComponent(me),
      imageUrl: url,
      caption: caption.trim(),
      likedByMe: false,
      likeCount: 0,
      comments: [],
    };

    // Prepend to the feed
    setPosts(prev => [newPost, ...prev]);

    // Reset inputs
    setImageUrl("");
    setCaption("");
  }

  function clear() {
    setImageUrl("");
    setCaption("");
  }

  return (
    <form
      onSubmit={submit}
      onReset={clear}
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 8,
        margin: "12px 0",
        background: "white",
      }}
      aria-label="Create a new post"
    >
      <h3 style={{ marginTop: 0, marginBottom: 8 }}>Create Post</h3>

      <input
        aria-label="Image URL"
        placeholder="Image URL (required)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        style={{
          width: "100%",
          marginBottom: 6,
          color: "#111",
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: 6,
          padding: "6px 8px",
        }}
      />

      <input
        aria-label="Caption"
        placeholder="Caption (optional)"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        style={{
          width: "100%",
          color: "#111",
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: 6,
          padding: "6px 8px",
        }}
      />

      <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
        <button type="submit" disabled={!canShare}>Share</button>
        <button type="reset">Clear</button>
      </div>
    </form>
  );
}
