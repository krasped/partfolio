import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/'; //благодаря вебпэку ищет index.js в папке

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

