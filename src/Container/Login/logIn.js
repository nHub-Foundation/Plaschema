import React from 'react';
import './logIn.css';




const LogIn = ({handleClose, show}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none"
    
        return (
          <div className = {showHideClassName}> 
             <div className="signin">
            <div class = "signin-header"> 
            <h1>Sign In</h1>
            <i class = 'close icon' onClick = {handleClose}/>
            </div>
            <div class = "inputs">
            <input
            type="text"
            placeholder="Username"
            />
            <br/>
            <br/>
            <input
            type="password"
            placeholder="Password"
            />
            </div>
            <br/>
            <button>Sign In</button>
            <p className="para">Forgot Password?</p>
            <br/>
            <p>New User?</p>
            <button>Sign Up</button>
        </div>
          </div>
        
        );    
    };
 
export default LogIn;