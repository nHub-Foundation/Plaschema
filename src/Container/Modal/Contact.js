import React from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#root')
Modal.setAppElement(document.getElementById('root'));
 
function Contact(){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <div>
        <button onClick={openModal}>Contact Us</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="id">User Identity:</label>
            <input id="text" type="text" /><br/><br/>

            <label htmlFor="email">Email:</label>
            <input id="email" type="text" /><br/><br/>

            <label htmlFor="message">Message:</label>
            <input id="text" type="text" /><br/><br/>
            
            <button type="submit">Send Message</button>
          </form><br/>
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    );
}

export default Contact;