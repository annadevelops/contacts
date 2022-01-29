import React from "react";

//creating App with properties i.e. props so the index.js can be rendered dynamically - each props e.g. name or img or phone or email must be also defined in the index.js to set them 
function App(props) {
 
    return(
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img
            className="circle-img"
            src={props.img}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
    )
  
}

export default App;
