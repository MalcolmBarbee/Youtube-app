import React, { Component } from "react";
import Feed from './feed';
import FeedTitle from '../components/feedTitle';

class Home extends Component {
  constructor(props) {
    super(props) 

    this.state={
      feedList:['lol','adele','love']
      
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