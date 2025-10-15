// src/components/CommentList.jsx
export default function CommentList({ comments }) {
  const list = Array.isArray(comments) ? comments : [];
  if (!list.length) {
    return <p style={{ opacity: 0.7, color: "#111" }}>Be the first to comment.</p>;
  }
  return (
    <ul style={{ listStyle: "none", paddingLeft: 0, marginTop: 8, color: "#111" }}>
      {list.map((c) => (
        <li key={c.id} style={{ marginBottom: 4 }}>
          <strong>@{c.author}</strong> {c.text}
        </li>
      ))}
    </ul>
  );
}
