import React from 'react';
import './appointment-modal.css';





class Appointment extends React.Component{
    render() {
        return(
            <div class='container'>
                <div class='card-header'>
                       <h3>Book Appointment</h3> 
                </div>
                <div class='card'>
                    <div class='card-inputs'>
                        <div> 
                            <input type="text" placeholder="" />
                        </div>
                        <div> 
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div> 
                            <input type="button" value="Submit Request"/>
                        </div>                        
                    </div>

                </div>
            </div>
        );
    }
}


export default Appointment;