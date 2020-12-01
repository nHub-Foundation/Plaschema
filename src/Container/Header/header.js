import React from 'react';
import './header.css';
import logo from '../../Assets/logo.png';
import avatar from '../../Assets/avatar.png';
import LogIn from '../Login/logIn';



class Header extends React.Component {
    state={show:false}  
    showModal = () => {
      this.setState ({
        show:true
      })
    
    }

    hideModal =() => {
      this.setState ({
        show:false
      })
    }

  render() {
    return (
      <div className="header">
     
      <img src={logo} alt="Logo" />
        
        <div className="header__right">
          <img src={avatar} alt="" />
           <div>
       </div>
         <LogIn show= {this.state.show} handleClose = {this.hideModal} />
          <button onClick = {this.showModal}> LOGIN</button>
        </div>
      </div>
    );
  }
}


export default Header;

