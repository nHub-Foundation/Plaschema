import React from 'react';
import './footer.css';

class Footer extends React.Component{
    state = {
            show: false,
            subInput: ""
        }
    

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
                    <button>about us</button>
                    <button>faq</button>
                    <button>contact us</button>
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
                            <button onClick={showMe}>Subscribe here</button>
                        )
                    }

                </div>

            </div>
        )
    }
}

export default Footer;