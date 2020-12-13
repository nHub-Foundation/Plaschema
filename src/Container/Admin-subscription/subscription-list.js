import React from 'react';
import Subscription from './subscription';
import './subscription.css'





const SubscriptionList= ({user, onMenuSelect}) => (
    <div className="enrol">
        <div class="enrol-list">
            <div className="scroll">
                {
                    user.map((person) => <Subscription key={person.id} title={ person.title } id={ person.id } url={ person.url } onMenuSelect={onMenuSelect}/>)
                }

            </div>
        </div>
    <button class="">Export</button>
    </div>
)



export default SubscriptionList;