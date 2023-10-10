import NoteItem from './NoteItem/NoteItem';
import styles from './Notes.module.css';


const Notes = () => {
    let notesDate = [{ title: 'GreenLand', id: 1 },
    { title: 'A man called Otto', id: 2 },
    { title: 'Totally killer', id: 3 },
    { title: 'The sea of trees', id: 4 },
    { title: 'J.Edgar', id: 5 }];

    let notesPosts = notesDate.map(el => <NoteItem id={el.id} title={el.title} />)

    return (
        <section className={`${styles.notes}`}>
            <div className={`${styles.notes__title}`>
            {notesPosts}
            </div>
            
            <div>
                messages
            </div>
        </section >
    )
}

export default Notes;