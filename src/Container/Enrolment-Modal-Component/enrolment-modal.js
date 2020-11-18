import React from 'react';
import './enrolment-modal.css';
import infoLogo from '../../Assets/info-logo.png';





class Enrolment extends React.Component{
    render() {
        return(
            <div class='container'>
                <div class='card'>
                    <div class='card-header'>
                        <p>Enrolment information</p>
                        <img src= {infoLogo} />
                    </div>
                    <div class='card-detail'>
                        <p>Please meet our team member
                            in your Ward to enrol.
                            Call 0700PLATEAU for <br/>
                            more information
                        </p>
                        <button>OK</button>
                    </div>

                </div>
            </div>
        );
    }
}


export default Enrolment;