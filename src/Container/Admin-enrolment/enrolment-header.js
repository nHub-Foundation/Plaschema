import React from 'react';
import './enrolment.css';





const EnrolmentHeader = () => (
    
    <div class="enrolcdment-header">
        <div class="table-name">
            <div class="table-content">
                <h3>Enrolment </h3>
            </div>
        </div>
        <div className='ui segment table'>
        <div class="ui grid">
            <div class="four wide column table-header">
                <div class="table-card ">
                    <div class="table-content">
                        <h4>Total:120k </h4>
                    </div>
                </div> 
            </div>
            <div class="four wide column table-header">
                <div class="table-card">
                    <div class="table-content">
                        <h4>Pending: </h4>
                    </div>
                </div>
            </div>
            <div class="four wide column table-header">
                <div class="table-card">
                    <div class="table-content">
                        <h4>Approved: </h4>
                    </div>
                </div>
            </div>
            <div class="four wide column table-header">
                <div class="table-card">
                    <div class="table-content">
                        <h4>Retired: </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
);


export default EnrolmentHeader;