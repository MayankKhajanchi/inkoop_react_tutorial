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
      ],
      showPerson: true
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
  toggle = () => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }
  deletePerson = (personIndex) => {
    const newPersons = this.state.persons;
    newPersons.splice(personIndex, 1);
    this.setState({
      persons: newPersons
    })
  }
  
  render() {
    
    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
                      click={() => this.deletePerson(index)}
                      key={person.name} 
                      name={person.name} 
                      age={person.age}/>
          })}  
        </div>
      )
    }
    
    return (
      <div className="App"> 
      <button className="btn" onClick={this.toggle}>Toggle</button>
        {
          this.state.showPerson ? 
            <div>
              {persons}
              <div className="Person2">
                <button className="btn btn2" onClick={this.test.bind(this, "Binding")}>Change</button>
                <button className="btn" onClick={() => this.test2("Mayank")}>Revert</button>  
              </div>
            </div> : null
          }
      </div>
    );
  }
}

export default App;