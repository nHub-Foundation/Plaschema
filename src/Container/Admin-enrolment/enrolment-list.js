import React from 'react';
import Enrolment from './enrolment';
import './enrolment.css'





const EnrolmentList= ({user, onMenuSelect}) => (
    <div className="enrol">
        <div class="enrol-list">
            <div className="scroll">
                {
                    user.map((person) => <Enrolment key={person.id} title={ person.title } id={ person.id } url={ person.url } onMenuSelect={onMenuSelect}/>)
                }

            </div>
        </div>
    <button class="">Approve all</button>
    <button class="">Export</button>
    </div>
)



export default EnrolmentList;