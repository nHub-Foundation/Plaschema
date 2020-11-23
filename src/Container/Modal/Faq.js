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
 
function Faq(){
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
        <button onClick={openModal}>FAQs</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2>FAQs</h2>

          <form>
          <p>What are your enquiries?</p>
          <label htmlFor="messages">Questions:</label>
          <input id="text" type="text" /><br/><br/>
          <button type="submit">Send Message</button>
          </form><br></br>

          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    );
}

export default Faq;