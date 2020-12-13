import React from 'react';
import './report.css'





const ReportHeader = () => (
    
    <div class="service-header">
        <div class="table-name">
            <div class="table-content-report">
                <h3>Report</h3>
            </div>
        </div>
        <div className='ui segment table'>
        <div class="ui grid">
            <div class="eight wide column table-header">
                <div class="table-card ">
                    <div class="table-content">
                        <h4>Total:120k </h4>
                    </div>
                </div> 
            </div>
            <div class="eight wide column table-header">
                <div class="table-card">
                    <div class="table-content">
                        <h4>Active: </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
);


export default ReportHeader;