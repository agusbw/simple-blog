import { useLocation, Link } from "react-router-dom";
import useWidth, { breakpoint } from "../utils/Responsive";

export default function PostPage() {
  const { post } = useLocation().state;
  const width = useWidth();

  const categories = post.categories;
  const list = categories.map((category, index) => {
    return (
      <Link
        key={index}
        to={`/posts/category/${category}`}
        className="category-link"
      >
        {category}
      </Link>
    );
  });

  return (
    <div className="container">
      <div className="info">
        <h1>{post.title}</h1>
        <p>{post.created_at}</p>
      </div>
      <div className="body" dangerouslySetInnerHTML={{ __html: post.body }} />
      <div className="category-list">{list}</div>
      <Link className="primary-link" to="/">
        Back to home...
      </Link>
      <style jsx>{`
        .container {
          padding: ${width <= breakpoint ? "2.2rem 3rem" : "2.5rem 28vw"};
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
          font-size: 35px;
          margin-bottom: 0.3rem;
        }
        .info p {
          color: #eeeeee;
          text-align: center;
        }
        P {
          font-size: 16px;
          line-height: 1.5rem;
        }
        .category-list {
          margin-bottom: 4rem;
        }
      `}</style>
    </div>
  );
}
