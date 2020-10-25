import React, { Component } from "react";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";
import AppContext from '../../AppContext';

export default class Folder extends Component {
 
  static contextType = AppContext;

  render() {  
    const { match, folders } = this.props;
    const idMatch = match.params.folderId;
    return (
      <>
        <SideBar />
        <Main notes={this.context.notes.filter(note => note.folderId === idMatch)} />
      </>
    );
  }
}
