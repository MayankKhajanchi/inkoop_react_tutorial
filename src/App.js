import React, { Component } from 'react';
import Person from './Person';
import './Person.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: [
        {name: 'Mayank', age: 22},
        {name: 'Bert', age: 23},
        {name: 'Ernie', age: 25}
      ]
    }
  }
  test = (newName) => {
    this.setState({
      persons:[
        {name: newName, age: 32},
        {name: 'Fart', age: 33},
        {name: 'Burn', age: 35}
      ]
    })
    console.log("0th");
    
  }
  test2 = (newName) => {
    this.setState({
      persons:[
        {name: newName, age: 22},
        {name: 'Bert', age: 23},
        {name: 'Ernie', age: 25}
      ]
    })
    console.log("1st");
  }
  test3 = (newName) => {
    this.setState({
      persons:[
        {name: newName, age: 22},
        {name: 'Bert', age: 23},
        {name: 'Ernie', age: 25}
      ]
    })
    console.log("2nd");
  }
  test4 = () => {
    this.setState({
      persons:[
        {name: '3rd', age: 22},
        {name: 'Bert', age: 23},
        {name: 'Ernie', age: 25}
      ]
    })
    console.log("3rd");
  }

  newEvent = (event) => {
    this.setState({
      persons:[
        {name: "Mayank", age: 22},
        {name: 'Bert', age: 23},
        {name: event.target.value, age: 25}
      ]
    })
  }

  render() {
    return (
      <div className="App"> 
        <div>
          <Person click={this.test2.bind(this, "test2Binding")} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person click={() => this.test3("HEY HOE")} name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person changed={this.newEvent} name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
        <div className="Person2">
        <button className="btn btn2" onClick={this.test.bind(this, "Binding")}>Change</button>
        <button className="btn" onClick={() => this.test2("Mayank")}>Revert</button>  
        </div>
      </div>
    );
  }
}

export default App;