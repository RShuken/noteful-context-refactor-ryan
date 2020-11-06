import React, { Component } from "react";
import AppContext from "../AppContext";

const initialState = {
  name: "",
  content: "",
  folderId: "",
  toggleForm: false,
};

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  static contextType = AppContext;

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.addNewNote({ ...this.state, modified: Date.now() });
    this.setState({ ...initialState });
  };

  changeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggleForm = () => {
    this.setState({
      toggleForm: true,
    });
  };

  renderForm = () => (
    <form type="submit" className="add_note_form" onSubmit={this.handleSubmit}>
      <label htmlFor="addNote">New Note Name</label>
      <input
        id="addNote"
        type="text"
        value={this.state.name}
        name="name"
        required
        onChange={this.changeValue}
      />
      <label htmlFor="addcontent">Note content</label>
      <textarea
        onChange={this.changeValue}
        id="addcontent"
        value={this.state.content}
        name="content"
        required
      ></textarea>
      <select
        value={this.state.folderId}
        name="folderId"
        required
        onChange={this.changeValue}
      >
        {this.context.folders.map((folder) => {
          return (
            <option key={folder.id} value={folder.id}>
              {folder.name}
            </option>
          );
        })}
      </select>
      <button type="submit">Add Note</button>
    </form>
  );

  render() {
    return this.state.toggleForm ? (
      this.renderForm()
    ) : (
      <button onClick={this.toggleForm} type="button">
        Add Note
      </button>
    );
  }
}

export default AddNote;
