import axios from "../axios.jsx";
import React, { useEffect, useState } from "react";
import "../CSS/Home.css";
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
      <Navbar />
      <div className="Home--Banner">
        {/* <img src="./banner.jpg" alt="img not available" />
        <img src="./mobile_banner.jpg" alt="img not available" /> */}
      </div>

      <Card
      _id="1"
      image="..\src\Components\dumbell.jpeg"
      price="69420"
      title="Dumbells"
      />
      <Card
      _id="1"
      image="..\src\Components\book.jpeg"
      price="69420"
      title="Books"
      />
      <Card
      _id="1"
      image="..\src\Components\bucket.jpeg"
      price="69420"
      title="Bucket"
      />
      <Card
      _id="1"
      image="..\src\Components\mattress.jpeg"
      price="69420"
      title="Mattress"
      />
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