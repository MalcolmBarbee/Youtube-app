import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state={
      userNames: [        
        "Mo",
        "Taq",
        "Liz",
      ],
      inputState: "",
      }
    }
  
  onUserNameChange (newUserName) {
    this.setState(function() {
      return {inputState: newUserName}
    })
  }

  onUserAdd() {
    this.setState(function(prevState){
      return {
        userNames: prevState.userNames.concat([prevState.inputState])
      }
    })
  }

  render () {
    return( 
      <div>
      <form>
        <h2>Create a New User</h2>
        <input 
          type="text"
          placeholder="User's Name"
          onChange={onUserNameChange}
        />
        <button 
          onClick={onUserAdd} 
          // function(e){e.preventDefault();
          // console.log("I was clicked");
         >Add</button>
      </form>
      <h2>User List</h2>
      <ul>
        {
          this.state.userNames.map(
            userName=><li>{
              userName
            }</li>
            )
        }
      </ul>
      </div>
    )
    }
  }
 
export default NameForm;
