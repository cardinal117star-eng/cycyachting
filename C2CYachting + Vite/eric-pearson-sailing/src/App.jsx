// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Credentials from './pages/Credentials';
import './index.css';

function App() {
  return (
    <Router basename="/eric-pearson-sailing"> {/* SAME AS vite.config.js base */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credentials" element={<Credentials />} />
      </Routes>
    </Router>
  );
}

export default App;