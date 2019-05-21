import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    inString: "",
    inLength: 0,
    charArray: [],
  }

  inStringChangedHandler = (event) => {
    let inString = event.target.value;
    let charCopyArray = inString.split('');
    this.setState({inString: inString});
    this.setState({inLength: inString.length});
    this.setState({charArray: charCopyArray})
  }

  deleteCharHandler = (charIndex) => {
    const chars = [...this.state.charArray];
    chars.splice(charIndex,1);
    console.log('Character successfully removed from the array');
    this.setState({charArray: chars});
    this.setState({inString: chars.join('')});
    this.setState({inLength: chars.length});
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type="text" name="inString" value={this.state.inString} onChange={this.inStringChangedHandler}></input>
        <p>The length of the input is: {this.state.inLength}</p>
        <ValidationComponent inLength={this.state.inLength} />
        {this.state.charArray.map((char,index) => {
          return(
            <CharComponent letter={char} key={index} click={() => this.deleteCharHandler(index)} />
          )
        })}
      </div>
    );
  }
}

export default App;
