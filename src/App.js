import React from 'react';
import Screen from "./Screen";
import List from "./List"
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      people: []
    }
    this.getPepole = this.getPepole.bind(this);
  }

getPepole(){
  const randomed = Math.floor(Math.random() * 10) + 1;
  return axios.get("https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/" + randomed)
  .then(respone => { 
    this.setState({
      people: respone.data
    })
})
.catch(err => console.log(err))

}

componentDidMount(){
this.getPepole();

}
  render(){
    const people = this.state.people;
    return (
         <div className="App">
           <List people={people}/>
           <button onClick={this.getPepole} className="btn">Click Me</button>
         </div>
     );
  }

}

export default App;
