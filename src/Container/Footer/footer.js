import React from 'react';
import About from '../About-modal/aboutModal';
import Contact from '../Contact-modal/contactModal';
import FaqModal from '../Faq/faqModal';
import './footer.css';
// import About modal from '../About-modal/aboutModal';

class Footer extends React.Component{
    state = {
            show: false,
            subInput: "",
            showFAQModal: false,
            showAboutModal: false,
            showContactModal: false
        }
        
        // FAQ
        showFAQ = () => {
            this.setState({ showFAQModal: true });
          };
        
        hideFAQ = () => {
            this.setState({ showFAQModal: false });
        };

        // CONTACT
        showContact = () => {
            this.setState({ showContactModal: true });
          };
        
        hideContact = () => {
            this.setState({ showContactModal: false });
        };

        // ABOUT
        showAbout = () => {
            this.setState({ showAboutModal: true });
          };
        
        hideAbout = () => {
            this.setState({ showAboutModal: false });
        };

    render(){
       const showMe = () => {
            this.setState({show: !this.state.show})
        }

        const handleChange = (e) => {
            this.setState({subInput: e.target.value})

        }

        const onSubmit = (e) => {
            e.preventDefault();
            // You wil perform the subscription logic
            console.log("YOU SUBMITTED::::: ", this.state.subInput)

            this.setState({subInput: ""});
            this.setState({show: !this.state.show})
        }

        return(
            <div className="footer">
                <div className="footer__left">
                  <div>
                    <About showModal={this.state.showAboutModal} handleClose={this.hideAbout}/>
                    <button onClick={this.showAbout}>About Us</button>
                  </div>
                  <div>
                    <Contact showModal={this.state.showContactModal} handleClose={this.hideContact}/>
                    <button onClick={this.showContact}>Contact Us</button>
                  </div>
                  <div>
                    <FaqModal showModal={this.state.showFAQModal} handleClose={this.hideFAQ}/>
                    <button onClick={this.showFAQ}>FAQ</button>
                  </div>
                </div>
                <div className="footer__right">

                    {
                        this.state.show ? (
                            <>
                                <input value={this.state.subInput} onChange={handleChange} type="text" />
                            </>
                        ): null
                    }
            
                    {
                        this.state.show ? (
                            <button type="submit" onClick={onSubmit}>Submit</button>
                        ) : (
                            <button onClick={showMe}>Subscribe Here</button>
                        )
                    }

                </div>

            </div>
        )
    }
}

export default Footer;