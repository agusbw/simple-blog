import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
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
      `}</style>
    </>
  );
}
