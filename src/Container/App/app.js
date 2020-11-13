import React from 'react';
import './app.css';


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
        <h1>PLASCHEMA</h1>
        <p>Plateaiu state</p>
      </div>
    );
  }
}

export default App;
