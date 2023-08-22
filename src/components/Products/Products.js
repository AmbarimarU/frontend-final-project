import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import { Link } from "react-router-dom";
import Overlay from "../common/Overlay/Overlay.js";
import API from "../common/Api/Api";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      let productsData = await axios.get(`${API}`);
      setProducts(productsData.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);



  return (
    <Overlay isLoading={isLoading}>
      <div className="products-div">
        <h1 className="title">All Products</h1>
        <div>
          {products.map((product) => {
            return (
              <div className="container text-center" key={product.id}>
                <div>
                  <div>
                    {" "}
                    <Link to={`/products/${product.id}`}>
                      <img src={product.url} alt={product.name} />
                    </Link>
                  </div>

                  <div>
                    <h3>{product.name}</h3>
                    <h4>In Stock {product.in_stock ? "✔️" : "✖️"}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Overlay>
  );
}

export default Products;
