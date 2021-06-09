import './App.css';
import CustomNavbar from './Component/Navbar';
import Header from './Component/Header';
import RowOfMovies from './Component/RowOfMovies';
import Detail from './Component/Detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route path='/' exact render={() => <CustomNavbar />} />
        <Route path='/' exact render={() => <Header />} />
        <Route
          path='/'
          exact
          render={() => <RowOfMovies title='Star Wars' />}
        />
        <Route
          path='/'
          exact
          render={() => <RowOfMovies title='The lord of the rings' />}
        />
        <Route
          path='/'
          exact
          render={() => <RowOfMovies title='Harry Potter' />}
        />
        <Route
          path='/detail/:movieId'
          exact
          render={(routerProps) => <Detail {...routerProps} />}
        />
      </Router>
    </>
  );
}

export default App;
