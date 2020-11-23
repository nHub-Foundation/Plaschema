import React from 'react';
import './card.css';


class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="cardFlex">
            <div className="icon">
                <img src={`https://robohash.org/set_set4/?size=200x200`} alt='robots' />
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
        <div className="button">
            <button>{this.props.buttonText}</button>
        </div>
      </div>
    );
  }
}

export default Card;
