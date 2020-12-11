import React from 'react';
import './logIn.css';



const LogIn = ({ handleClose, showModal }) => {
  const showHideClassName = showModal ? "modal display-block" : "modal display-none";
        return (
          <div className={showHideClassName}>
          <div class='container login'>
              <div class=' login'>
                <h2>Sign in</h2>
                <div class="ui equal width form">
                    <div class="fields">
                      <div class="field">
                        <label>Username</label>
                        <input type="text" placeholder="Username"/>
                      </div>
                      <div class="field">
                        <label>Password</label>
                        <input type="password"/>
                      </div>
                    </div>
                </div>
                <div className="login-btn">
                  <button onClick={handleClose}>Sign in</button>
                </div>
                <div className="login-link">
                  <a href="#">forgot password?</a>
                </div>
                <div className="login-link">
                  <a href="#">New User?</a>
                </div>
              </div>
          </div>
        
        </div>
        
        );    
    }
    
    
export default LogIn;