import React from 'react';
import './card.css';
import Accredit from '../../Assets/accredit.png';
import Appoint from '../../Assets/appoint.png';
import Enrol from '../../Assets/enrol.png';
import Sub from '../../Assets/sub.png';
import Enrolment from '../Enrolment-Modal-Component/enrolment-modal';



class Card extends React.Component {
  
  render() {
    return (
      <div className="card">
        <div className="cardFlex">
            <div className="icon">
              {
                this.props.description === "Total Enrolments" ? (
                  <img src={Enrol} alt='not set' />
                ) : 
                this.props.description === "Facilities Accredited" ? (
                  <img src={Accredit} alt='not set' />
                ) : 
                this.props.description === "Healthcare Professionals" ? (
                  <img src={Appoint} alt='not set' />
                ) : 
                this.props.description === "Active Subscriptions" ? (
                  <img src={Sub} alt='not set' />
                ) :null  
              }
              
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
            <button onClick={
              this.props.buttonText === "Enrol Today" ? (
                <Enrolment/>
              ) :null
            } >{this.props.buttonText}</button>
        </div>
      </div>
    );
  }
}

export default Card;
