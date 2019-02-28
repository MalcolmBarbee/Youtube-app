import React, { Component } from "react";
 
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'What username would you like to use?',
      username: ''
      usernameError: {username: ''},
      usernameValid: false //
        }; // displayed value will be this.state.value
  }

  handleInputChange = (e) => {
    this.setState({value: e.target.value
    });
  };

//   handleSubmit(e) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
  
  render() {
      const { username } = this.state;

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
