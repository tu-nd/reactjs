import React, { Component } from "react";

export default class NoiDung extends Component {
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps cua NoiDung : " + nextProps.name);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate cua NoiDung +  " + nextProps.name);
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate cua NoiDung");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate cua NoiDung");
  }
  render() {
    console.log("render Noi Dung");
    return (
      <div>
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}
