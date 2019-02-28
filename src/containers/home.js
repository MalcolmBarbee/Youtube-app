import React, { Component } from "react";
import Feed from './feed';

class Home extends Component {
  constructor(props) {
    super(props) 

    this.state={
      feedList:['food']
    }
  }
  render() {
    return (
      <div>
        {
          this.state.feedList.map((feed,i) =>{
            return <Feed search= {feed}/>
          })
        }
  
      </div>
    );
  }
}
 
export default Home;