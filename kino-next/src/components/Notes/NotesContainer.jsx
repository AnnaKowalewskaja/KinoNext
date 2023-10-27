import React from 'react';
import { addNoteActionCreator, updateNewNoteText } from '../../redux/notesReducer';
import Notes from './Notes';
import { connect } from 'react-redux';


// const NotesContainer = () => {

//     return (<StoreContext.Consumer>
//         {
//             (store) => {
//                 let state = store.getState().notesPage;

//                 let addNote = () => {
//                     store.dispatch(addNoteActionCreator());
//                 };

//                 let onNoteChange = (text) => {
//                     store.dispatch(updateNewNoteText(text));
//                 };
//                 return <Notes notes={state.notes}
//                     newMessageText={state.newMessageText}
//                     addNote={addNote}
//                     noteChange={onNoteChange}
//                 />
//             }}

//     </StoreContext.Consumer>

//     )
// }

let mapStateToProps = (state) => {
    return {
        notes: state.notesPage.notes,
        newMessageText: state.notesPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {


    return {
        noteChange: (text) => {
            dispatch(updateNewNoteText(text));
        },
        addNote:() => {
            dispatch(addNoteActionCreator());
        }
    }
}
const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(Notes);

export default NotesContainer;