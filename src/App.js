import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./components/common/Spinner/Spinner.js";

const Home = React.lazy(() => import("./components/Home/Home"));
const Nav = React.lazy(() => import("./components/Nav/Nav"));
const Products = React.lazy(() => import("./components/Products/Products"));
const Product = React.lazy(() => import("./components/Product/Product"));
const NewProduct = React.lazy(() =>
  import("./components/NewProduct/NewProduct")
);
const EditProduct = React.lazy(() =>
  import("./components/EditProduct/EditProduct")
);


function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Spinner />}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<Product />}></Route>
            <Route path="/products/:id/edit" element={<EditProduct />}></Route>
            <Route path="/products/new" element={<NewProduct />}></Route>
            <Route path="/404" element={<h1>404: Page Not Found!</h1>}></Route>
          </Routes>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
