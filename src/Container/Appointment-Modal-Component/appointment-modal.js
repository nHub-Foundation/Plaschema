import React from 'react';
import './appointment-modal.css';


const Appointment= ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

 return (
    <div className={showHideClassName}>
                <div class="form-name appointment">
                        <h3>Book An Appointment </h3>
                        <i class="close icon" onClick={handleClose}></i>
                </div>
            <div className="container appointment">
                <div className="ui card appointment">
                    <div class="ui form appointment">
                        <div class="field">
                            <input type="text" placeholder="Enter enrollment ID" required/>
                        </div>
                        <div class="field">
                            <textarea rows="5" cols="" placeholder="Why do you want to see the Doctor?" required></textarea>
                        </div>
                        <button class="ui button appointment">Submit Request</button>

                    </div>
                </div>
            </div>

    </div>

);
};


export default Appointment;