import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Overlay from "../common/Overlay/Overlay.js";
import API from "../common/Api/Api";


function Product() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetProductById(id);
  }, [id]);

  async function fetProductById(id) {
    try {
      setIsLoading(true);
      let result = await axios.get(`${API}${id}`);

      setProduct(result.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);

      setIsLoading(false);
    }
  }

  async function deleteProductById(id) {
    const lastConfirmationToProcede = window.confirm(
      "Are you sure you want to delete this product? If Yes, accept!"
    );

    if (lastConfirmationToProcede) {
      try {
        let result = await axios.delete(`${API}${id}`);
        const { name } = result.data;
        alert(`${name} has been Deleted successfully!`);
        navigate("/products");
      } catch (error) {
        return error;
      }
    }
  }

  return (
    <Overlay isLoading={isLoading}>
      <div className="container">
        <h2 className="product-title">
          {product.name} {product.type}
        </h2>
        <br />
        {Product && (
          <div className="product-div">
            <div>
              <img src={product.url} alt={product.name} />
            </div>
            <br />
            <div className="description-div">
              <p> Description:</p> <span>{product.description}</span>
              <br />
              <p>
                {" "}
                In Stock: <span>{product.in_stock ? "✔️" : "✖️"} </span>{" "}
                Favorite: <span>{product.is_favorite ? "🩷" : "🩶"}</span>
              </p>
            </div>
            <div className="button-div">
              <button onClick={() => navigate("/Products")}>
                Back To Products
              </button>
              <Link to={`/products/${id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => deleteProductById()}>Delete</button>
            </div>
          </div>
        )}
      </div>
    </Overlay>
  );
}

export default Product;
