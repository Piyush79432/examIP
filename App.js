// import logo from './logo.svg';
import FirstFunction from './FirstFunction';
import FirstClass from './FirstClass';
import './App.css';
import { Routes, Route,BrowserRouter as Router, Link  } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Single Page Application React Router</h1>
      <ul>
        <li>
          <Link to="/FirstFunction">FirstFunction</Link>
        </li>
        <li>
        <Link to ="/FirstClass">FirstClass</Link>
        </li>
      </ul>
    </div>
    <Routes>
      <Route path='/FirstFunction' element={<FirstFunction />}></Route>
      <Route path='/FirstClass' element={<FirstClass />}></Route>
    </Routes>
    </Router>

  );
}

export default App;
