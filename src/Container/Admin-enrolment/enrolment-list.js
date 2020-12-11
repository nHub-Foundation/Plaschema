import React from 'react';
import Enrolment from './enrolment';
import './enrolment.css'





const EnrolmentList= ({user, onMenuSelect}) => (
    <div class="enrol-list">
        <div className="scroll">
            {
                user.map((person) => <Enrolment key={person.id} title={ person.title } id={ person.id } url={ person.url } onMenuSelect={onMenuSelect}/>)
            }

        </div>
        <button class="ui green button">Export</button>
     </div>
)



export default EnrolmentList;