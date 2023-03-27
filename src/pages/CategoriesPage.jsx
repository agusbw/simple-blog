import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trimOpeningTag } from "../utils/functions";
import useDocumentTitle from "../utils/useDocumentTitle";
import { useLoaderData } from "react-router-dom";

export default function CategoriesPage() {
  useDocumentTitle("All Categories");
  const [categories, setCategories] = useState();
  const categoriesLoader = useLoaderData();

  useEffect(() => {
    categoriesLoader && setCategories(categoriesLoader);
  }, [categoriesLoader]);

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
