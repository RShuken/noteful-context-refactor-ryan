import React, { Component } from "react";

// import {Route} from 'react-router-dom';

export default class MainView extends Component {
  render() {
    return (
      <>
        {this.props.children}
      </>
    );
  }
}
