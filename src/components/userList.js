import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state={
      userNames: [],
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
          onChange={this.onUserNameChange}
        />
        <button 
          onClick={this.onUserAdd} 
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

// import React, { Component } from "react";

// class Users extends Component {
//   constructor (props) {
//     super(props)
    
//     this.state = {
//       userNames: [],
//       inputState: ""
//     }
    
//     this.onInputChange = this.onInputChange.bind(this)
//     this.onUserAdd = this.onUserAdd.bind(this)
//   }
  
//   onInputChange (event) {
//     var newState = event.target.value
//     this.setState(() => {
//       return {
//         inputState: newState,
//       }
//     })
//   }
  
//   onUserAdd (event) {
//     event.preventDefault()
//     this.setState(prevState => {
//       return {
//         userNames: userNames.concat([prevState.inputState]),
//         inputState: "",
//       }
//     })
//   }
  
//   render () {
//     return(
//       <div>
//         <form>
//           <h2>Create a new user</h2>
//           <input
//             type="text"
//             placeholder="User's name"
//             onChange={this.onInputChange}
//           />
//           <button
//             onClick={this.onUserAdd}
//           >Add</button>
//         </form>
//         <h2>User List</h2>
//         <ul>
//           {this.state.userNames.map(name => <li>{name}</li>)}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Users;