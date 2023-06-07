import React, { useState } from 'react';
import './css/Productlist.css';
import { useNavigate } from "react-router-dom";
import Header1 from '../Header1';

function ADD3() {

    let navigate = useNavigate();

    
  const [products, setProducts] = useState([]);

  const addProduct = (product) => setProducts([...products, product]);

  const deleteProduct = (index) => setProducts(products.filter((_, i) => i !== index));

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const product = {
      code: form.code.value,
      name: form.name.value,
      price: form.price.value,
    };
    addProduct(product);
    form.reset();
  };

  return (
   

    <div>
      <Header1 />
      <div className="product-list">
        <form onSubmit={handleSubmit}>
          <label>
            Business 
            <input type="text" name="code" />
          </label>
          <label>
            Number
            <input type="text" name="code" />
          </label>
          <label>
            Full name
            <input type="text" name="code" />
          </label>
          <label>
            Email
            <input type="text" name="code" />
          </label>
         
          <label>
            starting price
            <input type="text" name="price" />
          </label>
          <button type="submit">Add Business </button>
        </form>
      </div>
    </div>
  );
}





export default ADD3;