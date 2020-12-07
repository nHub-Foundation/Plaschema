import React from 'react';
import './faqModal.css';
 



const faqModal= ({ handleClose, showModal }) => {
  const showHideClassName = showModal ? "modal display-block" : "modal display-none";

    return (
    <div className={showHideClassName}>
    <div class='container enrolment'>
        <div class='card enrolment'>
            <div class='card-detail'>
                <h1>FAQ</h1>
                <p>
                Ask any questions or make enquiries...
                </p>
                <button className="" onClick={handleClose}>Close</button>
            </div>

        </div>
    </div>

    </div>

    );
};


export default faqModal;