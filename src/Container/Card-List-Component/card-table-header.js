import React from 'react';
import './card-list.css'





const CardTableHeader = () => (
    
    <div class="table-header">
        <div class="table-name">
            <div class="content">
                <h3>Enrolment </h3>
            </div>
        </div>
        <div className='ui segment table'>
        <div class="ui grid">
            <div class="four wide column">
                <div class="card">
                    <div class="content">
                        <h4>Total: </h4>
                    </div>
                </div> 
            </div>
            <div class="four wide column">
                <div class="card">
                    <div class="content">
                        <h4>Pending: </h4>
                    </div>
                </div>
            </div>
            <div class="four wide column">
                <div class="card">
                    <div class="content">
                        <h4>Approved: </h4>
                    </div>
                </div>
            </div>
            <div class="four wide column">
                <div class="card">
                    <div class="content">
                        <h4>Retired: </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
);


export default CardTableHeader;