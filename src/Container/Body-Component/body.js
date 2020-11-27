import React from 'react';
import './body.css';
import background from '../../assets/body.jpg';





class Body extends React.Component{
    render() {
        return(
            <div class='container body'>
                <div class='body-text col-8 col-s-12'>
                    <h1>Plateau State Universal Health Care  by PLASCHEMA</h1>
                    <p>Welcome  Plateau Health portal. Our mandate is to ensure access to affordable, equitable, 
                        timely and quality healthcare, with financial security for all residents of Plateau State
                        irrespective of their socioeconomic status.
                    </p>

                    <button>Get Started</button>
                </div>
                <div class='body-image col-4 col-s-12'>
                    <img src= {background} alt="pic" />
                </div>
            </div>
        );
    }
}


export default Body;


