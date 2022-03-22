import PropTypes from 'prop-types';
import { Component } from 'react';
import styled from 'styled-components';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .20);
  a {
    display: block;
    color: ${(props) => (props.active ? 'orange' : 'black')};
  }
  input {
    display: block;
    margin: 0 auto;
  }
`;
const Header = styled.h2`
  font-size: 22px;
`;
export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid black;
  box-shadow: 5px 5px 10px rgba(0,0,0,.2)
`;
class WhoAmI extends Component {
  constructor() {
    super();
    this.state = {
      years: 1,
      position: '',
    };
    this.increment = this.increment.bind(this);
  }

  commitInputChanges(e) {
    this.setState({
      position: e.target.value,
    });
  }

  increment() {
    this.setState((state) => ({
      years: state.years + 1,
    }));
  }

  render() {
    const { ...props } = this.props;
    const { ...state } = this.state;
    return (
      <EmpItem active>
        <Button onClick={this.increment} type="submit">Increment</Button>
        <Header>
          <br />
          My name is
          { props.name}
          ,
          <br />
          {' '}
          surname -
          { props.surname}
          ,
          <br />
          age -
          { state.years}
          ,
          <br />
          position -
          { state.position}
        </Header>
        <a href={props.link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={this.commitInputChanges} />
        </form>
      </EmpItem>
    );
  }
}
const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

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
      <Wrapper>
        <WhoAmI name={this.person.name} surname={this.person.surname} link={this.person.link} />
      </Wrapper>
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
