import React from 'react';
import Card from '../Card/card';
import Footer from '../Footer/footer';
import './app.css';
import Header from '../Header/header';
import Body from '../Body-Component/body';
import LineChart from '../Chart/chart';
import SideMenu from '../SideMenu/sideMenu';
import AdminCard from '../Adcard/adminCard';
import Dashboard from '../Dashboard/dashboard';


 class App extends React.Component {
  state = {
    adminPage: false
  }

  switchPage = () => {
    console.log("click")
    this.setState((prevState, prevProps) => this.setState({ adminPage: !prevState.adminPage}))
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
        <Header switchPage={this.switchPage}/>

        {
          this.state.adminPage ?
          <div className= "adbody">
            <SideMenu />
            <div className="adcontent">
              <div className= "heading">
                <h1>Dashboard</h1>
              </div>
              <div className="adcards">
                {
                  items.map(item => (
                    <AdminCard key={item.id} heading={item.heading} description={item.description} buttonText={item.buttonText} />
                  ))
                }
              </div>
              <LineChart />
            </div>
            
          <div className= "dashboard">
            <Dashboard/>
          </div> :
 
          <>
            <Body />
            <div className="cards">
              {
                items.map(item => (
                  <Card key={item.id} heading={item.heading} description={item.description} buttonText={item.buttonText} />
                ))
              }
            </div>
          </>
        }
       <Footer />
      </div>
    );
  }
}


export default App;
