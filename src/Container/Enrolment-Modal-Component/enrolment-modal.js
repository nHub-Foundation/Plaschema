import React from 'react';
import './enrolment-modal.css'
import infoLogo from '../../assets/info-logo.png';




const Enrolment = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div class='container enrolment'>
                <div class='card enrolment'>
                    <div class='card-header'>
                        <p>Enrolment information</p>
                        <img src={infoLogo} alt='info logo' />
                    </div>
                    <div class='card-detail'>
                        <p>Please meet our team member
                        in your Ward to enrol.
                            Call 0700PLATEAU for <br />
                            more information
                        </p>
                        <button className="ui button" onClick={handleClose}>OK</button>
                    </div>

                </div>
            </div>

        </div>




    );
};





export default Enrolment;