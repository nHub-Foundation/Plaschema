import React from 'react';
import './app.css';
import Body from '../Body-Component/body';


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
        
        <Body/>
      </div>
    );
  }
}

export default App;
