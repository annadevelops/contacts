import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';

//Creating a 'model' card so we can use App to generate dynamic card with different information
function Card(props) {
    return(
      
        <div className="card">
          <div className="top">
            <h2 className="name">{props.name}</h2>
            <Avatar img={props.img}/>
          </div>
          <div className="bottom">
            <Detail detail={props.email}/>
            <Detail detail={props.phone}/>
          </div>
        </div>
     
    )
}

export default Card;