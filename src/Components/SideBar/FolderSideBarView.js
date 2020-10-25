import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import AppContext from "../../AppContext";
import AddFolder from '../AddFolder';

class FolderSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: true,
    };
  }

  updateFolderNav = () => {
    this.setState({ touched: false });
  };

  static contextType = AppContext;

  render() {
    const { match } = this.props;
    console.log(match.params)
    //const idMatch = match.params;
     return (
      <div className="sidebar">
        <h2>Folder: {this.context.folders[0].name}</h2>
        <button
          type="button"
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          Back
        </button>
      </div>
    );


  }
}

export default withRouter(FolderSideBar);
