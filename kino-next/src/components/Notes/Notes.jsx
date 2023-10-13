import NoteItem from './NoteItem/NoteItem';
import styles from './Notes.module.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NoteMessage from './NoteMessage/NoteMessage';



const Notes = (props) => {
    
    let notesPosts = props.notesPage.map(el =>
            <NoteItem id={el.id} title={el.title} />
    );

    let notesMessage = props.notesPage.map(el =>
        <NoteMessage id={el.id} messages={el.messages} />
);


    return (
        <div>
            <section className={`${styles.notes}`}>
                <div className={`${styles.notes__titles}`}>
                    {notesPosts}
                </div>


                <div className={`${styles.notes__titles}`}>
                    {notesMessage}
                </div>


            </section >
        </div>

    )
}

export default Notes;