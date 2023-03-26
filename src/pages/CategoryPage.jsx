import supabase from "../db/supabase";
import { useParams, Link, useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/functions";
import { useState, useEffect } from "react";
import useDocumentTitle from "../utils/useDocumentTitle";

export default function CategoryPage() {
  const params = useParams();
  useDocumentTitle(`Post on ${capitalizeFirstLetter(params.category)}`);

  const navigate = useNavigate();
  const [posts, setPosts] = useState();
  useEffect(() => {
    getPostsByCategory();
  }, []);

  async function getPostsByCategory() {
    const category = ["#" + params.category];
    let { data, error } = await supabase
      .from("posts")
      .select("id,title")
      .contains("categories", category);
    if (error) {
      console.log(error);
      return;
    }

    if (data.length <= 0) navigate("/");
    setPosts(data);
  }

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
              <Link className="primary-link" to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
