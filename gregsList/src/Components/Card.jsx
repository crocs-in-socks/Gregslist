import React from "react";
import "../CSS/Card.css";
// import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "../StateProvider.jsx";
function Card({ id, image, title, price, rating }) {
  // const [{ basket }, dispatch] = useStateValue();
  // console.log("basket >>>>", basket);
  // const addToBasket = (e) => {
  //   e.preventDefault();

  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id,
  //       title,
  //       price,
  //       image,
  //       rating,
  //     },
  //   });
  // };

  return (
    <div className="Card--container">
      <div className="Card--image">
        <img src={image} alt="item image here" />
      </div>
      <div className="Card--description">
        <h5>{title}</h5>
        {/* <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        /> */}
        <p>₹ {price}</p>

        {/* <button onClick={addToBasket}>Add to Cart</button> */}
      </div>
    </div>
  );
}

export default Card;