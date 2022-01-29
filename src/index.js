import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';



ReactDOM.render(
  //Each App can be created but set dynamically to different info instead of hard coding it - but .render() can only takes one HTML element so need to wrap all the Apps in a single div
  <App />
  ,
  document.getElementById('root')
);
