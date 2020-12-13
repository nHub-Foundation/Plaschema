import React from 'react';
import Accreditation from './accreditation'
import './accreditation.css'





const AccreditationList= ({user, onMenuSelect}) => (
    <div className="accredit">
        <div class="accredit-list">
            <div className="scroll">
                {
                    user.map((person) => <Accreditation key={person.id} title={ person.title } id={ person.id } url={ person.url } onMenuSelect={onMenuSelect}/>)
                }

            </div>
        </div>
    <button class="">Approve all</button>
    <button class="">Export</button>
    </div>
)



export default AccreditationList;