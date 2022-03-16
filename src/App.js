import './App.css';
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
    </div>
  );
}

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

export default App;
