import React, { Component } from "react";
 
class feedEditor extends Component {
  constructor(props) {
    super(props)
    this.state={
      userFeed: [
        "Mo's Feed",
        
      ]
    }
  }
  render() {
    return (
      <div>
        <form>
          <h2>Create new Feed</h2>
          <input type="text"
          placeholder="Feed Name"
          />
          <button onClick={function(e){e.preventDefault();
         console.log("Button has been clicked")}}>Add</button>
        </form>
        <h2>Feed List</h2>
        <ul>
          {
            this.state.userFeed.map(
              userFeed=><li>
                userFeed
              </li>)
            
          }
        </ul>
      </div>
    );
  }
}
 
export default feedEditor;
