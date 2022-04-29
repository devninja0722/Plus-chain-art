import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mint from './pages/Mint';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/mint" element={ <Mint /> } />
      </Routes>
    </Router>
  );
}

export default App;
