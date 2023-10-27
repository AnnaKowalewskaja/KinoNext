import React from 'react';

import { addNoteActionCreator, updateNewNoteText } from '../../redux/notesReducer';
import StoreContext from '../../StoreContext';
import Notes from './Notes';



const NotesContainer = () => {

    return (<StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().notesPage;

            let addNote = () => {
                store.dispatch(addNoteActionCreator());
            };

            let onNoteChange = (text) => {
                store.dispatch(updateNewNoteText(text));
            };
            return <Notes notes={state.notes}
                newMessageText={state.newMessageText}
                addNote={addNote}
                noteChange={onNoteChange}
            />
        }}

    </StoreContext.Consumer>

    )
}

export default NotesContainer;