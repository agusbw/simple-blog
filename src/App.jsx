import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
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
          path: "categories",
          children: [
            { element: <CategoriesPage />, index: true },
            { path: ":category", element: <CategoryPage /> },
          ],
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
