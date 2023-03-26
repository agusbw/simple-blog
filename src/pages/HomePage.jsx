import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import supabase from "../db/supabase";
import useDocumentTitle from "../utils/useDocumentTitle";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  useDocumentTitle("Home | Blog");

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data, error } = await supabase.from("posts").select("id,title");
    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
    setPosts(data);
  }

  return (
    <div className="container">
      <section>
        <h1>👋 Halo! Saya Bewe, </h1>
        <p>
          di tempat ini saya menuangkan pikiran-pikiran random yang saya miliki.
          Selamat datang dan selamat membaca!💜
        </p>
        <a
          className="primary-link"
          href="https://www.linkedin.com/in/agusbw"
          target="_blank"
        >
          lebih jauh tentangku...
        </a>
      </section>
      <section>
        <h1>📔 List tulisan</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link className="primary-link" to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
