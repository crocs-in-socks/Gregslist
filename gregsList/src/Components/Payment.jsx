import React, { useEffect, useState } from "react";
// import CurrencyFormat from "react-currency-format";
// import "../CSS/Payment.css";
import { getBasketTotal } from "../reducer.jsx";
import { useStateValue } from "../StateProvider.jsx";
import Address from "./Address.jsx";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Navbar from "./Navbar.jsx";
import axios from "../axios.jsx";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [{ address, basket, user }, dispatch] = useStateValue();
  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  const stripe = useStripe();

  const navigate = useNavigate();
  useEffect(() => {
    const fetchClientSecret = async () => {
      const data = await axios.post("/payment/create", {
        amount: getBasketTotal(basket),
      });

      setClientSecret(data.data.clientSecret);
    };

    fetchClientSecret();
    console.log("clientSecret is >>>>", clientSecret);
  }, []);

  const confirmPayment = async (e) => {
    e.preventDefault();

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((result) => {
        axios.post("/orders/add", {
          basket: basket,
          price: getBasketTotal(basket),
          email: user?.email,
          address: address,
        });

        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/");
      })
      .catch((err) => console.warn(err));
  };

  return (
    <div className="Payment--container">
      <Navbar />

      <div className="Payment--main">
        <div className="Payment--ReviewContainer">
          <h2>Review Your Order</h2>

          <div className="Payment--AddressContainer">
            <h5>Shipping Address</h5>

            <div>
              <p>{address.fullName}</p>
              <p>{address.flat}</p>
              <p>{address.area}</p>
              <p>{address.landmark}</p>
              <p>
                {address.city} {address.state}
              </p>

              <p>Phone: {address.phone}</p>
            </div>
          </div>

          <div>
            <h5>Payment Method</h5>

            <div>
              <p>Card Details</p>

              {/* Card Element */}

              <CardElement />
            </div>
          </div>

          <div className="Payment--OrderContainer">
            <h5>Your Order</h5>

            <div>
              {basket?.map((product) => (
                <div className="Payment--Product">
                  <div className="Payment--Image">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="Payment--Description">
                    <h4>{product.title}</h4>

                    <p>₹ {product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="Payment--Subtotal">
          {/* <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal ( {basket.length} items ) : <strong> {value}</strong>
                </p>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={"₹ "}
          /> */}

          <button onClick={confirmPayment}>Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;