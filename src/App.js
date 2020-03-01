import React, {Component} from 'react';
import Items from './components/menuItems'
import './App.css';


class App extends Component {
  state = {
    items : [],
    locationId : "",
    locationTitle : ""
  };

  server = "http://frontend-challenge-api.pepperhq.com/menu.json"
  componentDidMount() {
    fetch(this.server , { method : 'GET' , mode : 'cors' })
    .then(res => {
     return res.json()
    })
    .then(data => {
      this.setState({ 
        items : data.items || [],
        locationId : data.locationId,
        locationTitle : data.locationTitle
        })
    })
    .catch(console.log)
  }
  render() {
     return (
       <div>
      <center><h1>{this.state.locationTitle}</h1></center>
      <center><h2>{this.state.locationId}</h2></center>
      <Items items={this.state.items} />
      </div>
    )
  }
}


export default App;
