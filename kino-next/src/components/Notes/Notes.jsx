import NoteItem from './NoteItem/NoteItem';
import styles from './Notes.module.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NoteMessage from './NoteMessage/NoteMessage';



const Notes = () => {
    let notesDate = [{ title: 'GreenLand', id: 1, messages: ['super film', 'normal film'] },
    { title: 'A man called Otto', id: 2, messages: ['very interesting', 'good film'] },
    { title: 'Totally killer', id: 3, messages: ['super film'] },
    { title: 'The sea of trees', id: 4, messages: ['I`ll look later', 'good film',] },
    { title: 'J.Edgar', id: 5, messages: ['bad film'] }];

    let notesPosts = notesDate.map(el =>
        <Link to={'/notes/' + el.id} >
            {<NoteItem id={el.id} title={el.title} />}
        </Link>
    );

    let routesPosts = notesDate.map(el => 
    <Route
        path={'/notes/' + el.id}
        element={<NoteMessage messages={el.messages} />} />
    );

    return (
        <div>
            <section className={`${styles.notes}`}>
                <div className={`${styles.notes__titles}`}>
                    {notesPosts}
                </div>


                <div>

                    <Routes>
                        {routesPosts}


                    </Routes>

                </div>


            </section >
        </div>

    )
}

export default Notes;