import { Link, useNavigate, useParams, useLoaderData } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/functions";
import { useState, useEffect } from "react";
import useDocumentTitle from "../utils/useDocumentTitle";

export default function CategoryPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState();
  const postsLoader = useLoaderData();

  useDocumentTitle(`Post on ${capitalizeFirstLetter(params.category)}`);

  useEffect(() => {
    postsLoader.length <= 0 ? navigate("/") : setPosts(postsLoader);
  }, [postsLoader]);

  return (
    <div className="container">
      <h1>🛝 {capitalizeFirstLetter(params.category)}</h1>
      <p>
        Berikut adalah tulisan saya pada kategori {params.category}, selamat
        membaca!💜
      </p>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <Link className="primary-link" to={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
        }
      `}</style>
    </div>
  );
}
