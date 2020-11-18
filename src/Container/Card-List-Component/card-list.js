import React from 'react';
import Card from './admin-card';
import './card-list.css'




const CardList= ({user, onMenuSelect}) => (
    <div class="enrol-list">
        <div className="scroll">
            {
                user.map((person) => <Card key={person.id} title={ person.title } id={ person.id } url={ person.url } onMenuSelect={onMenuSelect}/>)
            }

        </div>
        <button class="ui green button">Export</button>
     </div>
)



export default CardList;