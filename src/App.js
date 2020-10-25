import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainView from "./Components/Home/Home";
import Note from "./Components/Note/Note";
import Folder from "./Components/Folder/Folder";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import SideBar from './Components/SideBar/SideBar';
import ErrorBoundary from "./Components/ErrorBoundary";
import Main from './Components/Main/Main';
import AppContext from './AppContext';

class App extends Component {
  state = {
    folders: [],
    notes: [],
    addNote: false,
  };

  // I put the Ajax request in component did mount because we want to have the render happen first then we want the ajax request
  componentDidMount() {
    Promise.all([
      fetch("http://localhost:9090/folders"),
      fetch("http://localhost:9090/notes"),
    ])
      .then((results) => {
        return Promise.all(results.map((res) => res.json()));
      })
      .then((data) => {
        const [folders, notes] = data;
        this.setState({
          folders,
          notes,
        });
      });
  }

  // These are the functions that manage adding folders and cards
  addNewFolder = (name) => {
    fetch(`http://localhost:9090/folders`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    })
      .then((response) => response.json())
      .then((data) => {
        const newFolder = [...this.state.folders, data];
        this.setState({ folders: newFolder });
      })

      .catch((error) => console.log("these are the errors", error));
  };

  deleteNote = (deleteId) => {
    const newNotes = this.state.notes.filter((note) => note.id !== deleteId);
    this.setState({
      notes: newNotes,
    });

    return fetch(`http://localhost:9090/notes/${deleteId}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
  };

  addNewNote = (note) => {
    fetch(`http://localhost:9090/notes`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    })
    .then((response) => response.json())
    .then(() => {
      const notes = [...this.state.notes, note];
      this.setState({ notes });
    })
    .catch((error) => console.log("these are the errors", error));
  }

  // in this render function I use composition AND Context to pass the needed values and functions to each component.
  render() {
    return (
      <ErrorBoundary>
        <AppContext.Provider
          value={{
            folders: this.state.folders,
            notes: this.state.notes,
            deleteNote: this.deleteNote,
            addNewNote: this.addNewNote,
            addNewFolder: this.addNewFolder,
          }}
        >
          <div className="App">
            <BrowserRouter>
              <Header />
              <Switch>
                <Route exact path="/">
                  <MainView>
                    <SideBar />
                    <Main notes={this.state.notes} />
                  </MainView>
                </Route>
                <Route
                  path="/note/:notesId"
                  render={(props) => (
                    <Note
                      {...props}
                      notes={this.state.notes}
                      folders={this.state.folders}
                    />
                  )}
                ></Route>
                <Route
                  path="/folder/:folderId"
                  render={(props) => <Folder {...props} />}
                />
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        </AppContext.Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
