import { Link, useParams, useNavigate } from "react-router-dom";
import useWidth, { breakpoint } from "../utils/useWitdh";
import useDocumentTitle from "../utils/useDocumentTitle";
import { trimOpeningTag } from "../utils/functions";
import { useState, useEffect } from "react";
import style from "./PostPage.module.css";
import supabase from "../db/supabase";

const locale = "id-Id";
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function PostPage() {
  const navigate = useNavigate();
  const width = useWidth();
  const params = useParams();
  const [post, setPost] = useState({});
  useDocumentTitle(`${post.title}`);

  useEffect(() => {
    getPost();
  }, []);

  async function getPost() {
    let { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", params.id);

    if (error) {
      console.log(error);
      return;
    }
    if (data.length <= 0) navigate("/");

    setPost(() => {
      return {
        ...data[0],
        updated_at: new Date(data[0].updated_at).toLocaleDateString(
          locale,
          options
        ),
        inserted_at: new Date(data[0].inserted_at).toLocaleDateString(
          locale,
          options
        ),
      };
    });
  }

  return (
    <div className="container">
      <div className="info">
        <h1>{post.title}</h1>
        <p>
          {post.updated_at != post.inserted_at
            ? `Diedit ${post.updated_at}`
            : `Diposting ${post.inserted_at}`}
          ,{" "}
          <a
            href="https://twitter.com/agus_bw83"
            target="_blank"
            className="primary-link"
          >
            @agus_bw
          </a>
        </p>
      </div>
      <div
        className={style.body}
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
      <div className="category-list">
        {post.categories &&
          post.categories.map((category) => (
            <Link
              key={category}
              to={`/categories/${trimOpeningTag(category)}`}
              className="category-link"
            >
              {category}
            </Link>
          ))}
        <br /> <br /> <br />
        <Link className="primary-link" to="/">
          Back to home...
        </Link>
      </div>

      <style jsx>{`
        .container {
          padding: ${width <= breakpoint ? "2.2rem 3rem" : "2.5rem 28vw"};
        }

        .body h1 {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .body {
          margin-bottom: 3rem;
        }

        .info {
          text-align: center;
          margin-bottom: 3rem;
        }
        h1 {
          font-weight: 600;
          font-size: ${width <= breakpoint ? "28px" : "35px"};
          margin-bottom: 0.3rem;
        }
        .info p {
          color: #eeeeee;
          font-size: 14px;
          text-align: center;
        }

        p {
          font-size: 16px;
          line-height: 1.5rem;
        }
        .category-list {
          margin: 2rem 0 4rem 0;
        }
      `}</style>
    </div>
  );
}
