import React from "react";
const Loginform = () => {
       return (
              <div className="login-page">
                     <div className="login-cover">
                            <div className="login-items">
                                   <h1>Login</h1>
                                   Enter Username:
                                   <input type = "text" placeholder="username" className="login-item-things"/>
                                   Enter Password:
                                   <input type = "password" placeholder="password" className="login-item-things"/>
                                   <button className="login-button">
                                          Log me in!
                                   </button>
                            </div>
                            
                     
                     </div>
              </div>
       );
}
export default Loginform;