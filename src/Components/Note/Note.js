import React, { Component } from "react";
import SideBar from "../SideBar/SideBar";
import DeleteBtn from "../DeleteBtn";
import PropTypes from "prop-types";

export default class Note extends Component {
  render() {
    const { match, notes, folders } = this.props;
    const idNote = match.params.notesId;
    const thisNote = notes.find((note) => note.id === idNote) || {};
    const noteFolderId = thisNote.folderId || "";
    const parentFolder =
      folders.find((folder) => folder.id === noteFolderId) || {};

    return (
      <div>
        <SideBar />
        <div>
          <p>{parentFolder.name}</p>
        </div>
        <h3>Name: {thisNote.name}</h3>
        <p>Date modified: {thisNote.modified}</p>
        <p>Content: {thisNote.content}</p>
        <DeleteBtn history={this.props.history} deleteId={idNote} />
      </div>
    );
  }
}

Note.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  folders: PropTypes.arrayOf(PropTypes.object).isRequired,
};
