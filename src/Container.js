import React, { Component } from 'react';
import './Container.scss';
import TextField from './components/textField.js';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "test",
      isPalindrome: ""
    };
    this.reverseText = this.reverseText.bind(this);
    this.checkPalindrome = this.checkPalindrome.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  reverseText(input) {
    return input.toLowerCase().replace(/\s/g, "").split('').reverse().join('')
  }

  checkPalindrome(input) {
    return (input.toLowerCase().replace(/\s/g, "") === this.reverseText(input)) ? this.setState({isPalindrome: 'True'}) : this.setState({isPalindrome: 'False'});
  }

  handleChangeText(e) {
    let newText = e.target.value;
    this.setState({text: newText});
    this.checkPalindrome(e.target.value);
  }

  render() {
    let arrowStyle = this.state.style;
    console.log(arrowStyle);
    return (
      <div className="container">
      <div className="text">
        <h1> Check Palindrome </h1>
          <i className="fa fa-refresh" aria-hidden="true"></i>
          <TextField
          text={this.state.text}
          onChange={this.handleChangeText}
          />
          <h2 className="output"> {this.state.isPalindrome} </h2>
        </div>
      </div>
    )
  }
}

export default Container;
