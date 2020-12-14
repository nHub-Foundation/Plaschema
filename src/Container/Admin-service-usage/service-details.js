import React from 'react';
import './service.css'



const ServiceDetail = ({ person, selectedMenu }) => {
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
                                <div className="ui segment details service">
                                    <h3>Name Of Enrollee{}</h3>
                                    <p>Enrolment ID:{item.albumId}</p>
                                    <table class="ui celled table service">
                                        <thead>
                                            <tr>
                                                <th>Code</th>
                                                <th>Service</th>
                                                <th>facility</th>
                                                <th>Amount</th>
                                                <th>Rating</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-label="Code"></td>
                                                <td data-label="Service">{}</td>
                                                <td data-label="facility">{}</td>
                                                <td data-label="Amount">{}</td>
                                                <td data-label="Rating">{}</td>
                                            </tr>
                                            <tr>
                                                <td data-label="Code"></td>
                                                <td data-label="Service">{}</td>
                                                <td data-label="facility">{}</td>
                                                <td data-label="Amount">{}</td>
                                                <td data-label="Rating">{}</td>
                                            </tr>
                                            <tr>
                                                <td data-label="Code"></td>
                                                <td data-label="Service">{}</td>
                                                <td data-label="facility">{}</td>
                                                <td data-label="Amount">{}</td>
                                                <td data-label="Rating">{}</td>
                                            </tr>
                                            <tr>
                                                <td data-label="Code"></td>
                                                <td data-label="Service">{}</td>
                                                <td data-label="facility">{}</td>
                                                <td data-label="Amount">{}</td>
                                                <td data-label="Rating">{}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p>Amount: {}</p>
                                </div>
                            </div>
                        )
                    }
                    return null;
                }) : null
            }
        </div>
    )



};

export default ServiceDetail;