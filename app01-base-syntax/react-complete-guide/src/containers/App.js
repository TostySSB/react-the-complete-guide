import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id:'gbhnfv', name:'Max', age: 28},
      {id:'asdfv', name: 'Manu', age: 29},
      {id:'fdsgvbb', name: 'Stephanie', age: 26}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }


  nameChangedHandler = (event, id) => {
    //console.log('Was clicked!');
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  //Use bind syntax if possible, it is more efficient
  render() {
    let persons = null;
    if (this.state.showPersons){
      persons = (
        <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
      
    }


    return (
        <div className={classes.App}>
          <Cockpit 
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            />
          {persons}
        </div>
      
    );
  }
}

export default App;
