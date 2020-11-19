import React from 'react';
import './subscription-modal.css'





const Subscription= () => (
    <div class="enrol-list">
        <div className="container">
            <div class="form-name">
                <h3>Payments</h3>
            </div>
            <div className="ui card">
                <div class="ui form">
                    <div class="field">
                        <input type="text" placeholder="Enter enrolment ID"/>
                    </div>
                    <div class="form-details">
                        <p>Name:</p>
                        <p>ID:</p>
                        <p>Curent Plan:</p>
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
                        <p>Amount: </p>
                    </div>
                </div>
                    <div class='addbtn'>
                        <button class="ui green button">Add</button>
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
                                <button class="ui green button">Remove</button>
                            </div>
                            <div class='btn'>
                                <button class="ui green button">Remove</button>
                            </div>
                            <div class='btn'>
                                <button class="ui green button">Remove</button>
                            </div>
                            
                        </div>
                    </div>
                    <div class='total-amount'>
                        <h3>Total Amount:</h3>
                    </div>
                    <div class='proceed-btn'>
                        <button class="ui green button">Proceed</button>
                    </div>
            </div>
        </div>
    </div>
                        
        
     
)



export default Subscription;