import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import AppContext from '../../AppContext';

 class SideBar extends Component {  

  static contextType = AppContext; 

  render() {
    console.log('this is the context', this.context);
    const template = this.context.folders ? (
      <div className="sidebar">
        <ul>Folders</ul>
        {this.context.folders.map((folder) => (
          <NavLink key={folder.id} to={{ pathname: `/folder/${folder.id}` }}>
            <li>{folder.name}</li>
          </NavLink>
        ))}
      </div>
    ) : (
      <>
      <h2>Folder: {this.props.folderName[0].name}</h2>
          <button
            type="button"
            onClick={() => {
              this.props.history.goBack();
            }}
          >Back
          </button>
      </>
    );

    return ( 
      <>
        {template}
        </>
    );
  } 
}

export default withRouter(SideBar)