import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import App, { Button } from './App';
import './index.css';

// const element = React.createElement('h2', { className: 'greetings' }, 'Hello world!!!');

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
`;

ReactDOM.render(
  <StrictMode>
    <App />
    <BigButton as="a">Example</BigButton>
  </StrictMode>,
  document.getElementById('root'),
);
