import React from 'react';
import './contactModal.css';
 



const Contact = ({ handleClose, showModal }) => {
  const showHideClassName = showModal ? "modal display-block" : "modal display-none";

return (
  <div className={showHideClassName}>
  <div class='container contact'>
      <div class=' contact'>
          <div class='contact'>
              <h1>CONTACT US</h1>
              <address>
              HEAD OFFICE
              53 Hospital Place,behind Plateau State Specialist Hospital.Jos,Nigeria.  
              </address>
              <div>
              <strong>EMAIL US</strong> <br/>       
              <a href="mailto: plaschema@plateaustate.gov.ng">plaschema@plateaustate.gov.ng </a>  
              </div>
              <br/>
              <div>
              <strong>CONTACT PHONE</strong> <br/>
              <a href="tel:+2347007528328">0700 752 8328</a>,
              <a href="tel:+2349065599457."> 0906 559 9457</a>
              </div>
              <button className="" onClick={handleClose} >Close</button>
          </div>

      </div>
  </div>

</div>

);
};
export default Contact;