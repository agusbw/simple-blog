import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import useWidth, { breakpoint } from "../utils/useWitdh";

export default function Layout({ children }) {
  const width = useWidth();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <style jsx global>{`
        .primary-link {
          position: relative;
          text-decoration: none;
          padding-bottom: 2px;
        }
        .primary-link::after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1.7px;
          background-color: rgb(51, 192, 187);
        }
        .primary-link:hover:after {
          height: 20px;
          transition: height 0.3s;
          background-color: rgba(53, 125, 154, 0.2);
        }

        .category-link {
          padding: 3px 5px;
          margin-right: 7px;
          background-color: #2f4858;
          text-decoration: none;
          border-radius: 5px;
        }
        .category-link:hover {
          background-color: #2c3b45;
        }

        .container {
          padding: ${width <= breakpoint ? "2.2rem 2rem" : "4.5rem 8rem"};
        }
        h1 {
          font-weight: 600;
          font-size: ${width <= breakpoint ? "24px" : "40px"};
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
    </>
  );
}
