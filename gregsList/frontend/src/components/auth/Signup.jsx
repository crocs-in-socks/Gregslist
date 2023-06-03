import React, {useState} from "react";
import { auth } from '../../firebase.js'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {

       const [email, setEmail] = useState('')
       const [password, setPassword] = useState('')
       const navigate = useNavigate()

       function FUNC(S){
              if(S.substring(S.length-17,S.length)==="@vitstudent.ac.in")
              return true;
              else
              return false
          }

       const signUp = (e) => {
              e.preventDefault()

              if(FUNC(email))
              {
                     createUserWithEmailAndPassword(auth, email, password)
                     .then((userCredential) => {
                            console.log(userCredential)
                     }).catch((error) => {
                            console.log(error)
                     })
                     navigate('/login')
              }
              else{
                     console.log("Invalid email")
              }
       }

       return (
              <div className="login-page">
                     <form className="login-cover" onSubmit={signUp}>
                            <div className="login-items">
                                   <h1>Sign Up</h1>
                                   Enter Username:
                                   <input type = "email" placeholder="username" className="login-item-things" value={email}
                                   onChange={(e) => {setEmail(e.target.value)}}
                                   />
                                   Enter Password:
                                   <input type = "password" placeholder="password" className="login-item-things" value={password}
                                   onChange={(e) => {setPassword(e.target.value)}}
                                   />
                                   <input type="submit" value="Sign me up!" className="login-button" />
                            </div>
                            
                     
                     </form>
              </div>
       );
}
export default Signup;