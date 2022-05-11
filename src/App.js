//Built-in imports
import { Routes, Route } from "react-router-dom";

//Components
import Layout from "./Layout";
import ProductListPage from "./component/ProductListPage";
import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./component/Home";
import Products from "./component/Products";
import Cart from "./cart/Cart";
import NoMatch from "./component/404";

//Style
import "./app.scss";
import Footer from "./header/Footer";

function App() {
  return (
    <Layout>
      <div className="container">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productsListPage" element={<ProductListPage />}>
              <Route path=":categoryId" element={<Products />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/signIn" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Layout>
  );
}

export default App;
