import React, {Component} from 'react';
import AppContext from '../AppContext';
import {withRouter} from 'react-router-dom';

class DeleteBtn extends Component{

    static contextType = AppContext;

    handleDeleteBtn = (deleteId) => {
        fetch(`http://localhost:9090/notes/${deleteId}`, 
        { method: 'DELETE', headers: { 'content-type': 'application/json' }, })
        .then(this.props.history.push('/'))
        
    }

    render(){

        return(
            <AppContext.Provider value={{folders: this.props.folders, notes: this.props.notes}}>
            <button onClick = {()=>this.handleDeleteBtn(this.props.deleteId)}>Delete</button>
            </AppContext.Provider>
        )
    }
}
export default withRouter(DeleteBtn)