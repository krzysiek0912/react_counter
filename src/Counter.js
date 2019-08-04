import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  componentDidMount() {
    console.log("Ładujemy dane z serwera");
  }
  componentWillMount() {
    console.log("Podpinam jakieś EventListener");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "sprawdzam czy propsy się zmieniły aby nie renderować niepotrzebnie componentu"
    );
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("Manipulacje DOM");
  }
  componentWillUnmount() {
    console.log("Odpinam EventListener");
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{"Licznik " + this.state.counter}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
