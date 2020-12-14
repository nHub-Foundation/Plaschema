import React from 'react';
import axios from 'axios';
import './dashboard.css';
import SearchBar from '../Search-bar/search-bar';
// import LineChart from '../Chart/chart';
import AdminCard from '../Adcard/adminCard';
import SideMenu from '../SideMenu/sideMenu';
import EnrolmentHeader from '../Admin-enrolment/enrolment-header';
import EnrolmentDetail from '../Admin-enrolment/enrolment-details';
import EnrolmentList from '../Admin-enrolment/enrolment-list';
import AccreditationHeader from '../Admin-Accreditation/accreditation-header';
import AccreditationDetail from '../Admin-Accreditation/accreditation-details';
import AccreditationList from '../Admin-Accreditation/acccreditation-list';
import SubscriptionHeader from '../Admin-subscription/subscription-header'
import SubscriptionDetail from '../Admin-subscription/subscription-details';
import SubscriptionList from '../Admin-subscription/subscription-list';
import ServiceHeader from '../Admin-service-usage/service-header';
import ServiceDetail from '../Admin-service-usage/service-details';
import ServiceList from '../Admin-service-usage/service-list';
import ReportHeader from '../Admin-Report/report-header'
import ReportDetail from '../Admin-Report/report-details';
import ReportList from '../Admin-Report/report-list';

class Dashboard extends React.Component {
    state = { persons: [], selectedMenu: null, pages:"" };

   
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
            this.onSearchSubmit('person');

          })
    }
    

    onSearchSubmit = async (term) => {
        const response = await axios.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ persons: response.data.item, selectedMenu: response.data.item[0] });
    }

  
    onMenuSelect = (id) => {
        this.setState({selectedMenu: id });
    }

    onPageSelect = (page) => {
        this.setState({pages: page})
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

        if(this.state.pages ==='dashboard') {
            return (
            <div>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="three wide column">
                            <SideMenu onPageSelect={this.onPageSelect} />
                        </div>
                        <div className="twelve wide column">
                        <div className="adcards">
                            {
                            items.map(item => (
                                <AdminCard key={item.id} heading={item.heading} description={item.description} buttonText={item.buttonText} />
                            ))
                            }
                        </div>
                          {/* <LineChart />  */}
                        </div>
                       
                    </div>
                </div> 
            </div> 
            )
        };

        if(this.state.pages === 'enrolment') {
            return (
                <div>
                <div className="ui grid dashboard">
                    <div className="ui row">
                        <div className="three wide column">
                            <SideMenu onPageSelect={this.onPageSelect} />
                        </div>
                        <div className="eight wide column middle">
                            <EnrolmentHeader />
                            <EnrolmentDetail person={this.state.persons} selectedMenu={this.state.selectedMenu} />
                        </div>
                        <div className="four wide column left">
                            <SearchBar onFormSubmit={this.onSearchSubmit} />
                            Total: {this.state.persons.length} records. 
                            <EnrolmentList  user={this.state.persons} onMenuSelect={this.onMenuSelect}/>
                        </div>
                    </div>
                </div> 
            </div> 
            )
        };


        if(this.state.pages === 'accreditation') {
            return (
                <div>
                <div className="ui grid dashboard">
                    <div className="ui row">
                        <div className="three wide column">
                            <SideMenu onPageSelect={this.onPageSelect} />
                        </div>
                        <div className="eight wide column middle">
                            <AccreditationHeader />
                            <AccreditationDetail person={this.state.persons} selectedMenu={this.state.selectedMenu} />
                        </div>
                        <div className="four wide column left">
                            <SearchBar onFormSubmit={this.onSearchSubmit} />
                            Total: {this.state.persons.length} records. 
                            <AccreditationList  user={this.state.persons} onMenuSelect={this.onMenuSelect}/>
                        </div>
                    </div>
                </div> 
            </div> 
            )
        };



        if(this.state.pages === 'subscription') {
            return (
                <div>
                <div className="ui grid dashboard">
                    <div className="ui row">
                        <div className="three wide column">
                            <SideMenu onPageSelect={this.onPageSelect} />
                        </div>
                        <div className="eight wide column middle">
                            <SubscriptionHeader />
                            <SubscriptionDetail person={this.state.persons} selectedMenu={this.state.selectedMenu} />
                        </div>
                        <div className="four wide column left">
                            <SearchBar onFormSubmit={this.onSearchSubmit} />
                            Total: {this.state.persons.length} records. 
                            <SubscriptionList  user={this.state.persons} onMenuSelect={this.onMenuSelect}/>
                        </div>
                    </div>
                </div> 
            </div> 
            )
        };



        if(this.state.pages === 'service') {
            return (
                <div>
                <div className="ui grid dashboard">
                    <div className="ui row">
                        <div className="three wide column">
                            <SideMenu onPageSelect={this.onPageSelect} />
                        </div>
                        <div className="eight wide column middle">
                            <ServiceHeader />
                            <ServiceDetail person={this.state.persons} selectedMenu={this.state.selectedMenu} />
                        </div>
                        <div className="four wide column left">
                            <SearchBar onFormSubmit={this.onSearchSubmit} />
                            Total: {this.state.persons.length} records. 
                            <ServiceList  user={this.state.persons} onMenuSelect={this.onMenuSelect}/>
                        </div>
                    </div>
                </div> 
            </div> 
            )
        };


        if(this.state.pages === 'report') {
            return (
                <div>
                <div className="ui grid dashboard">
                    <div className="ui row">
                        <div className="three wide column">
                            <SideMenu onPageSelect={this.onPageSelect} />
                        </div>
                        <div className="eight wide column middle">
                            <ReportHeader />
                            <ReportDetail person={this.state.persons} selectedMenu={this.state.selectedMenu} />
                        </div>
                        <div className="four wide column left">
                            <SearchBar onFormSubmit={this.onSearchSubmit} />
                            Total: {this.state.persons.length} records. 
                            <ReportList  user={this.state.persons} onMenuSelect={this.onMenuSelect}/>
                        </div>
                    </div>
                </div> 
            </div> 
            )
        };


        return (
        <div>
          <div className="ui grid">
              <div className="ui row">
                  <div className="three wide column">
                      <SideMenu onPageSelect={this.onPageSelect} />
                  </div>
                  <div className="twelve wide column">
                    <div className="adcards">
                        {
                        items.map(item => (
                            <AdminCard key={item.id} heading={item.heading} description={item.description} buttonText={item.buttonText} />
                        ))
                        }
                    </div>
                  {/* <LineChart /> */}
                  </div>
                 
              </div>
          </div> 
        </div>
      )

      
    }
}

export default Dashboard;