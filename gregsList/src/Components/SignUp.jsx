import React, { useState } from "react";
import "../CSS/SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "../axios.jsx";
function SignUp() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signup", { email, password, fullName })
      .then((res) => alert(res.data.message))
      .catch((err) => console.warn(err));

    navigate("/login");
  };
  return (
    <div className="SignUp--container">
      <div className="SignUp--logo" onClick={() => navigate("/")}>
        <img src="./amazon_logo.png" alt="" />
      </div>
      <div className="SignUp--form">
        <h3>Sign-Up</h3>
        <div className="SignUp--input">
          <p>FullName</p>
          <input
            type="text"
            placeholder="Perry the Platypus"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </div>
        <div className="SignUp--input">
          <p>Email</p>
          <input
            type="email"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="SignUp--input">
          <p>Password</p>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="SignUp--button" onClick={signup}>Create Account in Amazon</div>
      </div>

      <div className="SignUp--button" onClick={() => navigate("/login")}>
        Back to Login
      </div>
    </div>
  );
}

export default SignUp;