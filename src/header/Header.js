import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getTotals } from "../features/cartSlice";

function Header() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  return (
    <header className="head">
      <nav className="header">
        <div className="navbar">
          <div>
            <img
              src="/logo.png"
              alt="Sabka Bazaar logo"
              className="logo"
              height={100}
              width={200}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <ul className="links">
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/productsListPage" className="link">
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navabar__right">
          <span className="sm-nav-links">
            <ul className="links">
              <li>
                <NavLink
                  to="/signIn"
                  className={({ isActive }) =>
                    isActive ? "active link" : "link"
                  }
                >
                  SignIn
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={(isActive) => (isActive ? "active link" : "link")}
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </span>
          <div className="header__cart">
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <div className="toCart-link">
                <div>
                   <svg
                    style={{ height: "40", width: "40" }}
                    version="1.1"
                    id="Layer_1"
                    focusable="false"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                  </svg> 
                </div>
                <div className="header__cart__items">
                  {cart.cartTotalQuantity} items
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
