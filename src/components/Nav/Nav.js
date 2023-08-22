import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


function Nav() {
  return (
    <div className="nav bg-success bg-opacity-50 fs-1 text ">
      <p>
        <Link className="nav-link text-white ms-5" to="/">
          Home
        </Link>
      </p>
      <p>
        <Link className="nav-link text-white mx-5" to="/products">
          All Products
        </Link>
      </p>
      <p>
        <Link
          className="nav-link text-white position-absolute top-0 end-0 me-5"
          to="/products/new">
          Add Product
        </Link>
      </p>
    </div>
  );
}

export default Nav;
