import React, { Component } from 'react';
import AppContext from '../AppContext';
 


class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folderName: "",
      touched: false,
    };
  }

  static contextType = AppContext;

  updateFolderName = (name) => {
    this.setState({ folderName: name, touched: true });
  };

  validateFolderName = () => {
    const folderName = this.state.folderName.trim();
    if (folderName.length === 0) {
      return "A folder name is required";
    } else if (folderName.length < 3) {
      return "The folder name must be more than two characters long";
    } else if (folderName.length > 20) {
      return "The folder name can not be longer than 20 characters";
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.addNewFolder(this.state.folderName);
    e.target.value = ''
    this.setState({folderName: " "})
  };

  render() {
    const { match } = this.props;

    return (
      <form
        type="submit"
        className="add_folder_form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <label htmlFor="addForm">Add new folder</label>
        <input
          id="addForm"
          type="text"
          defaultValue=""
          onChange={(e) => this.updateFolderName(e.target.value)}
        />
        <button id="addForm" disabled={this.validateFolderName()}>
          Add +
        </button>
        <input type="reset" defaultValue="Reset" />
        {this.state.touched && <p>{this.validateFolderName()}</p>}
      </form>
    );
  }
}
 
export default AddFolder;