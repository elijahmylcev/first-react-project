import PropTypes from 'prop-types';
import { Component } from 'react';

// function Header() {
//   return <h2>Hello world!</h2>;
// }

// function Field() {
//   const placeHolder = 'Type here';
//   const styledField = {
//     width: '300px',
//   };
//   return (
//     <input
//       type="text"
//       placeholder={placeHolder}
//       style={styledField}
//     />
//   );
// }

// function Btn() {
//   const text = 'Log in';
//   // const res = () => 'Log in';
//   const logged = false;
//   // return <button type="submit">{res()}</button>;
//   return <button type="submit">{ logged ? 'Enter' : text }</button>;
// }

class WhoAmI extends Component {
  constructor() {
    super();
    this.state = {
      years: 1,
    };
  }

  increment = () => {
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  render() {
    const { ...props } = this.props;
    const { ...state } = this.state;
    return (
      <div>
        <h1>
          <button onClick={this.increment} type="submit">Increment</button>
          My name is
          { props.name}
          , surname -
          { props.surname}
          ,
          age -
          {state.years}
        </h1>
        <a href={props.link}>My profile</a>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.person = {
      name: 'John',
      surname: 'Smith',
      link: 'http://facebook.com',
    };
  }

  render() {
    return (
      <div className="App">
        <WhoAmI name={this.person.name} surname={this.person.surname} link={this.person.link} />
      </div>
    );
  }
}

WhoAmI.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

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
// Можно использовать стрелочные функции для создания компонентов

export default App;
