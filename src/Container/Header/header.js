// import React from 'react';
// import './header.css';

// class Header extends React.Component {
//     constructor() {
//       super();
  
//       this.state = {
//         showModal: false
//       }
//     }

//     render() {
//         return (
//         <div className="header">
//             <div classname ="LOGO">
//                 <h1>LOGO</h1>
//             </div>
//             <button> LOGIN</button>
//         </div>
//         );    
//     }
// }    


// export default Header;

import React from 'react';

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            showLogin: true
        }
    }

    toggleLogin = () => {
        this.setState((prevState, prevProps) => {

            this.setState({ showLogin: !prevState.showLogin})
        })
    }

    logoutClick = () => {
        
        this.setState({showLogin: true})
    }

    render() {

        return (
            <div className="ui large menu" style={{backgroundColor:"green"}}>
    
                <div className="right menu">
                    <div className="ui action input">
                        <div className="ui button">
                            
                            {
                                this.state.showLogin ? 
                                    <div>
                                        <input type="text" placeholder="username" />
                                        <input type="password" placeholder="password" />
                                        <div onClick={this.toggleLogin} className="ui button">Login </div>
                                    </div>
                                    : <div onClick={this.logoutClick} className="ui button">Logout </div>
                            } 
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
};

export default Header;