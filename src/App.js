import './App.css';
import PropTypes from 'prop-types';

// Старый метод
// class Field extends Component {
//   render() {
//     const placeHolder = 'Type here';
//     const styledField = {
//       width: '300px',
//     };
//     return (
//       <input
//         type="text"
//         placeholder={placeHolder}
//         style={styledField}
//       />
//     );
//   }
// }

// Props === {}
// import { Component } from 'react';
// Можно использовать стрелочные функции для создания компонентов
function Header() {
  return <h2>Hello world!</h2>;
}

function Field() {
  const placeHolder = 'Type here';
  const styledField = {
    width: '300px',
  };
  return (
    <input
      type="text"
      placeholder={placeHolder}
      style={styledField}
    />
  );
}

function Btn() {
  const text = 'Log in';
  // const res = () => 'Log in';
  const logged = false;
  // return <button type="submit">{res()}</button>;
  return <button type="submit">{ logged ? 'Enter' : text }</button>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
      <WhoAmI name="John" surname="Smith" link="http://facebook.com" />
    </div>
  );
}
function WhoAmI({ name, surname, link }) {
  return (
    <div>
      <h1>
        My name is
        {name}
        , surname -
        {surname}
      </h1>
      <a href={link}>My profile</a>
    </div>
  );
}
WhoAmI.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default App;
