import profilePic from "../assets/profile.webp";
import useWidth, { breakpoint } from "../utils/useWitdh";
import { Link } from "react-router-dom";

export default function Navbar() {
  const width = useWidth();
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <img src={profilePic} alt="profile-picture" />
          </li>
          <li>
            <Link className="primary-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="primary-link" to="/categories">
              categories
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .container {
          padding: 0 ${width <= breakpoint ? "1rem" : "4rem"};
        }

        ul {
          display: flex;
          align-items: center;
          gap: 15px;
          list-style: none;
          padding: 0;
        }

        nav ul li a {
          font-size: 1rem;
        }
        img {
          width: 44px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}
