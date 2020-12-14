import React from 'react';
import './report.css'



const ReportDetail = ({ person, selectedMenu }) => {
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
                                <div className="ui segment details report">
                                    <h3>Name Of Facility{}</h3>
                                    <p>Facility ID:{item.albumId}</p>
                                    <p>Locatio :{item.albumId}</p>
                                    <p>No. Of Enrollees:{item.albumId}</p>
                                    <p>No. Of Encounters:{item.albumId}</p>
                                    <table class="ui celled table report">
                                        <thead>
                                            <tr>
                                                <th>Code</th>
                                                <th>Service</th>
                                                <th>Beneficiary</th>
                                                <th>Amount</th>
                                                <th>Rating</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-label="Code"></td>
                                                <td data-label="Service">{}</td>
                                                <td data-label="beneficiary">{}</td>
                                                <td data-label="Amount">{}</td>
                                                <td data-label="Rating">{}</td>
                                            </tr>
                                            <tr>
                                                <td data-label="Code"></td>
                                                <td data-label="Service">{}</td>
                                                <td data-label="beneficiary">{}</td>
                                                <td data-label="Amount">{}</td>
                                                <td data-label="Rating">{}</td>
                                            </tr>
                                            <tr>
                                                <td data-label="Code"></td>
                                                <td data-label="Service">{}</td>
                                                <td data-label="beneficiary">{}</td>
                                                <td data-label="Amount">{}</td>
                                                <td data-label="Rating">{}</td>
                                            </tr>
                                            <tr>
                                                <td data-label="Code"></td>
                                                <td data-label="Service">{}</td>
                                                <td data-label="beneficiary">{}</td>
                                                <td data-label="Amount">{}</td>
                                                <td data-label="Rating">{}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p>Total Amount: {}</p>
                                    <div className="report-btn">
                                        <button class="">Approve</button>
                                        <button class="">Query</button>
                                        <button class="">Reject</button>
                                    </div>
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

export default ReportDetail;