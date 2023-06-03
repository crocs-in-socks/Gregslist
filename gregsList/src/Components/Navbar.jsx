import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Navbar.css";
import "./logo.png"
import { useStateValue } from "../StateProvider.jsx";

function Navbar() {
  // const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  // const signOut = () => {
  //   dispatch({
  //     type: "SET_USER",
  //     user: null,
  //   });

  //   // localStorage.removeItem("user");
  //   navigate("/");
  // };
  return (
    <div className="Navbar--container">
      <div className="Navbar--inner">
        <div className="Navbar--logo" onClick={() => navigate("/")}>
          {/* <img src="..\src\Components\logoipsum-291(1).png" alt="image here" /> */}
        </div>
        <div className="Navbar--Searchbar">
          <input type="text" placeholder="Search..." />
          <div className="Navbar--Searchicon" onClick={() => navigate("/addproduct")}>
            <img src="./searchIcon.png" alt="search button" />
          </div>
        </div>
        {/* <div className="Navbar--RightContainer">
          <div className="Navbar--Navbutton"
            onClick={user ? () => signOut() : () => navigate("/login")}
          >
            <p>Hello,</p>
            <p>{user ? user?.fullName : "Guest"}</p>
          </div> 
          <div className="Navbar--Navbutton" onClick={() => navigate("/orders")}>
            <p>Return</p>
            <p>& Orders</p>
          </div>
          <div className="Navbar--Basketbutton" onClick={() => navigate("/checkout")}>
            <img src="./basket-icon.png" alt="" />
            <p>{basket?.length}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;