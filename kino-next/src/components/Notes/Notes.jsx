import React from 'react';
import NoteItem from './NoteItem/NoteItem';
import styles from './Notes.module.css';
import NoteMessage from './NoteMessage/NoteMessage';
import { addNoteActionCreator, updateNewNoteText } from '../../redux/State';



const Notes = (props) => {

    let notesPosts = props.notesPage.notes.map(el =>
        <NoteItem id={el.id} title={el.title} />
    );

    let notesMessage = props.notesPage.notes.map(el =>
        <NoteMessage id={el.id} messages={el.messages} />
    );

    let newNoteArea = React.createRef();
    let addNote = () => {
        props.dispatch(addNoteActionCreator());
    };

    let onNoteChange = () => {
        let text = newNoteArea.current.value;
        props.dispatch(updateNewNoteText(text));
    };


    return (
        <div>
            <section className={`${styles.notes}`}>
                <div className={`${styles.notes__titles}`}>
                    {notesPosts}
                </div>


                <div className={`${styles.notes__titles}`}>
                    {notesMessage}

                    <textarea
                    value = {props.notesPage.newMessageText}
                    onChange={onNoteChange}
                        className={`${styles.notes_area}`}
                        ref={newNoteArea}
                        name="add note"
                        id="add-note"
                        cols="30"
                        rows="3" />


                    <button className={`${styles.notes__add}`}
                        onClick={addNote}>Add note
                    </button>
                </div>


            </section >
        </div>

    )
}

export default Notes;