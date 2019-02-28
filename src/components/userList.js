import React, { Component } from "react";
 
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'What username would you like?',
      username: ''
      usernameError: {username: ''},
      usernameValid: false //
        }; // displayed value will be this.state.value

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 
export default UserList;
