import React from 'react';
import './adminCard.css';


class AdminCard extends React.Component {
  render() { 
    return (
      <div className="adCard">
        <div className="cardFlex">
            <div className="icon">
                {/* <img src={`https://robohash.org/set_set4/?size=200x200`} alt='robots' /> */}
            </div>
            <div className="details">
                <h1>
                    {this.props.heading}
                </h1>
                <p>
                    {this.props.description}
                </p>
            </div>
        </div>
        
      </div>
    );
  }
}

export default AdminCard;
