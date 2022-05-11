import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const h2Style = {
  fontSize: "16px",
  marginBottom: "1rem",
  minHeight: "80px",
};
function Products({ products }) {
  const [productsFiltered, setProductsFiltered] = useState(false);
  const [sortedProducts, setSortedProducts] = useState([]);
  let { categoryId } = useParams();
  const dispacth = useDispatch();

  const sortById = useCallback(() => {
    if (categoryId) {
      setSortedProducts(
        products.filter((product) => product.category === categoryId)
      );
      setProductsFiltered((productsFiltered) => !productsFiltered);
    }
  }, [products, categoryId]);

  useEffect(() => {
    sortById();
    return () => sortById();
  }, [sortById]);

  return (
    <>
      <div className="products">
        {(productsFiltered ? sortedProducts : products).map((product) => (
          <div key={product.id} className="product__card">
            <div>
              <h2 style={h2Style}>{product.name}</h2>
            </div>
            <div className="product">
              <div className="product__image">
                <img
                  src={product.imageURL}
                  alt={product.name}
                  height="200"
                  width="200"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="product__description">
                {product.description.slice(0, 95)}
              </p>
            </div>
            <div className="product__buy">
              <span
                className="product__price"
                style={{
                  fontWeight: "bold",
                }}
              >
                MRP Rs.{product.price}
              </span>
              <button
                className="product__buy-now"
                onClick={() => dispacth(addToCart(product))}
              >
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
