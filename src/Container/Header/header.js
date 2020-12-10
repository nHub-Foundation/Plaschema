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
    console.log(this.props)
    return (
      <div className="header">
        <img src={logo} alt="Logo" />
        <div className="header__right">
          <p onClick={this.props.switchPage}>Toggle</p>
          <img src={avatar} alt="Admin" />
          <button> LOGIN</button>
        </div>
      </div>
    );
  }
}


export default Header;

