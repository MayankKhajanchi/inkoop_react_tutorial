import React, { Component } from 'react';
import Person from './Person';

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
  render() {
    return (
      <div className="App"> 
        <Person click={this.test2.bind(this, "test2Binding")} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person click={() => this.test3("HEY HOE")} name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person click={this.test4} name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <button onClick={this.test.bind(this, "Binding")}>Change</button>
        <button onClick={this.test2}>Revert</button>  
      </div>
    );
  }
}

export default App;