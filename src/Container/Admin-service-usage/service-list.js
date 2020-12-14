import React from 'react';
import Service from './service'
import './service.css'





const ServiceList= ({user, onMenuSelect}) => (
    <div className="services">
        <div class="service-list">
            <div className="scroll">
                {
                    user.map((person) => <Service key={person.id} title={ person.title } id={ person.id } url={ person.url } onMenuSelect={onMenuSelect}/>)
                }

            </div>
        </div>
    <button class="">Export</button>
    </div>
)



export default ServiceList;