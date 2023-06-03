import axios from "../axios.jsx";
import React, { useEffect, useState } from "react";
import "../CSS/Orders.css";
import Navbar from "./Navbar.jsx";
import { useStateValue } from "../StateProvider.jsx";

function Orders() {
  // const [{ user }] = useStateValue();
  // const [orders, setOrders] = useState([]);
  // useEffect(() => {
  //   axios
  //     .post("/orders/get", { email: user.email })
  //     .then((res) => setOrders(res.data));
  // }, []);
  // console.log(orders);

  return (
    <div className="Orders--container">
      <Navbar />
      <div className="Orders--main">
        <div className="Orders--OrderContainer">
          <h2>Your Orders</h2>

          {/* {orders.map((order) => (
            <div className="Orders--OrderDetail">
              <div className="Orders--AddressComponent">
                <h4>Shipping Address</h4>

                <div>
                  <p>{order.address.fullName}</p>
                  <p>{order.address.flat}</p>
                  <p>{order.address.area}</p>

                  <p>
                    {order.address.city} {order.address.state}
                  </p>
                  <p>Phone : {order.address.phone}</p>
                </div>
              </div>
              <div className="Orders--OrderBasket">
                <h4>Order</h4>
                <p>
                  Subtotal : ₹ <span>{order.price}</span>
                </p>

                {order.products.map((product) => (
                  <div className="Orders--Product">
                    <div className="Orders--image">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="description">
                      <h4>{product.title}</h4>

                      <p>₹ {product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Orders;