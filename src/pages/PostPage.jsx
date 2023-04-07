import { Link, useNavigate, useLoaderData } from "react-router-dom";
import useWidth, { breakpoint } from "../utils/useWitdh";
import useDocumentTitle from "../utils/useDocumentTitle";
import { trimOpeningTag, formatDate } from "../utils/functions";
import { useState, useEffect } from "react";
import style from "./PostPage.module.css";

export default function PostPage() {
  const navigate = useNavigate();
  const width = useWidth();
  const [post, setPost] = useState({});
  const postLoader = useLoaderData();

  useEffect(() => {
    if (postLoader === null) {
      navigate("/");
    } else {
      setPost(() => {
        return {
          ...postLoader,
          inserted_at: formatDate(postLoader.inserted_at),
          updated_at: formatDate(postLoader.updated_at),
        };
      });
    }
  }, [postLoader]);

  useDocumentTitle(`${post.title}`);

  return (
    <div className="container">
      <div className="info">
        <h1>{post.title}</h1>
        <p>
          Diposting {post.inserted_at} ,{" "}
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
        <br />
        <p>Terakhir diedit: {post.updated_at}</p>
        <Link className="primary-link" to="/">
          Back to home...
        </Link>
      </div>
      <style jsx>{`
        .container {
          padding: ${width <= breakpoint ? "1rem 1rem" : "1.5rem 24vw"};
        }

        .body {
          margin-bottom: 3rem;
        }

        .info {
          text-align: center;
          margin-bottom: 3rem;
        }

        .info h1 {
          font-size: ${width <= breakpoint ? "1.5rem" : "2rem"};
        }

        .category-list {
          margin: 2rem 0 4rem 0;
        }
      `}</style>
    </div>
  );
}
