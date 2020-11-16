import React from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';



class Header extends React.Component {
    constructor() {
      super();
  
      this.state = {
        showModal: false
      }
    }

    render() {
        return (
        <div className="header">
            <img src={logo} alt="Logo" />
            <div className="header__right">
                <img src={avatar} alt="" />
                <p>Welcome, Adimin</p>
                <button> LOGIN</button>
            </div>
        </div>
        );    
    }
}    


export default Header;

