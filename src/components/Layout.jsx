import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import useWidth, { breakpoint } from "../utils/useWitdh";

export default function Layout() {
  const width = useWidth();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <style jsx global>{`
        body {
          background: linear-gradient(
            180deg,
            #2d3142 42.19%,
            rgba(33, 55, 68) 100%
          );
          background-repeat: no-repeat;
          position: relative;
          min-height: 100vh;
          font-family: "Montserrat", sans-serif;
          color: white;
        }

        a {
          color: white;
        }

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
          background-color: rgba(53, 125, 154, 0.2);
        }

        .container {
          padding: ${width <= breakpoint
            ? ".2rem 1rem 7rem 1rem"
            : "2.5rem 8rem"};
        }

        section {
          margin-bottom: 4rem;
        }

        li {
          margin-bottom: 1rem;
        }

        .alert {
          margin-bottom: 1rem;
          padding: 0.5rem;
          border-radius: 0.25rem;
        }

        .alert-success {
          background-color: #d4edda;
          border: 1px solid #c3e6cb;
        }

        .alert-danger {
          background-color: #f8d7da;
          border: 1px solid #f5c6cb;
        }
      `}</style>
    </>
  );
}
