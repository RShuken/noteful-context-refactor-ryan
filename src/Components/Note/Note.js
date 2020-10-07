import React, { Component } from "react";
import SideBar from "../SideBar/SideBar";
import DeleteBtn from '../DeleteBtn';

export default class Note extends Component {


  render() {

    const { match, notes, folders } = this.props;
    const idNote = match.params.notesId;
    const thisNote = notes.filter((note) => note.id === idNote);
    const noteFolderId = thisNote[0].folderId;
    const parentFolder = folders.filter((folder) => folder.id === noteFolderId)

    console.log(this.props)
    return (
      <div>
        <SideBar folderName={parentFolder}/>
        <div>
          <p>{folders.name}</p>
        </div>
        <h3>Name: {thisNote[0].name}</h3>
        <p>Date modified: {thisNote[0].modified}</p>
        <p>Content: {thisNote[0].content}</p>
        <DeleteBtn {...props} deleteId = {idNote}/>
      </div>
    );
  }
}
