import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class MainView extends Component {
  render() {
    return (
      <>
        {this.props.children}
      </>
    );
  }
}

MainView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};