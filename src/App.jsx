import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import CategoriesPage from "./pages/CategoriesPage";
import GuestbookPage from "./pages/GuestbookPage";
import CategoryPage from "./pages/CategoryPage";
import Layout from "./components/Layout";
import supabase from "./db/supabase";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          index: true,
          loader: async () => {
            const { data, error } = await supabase
              .from("posts")
              .select("id,title,slug")
              .order("inserted_at", { ascending: false });
            if (error || !data) return null;
            return data;
          },
        },

        {
          path: "/posts/:slug",
          element: <PostPage />,
          index: true,
          loader: async ({ params }) => {
            let { data, error } = await supabase
              .from("posts")
              .select("*")
              .eq("slug", params.slug);
            if (error || !data[0]) return null;
            return data[0];
          },
        },
        {
          path: "categories",
          children: [
            {
              element: <CategoriesPage />,
              index: true,
              loader: async () => {
                let { data, error } = await supabase
                  .from("posts")
                  .select("categories");
                if (error || !data) return null;
                const categories = data.map((d) => d.categories);
                const uniqueCategories = [
                  ...new Set(
                    categories
                      .reduce((acc, curr) => acc.concat(curr), [])
                      .flat()
                  ),
                ];
                return uniqueCategories;
              },
            },
            {
              path: ":category",
              element: <CategoryPage />,
              index: true,
              loader: async ({ params }) => {
                const category = ["#" + params.category];
                let { data, error } = await supabase
                  .from("posts")
                  .select("id,title,slug")
                  .contains("categories", category)
                  .order("inserted_at", { ascending: false });
                if (error || data.length < 0) return null;
                return data;
              },
            },
          ],
        },
        {
          path: "/guestbook",
          element: <GuestbookPage />,
          index: true,
          loader: async () => {
            let { data, error } = await supabase
              .from("guests")
              .select("*")
              .order("inserted_at", { ascending: false });
            if (error || !data) return null;
            return data;
          },
          action: async ({ request }) => {
            let formData = await request.formData();
            let name = formData.get("name");
            let email = formData.get("email");
            let message = formData.get("message");
            const { status } = await supabase
              .from("guests")
              .insert([{ name, email, message }]);
            if (status === 201) {
              return {
                message: "Pesan berhasil dikirim!",
                isSent: true,
              };
            }
            return {
              message: "Pesan gagal dikirim!",
              isSent: false,
            };
          },
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
