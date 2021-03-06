import React, { Component } from "react";
import AppContext from "../AppContext";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class DeleteBtn extends Component {
  //  static contextType = AppContext;

  render() {
    return (
      <AppContext.Consumer>
        {({ deleteNote }) => (
          <button
            onClick={() =>
              deleteNote(this.props.deleteId).then(this.props.history.push("/"))
            }
          >
            Delete
          </button>
        )}
      </AppContext.Consumer>
    );
  }
}
export default withRouter(DeleteBtn);

DeleteBtn.propTypes = {
  deleteId: PropTypes.string.isRequired,
};
