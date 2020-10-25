import React, { Component } from "react";
import {Link} from 'react-router-dom';
import AddNote from "../AddNote";

export default class Main extends Component {
  render() {
    return (
      <div className='cardList'>
        <AddNote />
        {this.props.notes.map((note) => (
          <div key={note.id} className="card">
            <Link key={note.id} to={{ pathname: `/note/${note.id}` }}>
              <h3>Name: {note.name}</h3>
            </Link>
            <p>Date modified: {note.modified}</p>
          </div>
        ))}
      </div>
    );
  }
}
