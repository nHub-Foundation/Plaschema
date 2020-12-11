import React from 'react';
import './header.css';
import LogIn from '../Login/logIn'
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar2.png';



class Header extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    console.log(this.props)
    return (
      <div className="header">
        <img src={logo} alt="Logo" />
        <div className="header__right">
          <p onClick={this.props.switchPage}>Toggle</p>
          <img src={avatar} alt="Admin" />
          <div>
              <LogIn show={this.state.show} handleClose={this.hideModal}/>
              <button onClick={this.showModal}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}


export default Header;

