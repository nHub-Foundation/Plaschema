import React from 'react';
import './accreditation.css'






const AccreditationHeader = () => (
    
    <div class="enrolment-header">
        <div class="table-name">
            <div class="table-content">
                <h3>Accreditation </h3>
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
                        <h4>Reacreditation: </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
);


export default AccreditationHeader;