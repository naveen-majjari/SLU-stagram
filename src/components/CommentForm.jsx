// src/components/CommentForm.jsx
import { useState } from "react";

function makeId() {
  // Fallback in case crypto.randomUUID isn't available
  return (crypto?.randomUUID?.() ?? `c_${Date.now()}_${Math.random().toString(36).slice(2)}`);
}

export default function CommentForm({ postId, setPosts, me = "you" }) {
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return; // ignore empty
    console.log("[CommentForm] New comment:", { postId, author: me, text: t });
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== postId) return p;
        const next = {
          ...p,
          comments: [...(p.comments ?? []), { id: makeId(), author: me, text: t }],
        };
        return next;
      })
    );
    setText(""); // reset
  }

  function onReset() {
    setText("");
  }

  return (
    <form onSubmit={onSubmit} onReset={onReset} style={{ display: "flex", gap: 6, marginTop: 8 }}>
      <input
        aria-label="Add a comment"
        placeholder="Add a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ flex: 1 }}
      />
      <button type="submit" aria-label="Post comment" disabled={!text.trim()}>
        Post
      </button>
      <button type="reset" aria-label="Clear comment">Clear</button>
    </form>
  );
}
