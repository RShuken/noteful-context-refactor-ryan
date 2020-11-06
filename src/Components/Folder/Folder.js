import React, { Component } from "react";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";
import AppContext from "../../AppContext";
import PropTypes from "prop-types";

export default class Folder extends Component {
  static contextType = AppContext;

  render() {
    const { match } = this.props;
    const idMatch = match.params.folderId;
    return (
      <>
        <SideBar />
        <Main
          notes={this.context.notes.filter((note) => note.folderId === idMatch)}
        />
      </>
    );
  }
}

Folder.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      folderId: PropTypes.string.isRequired,
    }),
  }),
};
