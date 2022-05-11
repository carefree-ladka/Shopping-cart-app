import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsSlice";
import { fetchCategories } from "../features/categoriesSlice";
import { NavLink } from "react-router-dom";
import Products from "./Products";

function ProductListPage() {
  const { categories } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="products__list">
      <div className="product__category">
        {categories &&
          categories.map((category) => (
            <>
              <NavLink
                key={category.id}
                to={`/productsListPage/${category.id}`}
                className={({ isActive }) =>
                  isActive ? "active link" : "link"
                }
              >
                {category.name}
              </NavLink>
              <hr />
            </>
          ))}
      </div>
      <div className="product__detail">
        <Products products={products} />
      </div>
    </div>
  );
}

export default ProductListPage;
