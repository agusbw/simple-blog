import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Layout from "./components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage />, index: true },
        {
          path: "/posts/:id",
          element: <PostPage />,
          index: true,
        },
        {
          path: "/posts/category/:category",
          // element: <CategoryPage />,
          // index: true,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
