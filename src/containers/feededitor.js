import React, { Component } from "react";
// import NameForm from './components/userList';
 
class feedEditor extends Component {
  constructor(props) {
    super(props)
    this.state= {
      searchInput: "",
      usersFeed: [{
        name: "Hervey",
        feed:["food", "comics"]
      }
        
        // "Mo's Feed",
        
      ]
    }
  }

  feedSearch = (e) => {
console.log(e.target.value)
if(this.state.searchInput.includes('')){
  this.setState({searchInput:[]})
}
    else if (this.state.searchInput.includes(e.target.value)){
      this.state.searchInput.map((e) => {
        this.setState({userFeed:e});
      })
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
              console.log(e.target.value)
            }
          }
          placeholder="Feed Name"
          />
          <button onClick={function(e){e.preventDefault();
         console.log("Button has been clicked")}}>Add</button>
        </form>
           <h2> Feed List</h2>
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
