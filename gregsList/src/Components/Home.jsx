import axios from "../axios.jsx";
import React, { useEffect, useState } from "react";
// import "../CSS/Home.css";
import Card from "./Card.jsx";
import { useStateValue } from "../StateProvider.jsx";
import Navbar from "./Navbar.jsx";

function Home() {
  // const [products, setProducts] = useState("");
  
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     const data = await axios.get("/products/get");
  //     setProducts(data);
  //   };
  //   fetchdata();
  // }, []);

  

  return (
    <div className="Home--container">
      <h1>
        Home Page
      </h1>
      <Navbar />
      <div className="Home--Banner">
        <img src="./banner.jpg" alt="" />
        <img src="./mobile_banner.jpg" alt="" />
      </div>

      {/* <div className="Home--main">
        {products &&
          products?.data.map((product) => (
            <Card
              id={product._id}
              image={product.imageURL}
              price={product.price}
              rating={product.rating}
              title={product.title}
            />
          ))}
      </div> */}
    </div>
  );
}

export default Home;