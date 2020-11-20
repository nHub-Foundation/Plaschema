import React from 'react';
import './card-list.css';





const Card = ({ title, id, url, onMenuSelect }) => (
    <div className='ui card'>
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


export default Card;