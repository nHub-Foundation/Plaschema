import React from 'react';
import Card from '../Card/card';
import Footer from '../Footer/footer';
import './app.css';
import Header from '../Header/header';
import SideMenu from '../SideMenu/sideMenu';
import AdminCard from '../Adcard/adminCard';


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
        icon: "asdoiasdhausi",
        heading: "150K",
        description: "Total Enrolments",
        buttonText: "Enrol Today"

      },

      {
        id: 2,
        icon: "asdoiasdhausi",
        heading: "450",
        description: "Facilities Accredited",
        buttonText: "Apply Today"

      },

      {
        id: 3,
        icon: "asdoiasdhausi",
        heading: "120K",
        description: "Active subscriptions",
        buttonText: "Pay Subscription"

      },

      {
        id: 4,
        icon: "asdoiasdhausi",
        heading: "3650+",
        description: "Healthcare Professionals",
        buttonText: "Book Appointment"

      }
    
    ]
    return (
      <div className="App">
        <Header />
        <h1>PLASCHEMA</h1>
        <div className="cards">
          {
            items.map(item => (
              <Card key={item.id} icon="" heading={item.heading} description={item.description} buttonText={item.buttonText} />
            ))
          }
         </div>
         <div className="cards">
         {
            items.map(item => (
              <AdminCard key={item.id} icon="" heading={item.heading} description={item.description} />
            ))
          }
         </div>

        <SideMenu/>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
