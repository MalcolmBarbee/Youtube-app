import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state={
      userNames: [],
      currentUser: '',
      inputState: "",
      }
    }
  
  onUserNameChange = (e) => {
    this.setState({inputState: e.target.value});
  }

  onUserAdd = () => {
    const newUserList = [...this.state.userNames]

    newUserList.push(this.state.inputState)

    this.setState( {userNames: newUserList} )
    this.setState( {currentUser: this.state.inputState} )

  }

  render () {
    console.log(this.state)
    return( 
      <div>
      <form>
        <h2>Create a new User</h2>
        <input 
          type="text"
          placeholder="User's Name"
          onChange={this.onUserNameChange}
        />
        <button 
          onClick={this.onUserAdd} 
          // console.log("I was clicked");
         >Add</button>

      </form>
      <ul className="list-group">
        <li className="list-group-item active">{this.userNames}</li>
        <li className="list-group-item">userNames[]</li>
      </ul>
      <h2>User List</h2>
      <ul>
        {
          this.state.userNames.map(
            userNames=><li>{
              userNames
            }</li>
            )
        }
      </ul>
      </div>
    )
    }
  }
 
export default NameForm;





