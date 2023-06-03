import React from "react";
import { useStateValue } from "../StateProvider.jsx";
// import "../CSS/Checkout.css";
import Navbar from "./Navbar.jsx";
// import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer.jsx";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const removeFromBasket = (e, id) => {
    e.preventDefault();

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  console.log("checkout >>>>>", basket);
  return (
    <div className="Checkout--container">
      <Navbar />

      <div className="Checkout--main">
        <div className="Checkout--ShoppingCart">
          <h2>Shopping Cart</h2>

          {basket?.map((product) => (
            <div className="Checkout--Product">
              <div className="Checkout--image">
                <img src={product.image} alt="" />
              </div>
              <div className="Checkout--description">
                <h4>{product.title}</h4>

                <p>₹ {product.price}</p>

                <button onClick={(e) => removeFromBasket(e, product.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="Checkout--Subtotal">
          {/* <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal ( {basket.length} items ) : <strong> {value}</strong>
                </p>
                <small>
                  <input type="checkbox" />
                  <span>This order contains a gift.</span>
                </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={"₹ "}
          /> */}

          <button onClick={() => navigate("/address")}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;