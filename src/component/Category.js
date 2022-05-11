import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../features/categoriesSlice";

function Category() {
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="category">
      {categories &&
        categories.map((category) => {
          return (
            <div key={category.key} className="category__card">
              <div
                className="category__image"
                style={{ order: category?.order % 2 !== 0 ? 1 : 2 }}
              >
                <img
                  src={category?.imageUrl}
                  alt=""
                  height={200}
                  width={200}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div
                className="category__details"
                style={{ order: category?.order % 2 === 0 ? 1 : 2 }}
              >
                <h2>{category?.name}</h2>
                <p>{category?.description}</p>
                <Link
                  to={`/productsListPage/${category.id}`}
                  className="category__button"
                >
                  Explore {category?.key}
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Category;
