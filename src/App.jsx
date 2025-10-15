// src/App.jsx
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { seedPosts } from "./data/posts";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Composer from "./components/Composer";
import Profile from "./components/Profile";

const STORAGE_KEY = "mini-insta-posts";

export default function App() {
  // 1) Read once, synchronously, from localStorage:
  const [posts, setPosts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const parsed = saved ? JSON.parse(saved) : null;
      return Array.isArray(parsed) ? parsed : seedPosts;
    } catch {
      return seedPosts;
    }
  });

  // 2) Save whenever posts change (idempotent even if StrictMode runs twice)
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    } catch (err) {
      // optional: console.warn("Failed to save posts:", err);
    }
  }, [posts]);

  return (
    <>
      <Navbar title="SLU-stagram" />
      <main className="container" style={{ maxWidth: 720, margin: "0 auto" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Composer setPosts={setPosts} me="you" />
                <Feed posts={posts} setPosts={setPosts} />
              </>
            }
          />
          <Route path="/u/:handle" element={<Profile posts={posts} setPosts={setPosts} />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </main>
    </>
  );
}
