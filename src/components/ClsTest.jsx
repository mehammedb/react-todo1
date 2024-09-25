import React, { Component } from "react";

class ClsTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: 0,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDrivedStateFromProps");
    return null;
  }

  componentDidMount() {
    setInterval(
      () =>
        // console.log("setInterval"),
        this.setState((p) => ({
          first: p.first + 1,
        })),
      1000
    );
    console.log(
      `componentDidMount-------------------------${this.state.first}`
    );
  }
  render() {
    console.log("render");
    return <div>ClsTest</div>;
  }
}

export default ClsTest;
