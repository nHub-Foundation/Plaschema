import React from 'react';
import './app.css';
// import Body from '../Body-Component/body';
import Enrolment from '../Enrolment-Modal-Component/enrolment-modal'


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
        
        <Enrolment/>
      </div>
    );
  }
}

export default App;
