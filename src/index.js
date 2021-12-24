import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './components/tetris-app/app/app.css';
import App from './components/app'; //благодаря вебпэку ищет index.js в папке
// import App from './components/to-do-app/app';
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

