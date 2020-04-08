import React, { Component } from "react";
import NoiDung from "./component/NoiDung";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai1: "Khoi tao",
      trangthai2: "Khoi tao2",
    };
  }

  componentWillMount() {
    console.log("componentWillMount chay roi!");
  }
  componentDidMount() {
    console.log("componentDidMount chay roi!");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate chay roi!");
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate chay roi!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate chay roi!");
  }
  capNhatState = () => {
    this.setState({
      trangthai1: " Trang Thai 1 da duoc update",
      trangthai2: " Trang Thai 2 da duoc update",
    });
  };
  render() {
    console.log(this.state.trangthai1);
    return (
      <div className="App">
        <NoiDung name={this.state.trangthai2} />
        <button onClick={() => this.capNhatState()}>Click Here!</button>
      </div>
    );
  }
}
