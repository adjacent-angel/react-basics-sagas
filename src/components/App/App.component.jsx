import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

//import actions to be used in mapPropsToDisptach
import { addFromSaga } from '../../redux/addSub/addSub.actions';
import { addElementBySaga, setElementsBySaga } from '../../redux/element/element.action';

class App extends Component {
  state = {
    element: ''
  }

  componentDidMount() {
    console.log(this.props);
    this.props.setElements();
  }

  handleChange = event => {
      const{value, name} = event.target;
      this.setState({[name]: value});
  }

  handleSubmit = () => {
    console.log("element is: ", this.state.element);
    this.props.addElement(this.state);
    this.setState({element: ''});
  }



  render() {
    //destructure props functions and state
    const {num, increment} = this.props;

    return (
      <div>
        <h1>Redux Sagas Application</h1>
        <section>
          <h2>Value: {num.value}</h2>
          {/* 1 */}
          <button onClick={increment}>Increment</button>
          <button>Decrement</button>
        </section>
        <section>
          <h2>Elements:</h2>
          <input 
            placeholder="Element Name"
            onChange={this.handleChange}
            name="element"
            value={this.state.element}
          />
          <button onClick={() => this.handleSubmit(this.state.element)}>Add Element</button>
          <ul>
            {this.props.elements.map((element, index) => <li key={index}>{element}</li>)}
          </ul>
        </section>
        
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  elements: reduxState.elementReducer,
  num: reduxState.addSubReducer
});

//utilize actions to be dispatched to the sagas from addSub.action.js
const mapDisptachToProps = dispatch => ({
  increment: () => dispatch(addFromSaga()),
  setElements: () => dispatch(setElementsBySaga()),
  addElement: input => dispatch(addElementBySaga(input))
});
 
export default connect(mapStateToProps, mapDisptachToProps)(App);