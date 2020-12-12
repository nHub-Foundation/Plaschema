import React from 'react';
import './subscription.css'


const SubscriptionDetail = ({ person, selectedMenu }) => {
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
                                    <h3>Subscription Code{}</h3>
                                    <p>Subscription Type:{item.albumId}</p>
                                    <p>Name of Beneficiary: {item.thumbnailUrl}</p>
                                    <p>Enrollment ID of Beneficiary: {item.thumbnailUrl}</p>
                                    <p>Amount: {item.thumbnailUrl}</p>
                                    <p>Date of Subscription: {item.thumbnailUrl}</p>
                                    <p>Status of Subscription: {item.thumbnailUrl}</p>
                                </div>
                            </div>
                        )
                    }
                }) : null
            }
        </div>
    )



};

export default SubscriptionDetail;