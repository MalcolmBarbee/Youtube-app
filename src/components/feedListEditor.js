/* THE PURPOSE OF THIS FILE is to enable Users to add (onClick or <Ent> =>
feedList.concat.addedItem) or delete (onClick X icon feedList.pop(?)) items 
from their Feed List.  The Feed List will be exported to render on Home Page, 
appropriately matched to the User, i.e., User Mo renders Mo's Feed List */ 

import React from 'react';
import './feedListEditor.css'


//write out functions
//add JSX

const feedList = props => {
    const feedList = props.feedList.feedListName;//an array of feedList names, e.g., SNL, ESPN, Music
    
    return <React.Fragment>
        <FeedLis data={props.data} onClick={props.click} />
        <PokeNameID data={props.data}></PokeNameID> 
        <PokeImages imagesData={profileImages} data={props.data} />
        <BaseStats profileData={profileStats}></BaseStats>
        <MovesTabs movesData={props.movesData} onClick={props.movesclick} />
    </React.Fragment>
}


export default feedListEditor;