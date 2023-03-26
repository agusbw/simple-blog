import supabase from "../db/supabase";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trimOpeningTag } from "../utils/functions";
import useDocumentTitle from "../utils/useDocumentTitle";

export default function CategoriesPage() {
  useDocumentTitle("All Categories");
  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    let { data, error } = await supabase.from("posts").select("categories");
    if (error) {
      console.log(error);
      return;
    }
    const categories = data.map((d) => d.categories);
    const uniqueCategories = [
      ...new Set(categories.reduce((acc, curr) => acc.concat(curr), []).flat()),
    ];
    setCategories(uniqueCategories);
  }

  return (
    <div className="container">
      <h1>📚 Kategori Tulisan</h1>
      <p>
        Berikut adalah list kateogri tulisan yang ada, anda bisa baca tulisan
        berdasarkan kategori!
      </p>
      <div className="categories">
        {categories &&
          categories.map((category) => (
            <Link
              key={category}
              to={`/categories/${trimOpeningTag(category)}`}
              className="category-link"
            >
              {category}
            </Link>
          ))}
      </div>
      <style jsx>{`
        .categories {
          margin-top: 3rem;
        }
      `}</style>
    </div>
  );
}
