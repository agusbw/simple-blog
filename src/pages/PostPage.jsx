import { Link, useNavigate, useLoaderData } from "react-router-dom";
import useWidth, { breakpoint } from "../utils/useWitdh";
import useDocumentTitle from "../utils/useDocumentTitle";
import { trimOpeningTag } from "../utils/functions";
import { useState, useEffect } from "react";
import style from "./PostPage.module.css";

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
  const [post, setPost] = useState({});
  const postLoader = useLoaderData();

  useEffect(() => {
    if (postLoader === null) {
      navigate("/");
    } else {
      setPost(() => {
        return {
          ...postLoader,
          inserted_at: new Date(postLoader.inserted_at).toLocaleDateString(
            locale,
            options
          ),
          updated_at: new Date(postLoader.updated_at).toLocaleDateString(
            locale,
            options
          ),
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
