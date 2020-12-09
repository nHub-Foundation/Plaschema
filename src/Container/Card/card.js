import React from 'react';
import './card.css';
import Accredit from '../../Assets/accredit.png';
import Appoint from '../../Assets/appoint.png';
import Enrol from '../../Assets/enrol.png';
import Sub from '../../Assets/sub.png';
import Enrolment from '../Enrolment-Modal-Component/enrolment-modal';
import Subsciption from '../Subscription-Modal-Component/subscription-modal';
import Appointment from '../Appointment-Modal-Component/appointment-modal';


class Card extends React.Component {
  
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

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
          {
                this.props.buttonText === "Enrol Today" ? (
                  <div>
                    <Enrolment show={this.state.show} handleClose={this.hideModal}/>
                    <button onClick={this.showModal}>{this.props.buttonText}</button>
                  </div>
                ) : 
                this.props.buttonText === "Apply Today" ? (
                  <div>
                    <button onClick={this.showModal}>{this.props.buttonText}</button>
                  </div>
                ) : 
                this.props.buttonText === "Pay Subscription" ? (
                  <div>
                    <Subsciption show={this.state.show} handleClose={this.hideModal}/>
                    <button onClick={this.showModal}>{this.props.buttonText}</button>
                  </div>
                ) : 
                this.props.buttonText === "Book Appointment" ? (
                  <div>
                    <Appointment show={this.state.show} handleClose={this.hideModal}/>
                    <button onClick={this.showModal}>{this.props.buttonText}</button>
                  </div>
                ) :null  
              }
        </div>
      </div>
    );
  }
}

export default Card;
