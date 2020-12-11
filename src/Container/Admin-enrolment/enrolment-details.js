import React from 'react';
import './enrolment.css'


const EnrolmentDetail = ({ person, selectedMenu }) => {
    if (!person) {
        return <div>Loading...</div>
    }

    return (
        <div>
             {
                person.length ? person.map((item) => {
                    if (item.id === selectedMenu) {
                        return (
                            <div key={item.id}>
                                <div className="ui segment details">
                                    <img src={item.url} alt="something" />
                                    <h3>{item.id}</h3>
                                    <p>Enrolment ID:{item.albumId}</p>
                                    <p>Gender: {item.thumbnailUrl}</p>
                                    <p>Status: {item.thumbnailUrl}</p>
                                    <p>Ward: {item.thumbnailUrl}</p>
                                    <p>Primary Facility: {item.thumbnailUrl}</p>
                                    <div className="enrol-btn">
                                        <button class="ui green button">Approve</button>
                                        <button class="ui green button">Query</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }) : null
            }
        </div>
    )



};

export default EnrolmentDetail;