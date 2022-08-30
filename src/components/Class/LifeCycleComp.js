import React, { Component } from "react";

class LifeCycleComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("component did mount");
    this.setState({ count: 2 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("render");
    return (
      <div>
        <button>klik</button>
      </div>
    );
  }
}

export default LifeCycleComp;
