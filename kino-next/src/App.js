
import styles from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import RoutesMap from './components/RoutesMap/RoutesMap';

function App(props) {
  return (
    <div className={styles.App + ' ' + styles.app__wrapper}>
      <BrowserRouter>
        <Header />
        <Navbar />
        <section className={styles.content}>
          <RoutesMap />
        </section>
      </BrowserRouter>
    </div>
  );
}
export default App;
