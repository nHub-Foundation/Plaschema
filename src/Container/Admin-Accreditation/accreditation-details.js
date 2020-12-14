import React from 'react';
import './accreditation.css'



const AccreditationDetail = ({ person, selectedMenu }) => {
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
                                <div className="ui segment details ">
                                    <img src={item.url} alt="something" />
                                    <h3>Name Of Organization{}</h3>
                                    <p>Key contact Details:{item.albumId}</p>
                                    <p>Status: {item.thumbnailUrl}</p>
                                    <p>Expiry Date: {item.thumbnailUrl}</p>
                                    <a>link to CAC documents</a>
                                    <div className="accredit-btn">
                                        <button class="">Approve</button>
                                        <button class="">Query</button>
                                        <button class="">Reject</button>
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

export default AccreditationDetail;