import React from 'react';
import './report.css'



const Report = ({ title, id, url, onMenuSelect }) => (
    <div className='ui card enrolment'>
        <div className="card-container" onClick={() => onMenuSelect(id)}>
            <div className="card-image">
                <img src={url} alt="something" />
            </div>
            <div className="details">
                <p>{id}</p>
                <p>{title}</p>
            </div>
        </div>
    </div>
);


export default Report;