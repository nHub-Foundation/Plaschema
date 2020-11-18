import React from 'react';
import axios from 'axios';
import CardList from '../Card-List-Component/card-list';
import CardTableHeader from '../Card-List-Component/card-table-header';
import CardDetail from '../Card-List-Component/card-detail';


class App extends React.Component {
    state = { persons: [], selectedMenu: null };

   
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
    }
   

  
    onMenuSelect = (id) => {
        this.setState({selectedMenu: id });
    }


  

    render() {
        return (
          <div>
              <div className="ui grid">
                  <div className="ui row">
                      <div className="eight wide column middle">
                          <CardTableHeader />
                          <CardDetail person={this.state.persons} selectedMenu={this.state.selectedMenu} />
                      </div>
                      <div className="four wide column left">
                          Total: {this.state.persons.length} records. 
                          <CardList  user={this.state.persons} onMenuSelect={this.onMenuSelect}/>
                      </div>
                  </div>
              </div> 
          </div> 
        );
    }
}

export default App;