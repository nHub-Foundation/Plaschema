import React from 'react';
import './subscription-modal.css';





const Subscription= ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

 return (
    <div className={showHideClassName}>
        <section className="">
            <div class="enrol-list">
                    <div class="form-name">
                        <h3>Payments</h3>
                        <i class="close icon" onClick={handleClose}></i>
                    </div>
                <div className="container subsciption">
                    <div className="ui card subsciption">
                        <div class="ui form subsciption">
                            <div class="field">
                                <input type="text" placeholder="Enter enrolment ID"/>
                            </div>
                            <div class="form-details">
                                <div class='p-one'>
                                    <p>Name:</p>
                                    <p>ID:</p>
                                </div>
                                <div class='p-one'>
                                    <p>Curent Plan:</p>
                                    <p>Amount: </p>                                    
                                </div>
                                <div class="form-drop">
                                    <label>Upgrade: </label>
                                    <div class="field">
                                            <select name="dropdown" id="dropdown">
                                                <option value="1">Quaterly</option>
                                                <option value="2">Saab</option>
                                                <option value="3">Opel</option>
                                                <option value="4">Audi</option>
                                            </select>
                                    </div>
                                </div>
                                                            

                                <div class="form-drop-last">
                                    <label>Frequency: </label>
                                    <div class="field">
                                            <select name="dropdown" id="dropdown">
                                                <option value="1">Private</option>
                                                <option value="2">Saab</option>
                                                <option value="3">Opel</option>
                                                <option value="4">Audi</option>
                                            </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div class='addbtn'>
                                <button class="ui button">Add</button>
                            </div>
                            <div class='subtable'>
                                <table class="ui celled table">
                                    <thead>
                                        <tr><th>Enrid</th>
                                        <th>Name</th>
                                        <th>Plan</th>
                                        <th>Amount</th>
                                    </tr></thead>
                                    <tbody>
                                    
                                    </tbody>
                                </table>
                                <div class='sidebtn'>
                                    <div class='btn'>
                                        <button class="ui button">Remove</button>
                                    </div>
                                    <div class='btn'>
                                        <button class="ui button">Remove</button>
                                    </div>
                                    <div class='btn'>
                                        <button class="ui button">Remove</button>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class='total-amount'>
                                <h3>Total Amount:</h3>
                            </div>
                            <div class='proceed-btn'>
                                <button class="ui button">Proceed</button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

                       
        
     
);
};



export default Subscription;