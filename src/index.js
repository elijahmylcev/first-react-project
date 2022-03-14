import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

// const element = <h2>Hello World</h2>;

const element = React.createElement('h2', { className: 'greetings' }, 'Hello world!!!');

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  element,
  document.getElementById('root'),
);
