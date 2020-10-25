import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import AppContext from '../../AppContext';
import AddFolder from "../AddFolder";
import FolderSideBarView from './FolderSideBarView';

 class SideBar extends Component {
   constructor(props) {
     super(props);
     this.state = {
       touched: true,
     };
   }


    updateFolderNav = () => {
      this.setState({touched: false})
    }

   static contextType = AppContext;

   render() {



     const template = this.state.touched ? (
       <div className="sidebar">
         <h2>Folders</h2>
         <ul>
         {this.context.folders.map((folder) => (
           <NavLink key={folder.id} onClick={e => this.updateFolderNav()} to={{ pathname: `/folder/${folder.id}` }}>
             <li>{folder.name}</li>
           </NavLink>
         ))}
         </ul>
           <AddFolder />
       </div>
     ) : (<FolderSideBarView />);

     return <>{template}</>;
   }
 }

export default withRouter(SideBar)