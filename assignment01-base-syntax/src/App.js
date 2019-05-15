import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username1: 'Tosty',
    username2: 'Danish'
  }
  changeUsernameHandler = (event) =>{
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change)
  }
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <UserOutput username={this.state.username1}/>
            <UserInput change={this.changeUsernameHandler} username={this.state.username1} index='username1'/>
            <UserOutput username={this.state.username2} />
            <UserInput change={this.changeUsernameHandler} username={this.state.username2} index='username2'/>
        </header>
      </div>
    );
  }
}

export default App;
