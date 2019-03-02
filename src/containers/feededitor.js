import React, { Component } from "react";
 
class feedEditor extends Component {
  constructor(props) {
    super(props)
    this.state={
      searchInput: "",
      usersFeed: [{
        name: "Hervey",
        feed:["food", "comics"]
      }
        
        // "Mo's Feed",
        
      ]
    }
  }
  //on change input handle change
  //console.log everyrhting typed
  render() {
    return (
      <>
      <div>
        <form>
          <h2>Create new Feed</h2>
          <input type="text"
          onChange={
            (e)=>{
              console.log(e)
            }
          }
          placeholder="Feed Name"
          />
          <button onClick={function(e){e.preventDefault();
         console.log("Button has been clicked")}}>Add</button>
        </form>
        <h2>Feed List</h2>
        <ul>
          {
            this.state.usersFeed.map(
              userFeed=><li>
                userFeed
              </li>)
            
          }
        </ul>
      </div>
      </>
    );
  }
}
 
export default feedEditor;
