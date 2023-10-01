
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Notes from './components/Notes/Notes';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App app__wrapper ">
     <Header className='header'/>
     <Navbar className='navbar'/>
     <div className="content">
     <Profile className='profile'/>
     </div>
    

    </div>
  );
}

export default App;
