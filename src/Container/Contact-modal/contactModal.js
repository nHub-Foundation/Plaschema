import React from 'react';
import './contactModal.css';
 



const Contact = ({ handleClose, showModal }) => {
  const showHideClassName = showModal ? "modal display-block" : "modal display-none";

return (
  <div className={showHideClassName}>
  <div class='container enrolment'>
      <div class='card enrolment'>
          <div class='card-detail'>
              <h1>CONTACT US</h1>
              <p>
              HEAD OFFICE
              53 Hospital Place,behind Plateau State Specialist Hospital.Jos,Nigeria.  </p>
              <br/>
              <p>
              EMAIL US
              plaschema@plateaustate.gov.ng </p>
              <br/>
              <p>
              CONTACT PHONE
              0700 752 8328, 09065599457.
              </p>
              <button className="" onClick={handleClose} >Close</button>
          </div>

      </div>
  </div>

</div>

);
};
export default Contact;