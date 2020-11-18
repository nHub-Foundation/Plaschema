import React from 'react';
import './app.css';
import Appointment from '../Appointment-Modal-Component/appointment-modal';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    }
  }

  render() {
    return (
      <div className="App">
        
        <Appointment/>
      </div>
    );
  }
}

export default App;
