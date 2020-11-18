import React from 'react';
import Card from '../Card/card';
import Footer from '../Footer/footer';
import './app.css';
import Header from '../Header/header';
import Body from '../Body-Component/body';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    }
  }

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
        description: "Active subscriptions",
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
        <h1>PLASCHEMA</h1>
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
