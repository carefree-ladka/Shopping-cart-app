import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  let navigate = useNavigate();

  return (
    <div>
      <section>
        <div className="cart">
          <header className="cart__header">
            <h2>My Cart ({cartTotalQuantity} item)</h2>
            <span
              className="cart-close-button"
              aria-label="close button"
              role="button"
              onClick={() => navigate("/")}
            >
              &#215;
            </span>
          </header>
        </div>
        <CartItem />
      </section>
    </div>
  );
}

export default Cart;
