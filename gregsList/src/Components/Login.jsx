import React, { useState } from "react";
import "../CSS/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "../axios.jsx";
import { useStateValue } from "../StateProvider.jsx";
function Login() {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const [{}, dispatch] = useStateValue();

  const login = (e) => {
    e.preventDefault();

    axios
      .post("/auth/login", { email, password })
      .then((res) => {
        if (!res.data.error) {
          dispatch({
            type: "SET_USER",
            user: res.data,
          });

          localStorage.setItem("user", JSON.stringify(res.data));

          navigate("/");
        } else if (res.data.error) {
          alert(res.data.error);
        }
      })
      .catch((err) => console.warn(err));
  };
  return (
    <div className="Login--container">
      <div className="Login--logo" onClick={() => navigate("/")}>
        <img src="../src/Components/vshoplogo1.jpg" alt="" />
      </div>

      <div className="Login--form">
        <h3>Sign-In</h3>

        <div className="Login--input">
          <p>Email</p>
          <input
            type="email"
            placeholder="example@example.com"
            // onChange={(e) => setEmail(e.target.value)}
            // value={email}
          />
        </div>
        <div className="Login--input">
          <p>Password</p>
          <input
            type="password"
            placeholder="********"
            // onChange={(e) => setPassword(e.target.value)}
            // value={password}
          />
        </div>

        <div className="Login--button" onClick={login}>Login</div>

        <div className="Login--InfoText">
          By continuing, you agree to V-Shop's <span>Conditions of Use </span>
          and <span> Privacy Notice</span>
        </div>
      </div>
      <div className="Login--button" onClick={() => navigate("/signup")}>
        Create Account in V-Shop
      </div>
    </div>
  );
}

export default Login;