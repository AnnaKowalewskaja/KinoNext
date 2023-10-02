
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Notes from './components/Notes/Notes';
import Profile from './components/Profile/Profile';
import Favorites from './components/Favorites/Favorites';

import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
   

      <div className="App app__wrapper ">
         <BrowserRouter>
        <Header />
        <Navbar />
        
        <div className="content">
        <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </div>

        </BrowserRouter>
      </div>
   
  );
}

export default App;
