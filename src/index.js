import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';



ReactDOM.render(
  //Each App can be created but set dynamically to different info instead of hard coding it - but .render() can only takes one HTML element so need to wrap all the Apps in a single div
  <div>
    <App
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"/>
    <App
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="+987 654 321"
        email="jack@nowhere.com"
        />
  </div>
  ,
  document.getElementById('root')
);
