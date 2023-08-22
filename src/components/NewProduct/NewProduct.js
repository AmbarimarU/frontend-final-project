import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './NewProduct.css';
import API from "../common/Api/Api";


function NewProduct() {


  const [ product, setProduct ] = useState({
    name: '',
    url: '',
    type: '',
    description: '',
    rating: '',
    is_favorite: false,
    in_stock: false,

  });

  const navigate = useNavigate();

  function checkBoxHandler(event) {
    setProduct({...product, [event.target.id]: event.target.checked});
    console.log(product);
  };

  function textChangeHandler(event){
    setProduct({...product, [event.target.id]: event.target.value});

  };

  async function submitHandler(event){
    event.preventDefault();
    try {
      
      let result = await axios.post(`${API}`, product);
      alert(`${product.name} added successfully!`);
      navigate(`/products/${result.data.id}`);
    } catch (error) {
      return error;
    }
  }


  return (
    <div>
      <h1>Add Product Information</h1>

      <div>
        <div className="form-div">
          <form onSubmit={submitHandler}>
            <div className="product-input">
              <label htmlFor="name">
                <span>Name:</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={product.name}
                onChange={textChangeHandler}
                required
              />
            </div>

            <div className="product-input">
              <label htmlFor="image">
                <span>Photo:</span>
              </label>
              <input
                type="text"
                name="url"
                id="url"
                value={product.url}
                onChange={textChangeHandler}
                required
              />
            </div>

            <div className="product-input">
              <label htmlFor="type">
                <span>Type:</span>
              </label>
              <input
                type="text"
                name="type"
                id="type"
                value={product.type}
                onChange={textChangeHandler}
                required
              />
            </div>

            <div className="product-input">
              <label htmlFor="description">
                <span>Description/Benefits:</span>
              </label>
              <input
                type="text"
                name="description"
                id="description"
                value={product.description}
                onChange={textChangeHandler}
                required
              />
            </div>

            <div className="product-input">
              <label htmlFor="rating">
                <span>Rating:</span>
              </label>
              <input
                type="number"
                name="rating"
                id="rating"
                min="0"
                max="5"
                value={product.rating}
                onChange={textChangeHandler}
              />
            </div>

            <div className="product-checkbox-input">
              <label htmlFor="is_favorite">
                <span>Favorite:</span>
              </label>
              <input
                type="checkbox"
                name="is_favorite"
                id="is_favorite"
                value={product.is_favorite}
                onChange={checkBoxHandler}
                required
              />
            </div>

            <div className="product-checkbox-input">
              <label htmlFor="in_stock">
                <span>In Stock:</span>
              </label>
              <input
                type="checkbox"
                name="in_stock"
                id="in_stock"
                value={product.in_stock}
                onChange={checkBoxHandler}
                required
              />
            </div>

            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewProduct