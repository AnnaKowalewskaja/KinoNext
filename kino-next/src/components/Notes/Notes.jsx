import React from 'react';
import NoteItem from './NoteItem/NoteItem';
import styles from './Notes.module.css';
import NoteMessage from './NoteMessage/NoteMessage';



const Notes = (props) => {

    let notesPosts = props.notes.map(el =>
        <NoteItem id={el.id} title={el.title} />
    );

    let notesMessage = props.notes.map(el =>
        <NoteMessage id={el.id} messages={el.messages} />
    );

    let newNoteArea = React.createRef();



    let onNoteChange = () => {
        let text = newNoteArea.current.value;
        props.noteChange(text);
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
                        value={props.newMessageText}
                        onChange={onNoteChange}
                        className={`${styles.notes_area}`}
                        ref={newNoteArea}
                        name="add note"
                        id="add-note"
                        cols="30"
                        rows="3" />


                    <button className={`${styles.notes__add}`}
                        onClick={props.addNote}>Add note
                    </button>
                </div>


            </section >
        </div>

    )
}

export default Notes;