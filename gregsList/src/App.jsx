import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./CSS/App.css";
import Address from "./Components/Address.jsx";
import Checkout from "./Components/Checkout.jsx";

import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Payment from "./Components/Payment.jsx";
import SignUp from "./Components/SignUp.jsx";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import AddProduct from "./Components/AddProduct.jsx";
import Orders from "./Components/Orders.jsx";

function App() {
  return (
    <>
    <Router>
      <div className="App--container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/address" element={<Address />} />
          {/* <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            } 
          /> */}

          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
