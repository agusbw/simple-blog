import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useWindowSize, { breakpoint } from "../utils/Responsive";
import supabase from "../db/supabase";

export default function HomePage() {
  const width = useWindowSize();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from("posts").select();
    setPosts(data);
  }

  return (
    <div className="container">
      <section>
        <h1>👋Halo! Saya Bewe, </h1>
        <p>
          di tempat ini saya menuangkan pikiran-pikiran random yang saya miliki.
          Selamat datang dan selamat membaca! 💜
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
        <h1>📔List tulisan</h1>
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
      <style jsx>{`
        .container {
          padding: ${width <= breakpoint ? "2.2rem 2rem" : "4.5rem 8rem"};
        }
        h1 {
          font-weight: 600;
          font-size: 25px;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.1rem;
          line-height: 1.4rem;
          margin-bottom: 1.5rem;
        }
        section {
          margin-bottom: 4rem;
        }
        li {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
