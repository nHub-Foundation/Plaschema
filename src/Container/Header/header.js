import React from 'react';
import './header.css';
import logo from '../../Assets/logo.png';
import avatar from '../../Assets/avatar.png';



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
                <button> LOGIN</button>
            </div>
        </div>
        );    
    }
}    


export default Header;

