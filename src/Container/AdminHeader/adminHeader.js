import React from 'react';
import './adminHeader.css';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';



class AdminHeader extends React.Component {
    constructor() {
      super();
  
      this.state = {
        showModal: false
      }
    }

    render() {
        return (
        <div className="adheader">
            <img src={logo} alt="Logo" />
            <div className="adheader__right">
                <img src={avatar} alt="avatar" />
                <button> LOGIN</button>
            </div>
        </div>
        );    
    }
}    


export default AdminHeader;

