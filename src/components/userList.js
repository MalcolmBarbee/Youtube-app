import React, { Component } from "react";
import { wrap } from "module";

class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state={
      userNames: [        
        "Mo",
        "Taq",
        "Liz"  
      ]
      }
    }
  



  render () {

    return( 
      <div>
      <form>
        <h2>Create a New User</h2>
        <input type="text"
        placeholder="User's Name"
        />
        <button onClick={function(e){e.preventDefault();
          console.log("I was clicked")}}>Add</button>
      </form>
      <h2>User List</h2>
      <ul>
        {
          this.state.userNames.map(
            userName=><li>{
              userName
            }</li>)
        }
{/*function(userName) {return <li>{userName}</li>})*/}
      </ul>
      </div>
    )

    }
  }
 
export default NameForm;
