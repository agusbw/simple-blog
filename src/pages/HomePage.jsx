import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useDocumentTitle from "../utils/useDocumentTitle";
import { useLoaderData } from "react-router-dom";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const postsLoader = useLoaderData();

  useEffect(() => {
    postsLoader === null ? setPosts([]) : setPosts(postsLoader);
  }, [postsLoader]);

  useDocumentTitle("Home | Blog");

  return (
    <div className="container">
      <div className="section">
        <h1>👋 Halo! Saya Bewe, </h1>
        <p>
          di tempat ini saya menuangkan pikiran-pikiran random yang saya miliki.
          Selamat datang dan selamat membaca!💜
        </p>

        <Link to="/guestbook" className="category-link guest-btn">
          👤guestbook
        </Link>

        <a
          className="primary-link"
          href="https://www.linkedin.com/in/agusbw"
          target="_blank"
        >
          lebih jauh tentangku...
        </a>
      </div>
      <div>
        <h1>📔 List tulisan</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link className="primary-link" to={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        a:not(.guest-btn) {
          display: block;
          margin-top: 1.5rem;
          width: fit-content;
        }
        ul {
          list-style: none;
          padding: 0;
        }

        .section {
          margin-bottom: 3rem;
        }
      `}</style>
    </div>
  );
}
