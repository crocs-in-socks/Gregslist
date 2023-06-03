import axios from "../axios.jsx";
import React, { useState } from "react";
import "../CSS/AddProduct.css";

function AddProduct() {
  // const [title, setTitle] = useState("");
  // const [imageURL, setImageURL] = useState("");
  // const [price, setPrice] = useState(0);
  // const [rating, setRating] = useState(0);

  const addProduct = (e) => {
    // e.preventDefault();

    // axios
    //   .post("/products/add", { title, imageURL, price, rating })
    //   .then(() => {
    //     setTitle("");
    //     setImageURL("");
    //     setPrice(0);
    //     setRating(0);
    //   })
    //   .catch((error) => alert(error.message));
  };
  return (
    <div className="AddProduct--container">

      <div className="AddProduct--logo">
        <img src="./amazon_logo.png" alt="" />
      </div>

      <div className="AddProduct--form">
        <h3>Add Product</h3>

        <div className="AddProduct--input">
          <p>Title</p>
          <input
            type="text"
            // onChange={(e) => setTitle(e.target.value)}
            // value={title}
          />
        </div>
        <div className="AddProduct--input">
          <p>ImageURL</p>
          <input
            type="text"
            // onChange={(e) => setImageURL(e.target.value)}
            // value={imageURL}
          />
        </div>
        <div className="AddProduct--input">
          <p>Price</p>
          <input
            type="number"
            // onChange={(e) => setPrice(e.target.value)}
            // value={price}
          />
        </div>
        <div className="AddProduct--input">
          <p>Rating</p>
          <input
            type="number"
            // onChange={(e) => setRating(e.target.value)}
            // value={rating}
          />
        </div>

        {/* <Button onClick={addProduct}>Add Product</Button> */}
      </div>
    </div>
  );
}

export default AddProduct;