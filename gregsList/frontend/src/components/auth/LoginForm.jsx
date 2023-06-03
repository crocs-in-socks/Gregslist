import React, {useState} from "react";
import Signup from "./Signup"
import { Link } from "react-router-dom";
import { auth } from '../../firebase.js'
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthDetails from "../AuthDetails";


const Loginform = () => {

       const [email, setEmail] = useState('')
       const [password, setPassword] = useState('')

       const logIn = (e) => {
              e.preventDefault()
              signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                     console.log(userCredential)
              }).catch((error) => {
                     console.log(error)
              })
       }

       return (
              <div className="login-page">
                     <form className="login-cover" onSubmit={logIn} >
                            <div className="login-items">
                                   <h1>Login</h1>
                                   Enter Username:
                                   <input type = "email" placeholder="username" className="login-item-things" value={email}
                                   onChange={(e) => {setEmail(e.target.value)}}
                                   />
                                   Enter Password:
                                   <input type = "password" placeholder="password" className="login-item-things" value={password}
                                   onChange={(e) => {setPassword(e.target.value)}}
                                   />
                                   <input type="submit" value="Log me in!" className="login-button" />
                                   <p>
                                          If you haven't signed up yet :
                                   </p>
                                   <Link to="/signup">
                                          <input type="submit" value="Sign up" className="login-button" />
                                   </Link>

                                   <AuthDetails />
                            </div>
                     </form>
              </div>
       );
}
export default Loginform;