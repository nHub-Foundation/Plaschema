import React from 'react';
import './subscription.css';





const SubscriptionHeader = () => (
    
    <div class="subscription-header">
        <div class="table-name">
            <div class="table-content">
                <h3>Subscription </h3>
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
                        <h4>Active: </h4>
                    </div>
                </div>
            </div>
            <div class="four wide column table-header">
                <div class="table-card">
                    <div class="table-content">
                        <h4>Expired: </h4>
                    </div>
                </div>
            </div>
            <div class="four wide column table-header">
                <div class="table-card">
                    <div class="table-content">
                        <h4>Amount: </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
);


export default SubscriptionHeader;