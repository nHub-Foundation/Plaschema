import React from 'react';
import Report from './report'
import './report.css'





const ReportList= ({user, onMenuSelect}) => (
    <div className="reports">
        <div class="report-list">
            <div className="scroll">
                {
                    user.map((person) => <Report key={person.id} title={ person.title } id={ person.id } url={ person.url } onMenuSelect={onMenuSelect}/>)
                }

            </div>
        </div>
    <button class="">Approve All</button>
    <button class="">Export</button>
    </div>
)



export default ReportList;