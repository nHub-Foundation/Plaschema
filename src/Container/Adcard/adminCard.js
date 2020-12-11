import React from 'react';
import './adminCard.css';
import Accredit from '../../assets/accredit.png';
import Appoint from '../../assets/appoint.png';
import Enrol from '../../assets/enrol.png';
import Sub from '../../assets/sub.png';


class AdminCard extends React.Component {
  render() { 
    return (
      <div className="adcard body">
      <div className="adcardFlex">
          <div className="adicon">
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

          <div className="addetails">
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
