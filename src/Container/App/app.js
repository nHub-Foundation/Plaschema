import React from 'react';
import axios from 'axios'
import Subscription from '../Subscription-Modal-Component/subscription-modal';


import Card from '../Card/card';
import Footer from '../Footer/footer';
import './app.css';
import Header from '../Header/header';
import Body from '../Body-Component/body';



class App extends React.Component {
  constructor() {
    super();



class App extends React.Component {
  

  render() {
    const items = [
      {
        id: 1,
        heading: "150K",
        description: "Total Enrolments",
        buttonText: "Enrol Today"

      },

      {
        id: 2,
        heading: "450",
        description: "Facilities Accredited",
        buttonText: "Apply Today"

      },

      {
        id: 3,
        heading: "120K",
        description: "Active Subscriptions",
        buttonText: "Pay Subscription"

      },

      {
        id: 4,
        heading: "3650+",
        description: "Healthcare Professionals",
        buttonText: "Book Appointment"

      }
    
    ]
    return (
      <div className="App">

        <Header />
        <Body/>
        <div className="cards">
          {
            items.map(item => (
              <Card key={item.id} heading={item.heading} description={item.description} buttonText={item.buttonText} />
            ))
          }
         </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
