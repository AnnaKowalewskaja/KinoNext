import React from 'react';

import { addNoteActionCreator, updateNewNoteText } from '../../redux/notesReducer';
import Notes from './Notes';



const NotesContainer = (props) => {
    let state = props.state;



    let addNote = () => {
        props.dispatch(addNoteActionCreator());
    };

    let onNoteChange = (text) => {
        props.dispatch(updateNewNoteText(text));
    };


    return (
        <Notes notes={state.notesPage.notes}
            newMessageText={state.notesPage.newMessageText}
            addNote={addNote}
            noteChange={onNoteChange}
        />
    )
}

export default NotesContainer;