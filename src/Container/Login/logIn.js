import React from 'react';
import './logIn.css';



class LogIn extends React.Component {
    constructor() {
      super();
  
      this.state = {
        showModal: false
      }
    }

    render() {
        return (
        <div className="signin">
            <h1>Sign In</h1>
            <input
            type="text"
            placeholder="Username"
            />
            <br/>
            <input
            type="password"
            placeholder="Password"
            />
            <br/>
            <button>Sign In</button>
            <p className="para">Forgot Password?</p>
            <br/>
            <p>New User?</p>
            <button>Sign Up</button>
        </div>
        );    
    }
}    
export default LogIn;