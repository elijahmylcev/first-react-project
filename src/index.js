import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// import styled from 'styled-components';
import App from './App';
import BootstrapTest from './BootstrapTest';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// const element = React.createElement('h2', { className: 'greetings' }, 'Hello world!!!');
// const BigButton = styled(Button)`
//   width: 245px;
//   margin: 0 auto;
// `;

ReactDOM.render(
  <StrictMode>
    <App />
    {/* <BigButton as="a">Example</BigButton> */}
    <BootstrapTest />
  </StrictMode>,
  document.getElementById('root'),
);
