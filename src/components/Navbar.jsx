// src/components/Navbar.jsx
function InstaGlyph({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="5" fill="white" />
      <circle cx="17" cy="7" r="1.5" fill="white" />
    </svg>
  );
}
export default function Navbar({ title = "Mini-Insta" }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "white",
        borderBottom: "1px solid #eee",
        padding: "10px 16px",
      }}
      aria-label="app navigation"
    >
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <strong style={{ fontSize: 18, color: "#111"}}>{title}</strong>

        {/* actions */}
        <div style={{ display: "flex", gap: 8 }}>
          <button
            aria-label="Upload (placeholder)"
            disabled
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: "6px 10px",
            }}
          >
            Upload
          </button>

          <button
            aria-label="Messages (placeholder)"
            disabled
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: "6px 10px",
            }}
          >
            MSG
          </button>
        </div>
      </div>
    </header>
  );
}
