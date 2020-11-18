import React from 'react';
import './appointment-modal.css';





class Appointment extends React.Component{
    render() {
        return(
            <div className="container">
                <div class="form-name">
                        <h3>Book An Appointment </h3>
                </div>
                <div className="ui card">
                    <div class="ui form">
                        <div class="field">
                            <input type="text" placeholder="Enter enrollment ID"/>
                        </div>
                        <div class="field">
                            <textarea rows="5" cols="" placeholder="Why do you want to see the Doctor?"></textarea>
                        </div>
                        <button class="ui green button">Submit Request</button>

                    </div>
                </div>
            </div>
        );
    }
}


export default Appointment;