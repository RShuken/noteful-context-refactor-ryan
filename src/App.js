import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainView from "./Components/Home/Home";
import Note from "./Components/Note/Note";
import Folder from "./Components/Folder/Folder";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import SideBar from './Components/SideBar/SideBar';
import Main from './Components/Main/Main';
import AppContext from './AppContext';

class App extends Component {
  state = {
    folders: [],
    notes: []
  };


  componentDidMount() {
    fetch(`http://localhost:9090/folders`)
      .then(response => response.json())
      .then(folders => this.setState({folders}))
    fetch(`http://localhost:9090/notes`)
      .then((response) => response.json())
      .then((notes) => this.setState({notes}));
  }


  render() {
    return (
      <AppContext.Provider value={{folders: this.state.folders, notes: this.state.notes}}>
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
                render={(props) => (
                  <Folder
                    {...props}
                    folders={this.state.folders}
                    notes={this.state.notes}
                  />
                )}
              />
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
