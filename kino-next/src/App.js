
import styles from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import FinderContainer from './components/Finder/FinderContainer';

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
            <Route path='/profile' element={<Profile />} />
            <Route exact path='/notes/' element={<NotesContainer />} />
            <Route path='/finder' element={<FinderContainer />} />
          </Routes>
        </section>

      </BrowserRouter>
    </div>

  );
}

export default App;
