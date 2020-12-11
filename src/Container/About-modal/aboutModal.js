import React from 'react';
import './aboutModal.css';
 



const About= ({ handleClose, showModal }) => {
  const showHideClassName = showModal ? "modal display-block" : "modal display-none";

return (
    <div className={showHideClassName}>
      <div className='container about '>
        <div className='about'>
          <div className='about'>
              <h1>ABOUT US</h1>
              
              <h3>GOAL</h3>
              <p>
              To ensure that every resident of plateau state has equitable 
              access to quality and affordable healthcare 
              service when the needs arises... 
              </p>
              
              <h3>VISION</h3>
              <p>
              
              Ensure access to Affordable, Equitable Timely And quality healthcare
               with financial security of all resident of
                plateau state irrespective of their socioeconomic status...
              </p>
                
              
              <h3>OUR MISSION</h3>
              <p>
                To ensure access to quality healthcare and financial protection for all residents
                 of plateau state using a healthcare financing mechanism structured
                  through a mandatory pooling of cost and risk with fair utilization
                  of all available resources, ensuring public and private sector participation 
                  that leads to an equitable distribution of healthcare resources 
                  across the state for an efficient healthcare services deliver.
              </p>
              <button className="" onClick={handleClose}>Close</button>
         
        </div>
        </div>
        </div>
    </div>
        
      
);
};


export default About;