
import styles from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Notes from './components/Notes/Notes';
import Profile from './components/Profile/Profile';
import Favorites from './components/Favorites/Favorites';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import NotesContainer from './components/Notes/NotesContainer';

function App(props) {

  return (


    <div className={styles.App + ' ' + styles.app__wrapper}>
      <BrowserRouter>
        <Header />
        <Navbar />
       
        <section className={`${styles.content}`}>
          <Routes>
            <Route path='/profile' element={<Profile
              state={props.state}
              dispatch={props.dispatch}
            />}
            />
            <Route exact path='/notes/' element={<NotesContainer
              state={props.state} 
              dispatch={props.dispatch} />}
            />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </section>

      </BrowserRouter>
    </div>

  );
}

export default App;
