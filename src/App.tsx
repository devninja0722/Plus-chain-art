import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Web3ModalProvider } from "./contexts/Web3ModalProvider";
import { ToastContainer } from "react-toastify";
import Home from './pages/Home';
import Mint from './pages/Mint';

const App = () => {
  return (
    <Web3ModalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mint" element={<Mint />} />
        </Routes>
      </Router>
      <ToastContainer />
    </Web3ModalProvider >
  );
}

export default App;
