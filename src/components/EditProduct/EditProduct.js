import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './EditProduct.css'
import API from '../common/Api/Api.js'

function EditProduct() {

const navigate = useNavigate();
const {id} = useParams();

  const [product, setProduct] = useState({
    name: "",
    url: "",
    type: "",
    description: "",
    rating: "",
    is_favorite: false,
    in_stock: false,
  });

  const getProductData = async () => {
    try {
        let result = await axios.get(`${API}/${id}`);

        setProduct(result.data);
    } catch (error) {
        return error;
    }
  };

  useEffect(() => {
    getProductData();
    // eslint-disable-next-line
  }, []);

    function textChangeHandler(event) {
      console.log(event.target.value);
      setProduct({
        ...product,
        [event.target.id]: event.target.value,
      });
    }
   
    function checkBoxHandler(event) {
      setProduct({
        ...product,
        is_favorite: !product.is_favorite,
        in_stock: !product.in_stock,
      });
    }
  
     async function submitHandler(event) {
       event.preventDefault();
       try {
         await axios.put(`${API}/${id}`, product);
         navigate(`/products/${id}`);
       } catch (error) {
         return error;
       }
     }


  return (
    <div>
      <h1>Edit Product</h1>

      <div>
        <div className="edit-form-div">
          <form onSubmit={submitHandler}>
            <div className="edit-input">
              <label>
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

            <div className="edit-input">
              <label>
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

            <div className="edit-input">
              <label>
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

            <div className="edit-input">
              <label>
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

            <div className="edit-input">
              <label>
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

            <div className="edit-input">
              <label>
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

            <div className="edit-input">
              <label>
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

export default EditProduct