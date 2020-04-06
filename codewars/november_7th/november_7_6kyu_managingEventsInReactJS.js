Write a react component that will display the current value of our counter.

The counter should start at 0.
There should be a button to add 1.
There should also be a button to subtract 1.
We want to be able to see the value of the counter - so it should be rendered! And for your buttons to work they will need an onClick prop.

In your render you should return:

The counter display element with an id of 'counter', containing the counter value.
An increment button with an id of 'increment'
A decrement button with an id of 'decrement'
Helpful docs on Events: https://reactjs.org/docs/handling-events.html

const React = require('react');

class Counter extends React.Component{
  constructor(props) {
// Your state
    super(props);
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
// Your event handlers 
  increment() {
    this.state.counter++;
  }
  decrement() {
    this.state.counter--;
  }
  
  render() {
    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
          <button type="button" id="increment" onClick={this.increment}>
            Decrement
          </button>
          <button type="button" id="decrement" onClick={this.decrement}>
            Increment
          </button>
      </div>
    )
  }
}

const React = require('react');

class Counter extends React.Component{
  constructor(...args) {
    super(...args);
    
    this.state = { counter: 0 };
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    const { counter } = this.state;
  
    return (
      <div>
        <h1 id="counter">{counter}</h1>
        <button id="decrement" type="button" onClick={this.handleDecrement}>
          Decrement
        </button>
        <button id="increment" type="button" onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    )
  }
}