import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import OneboxScreen from './components/OneboxScreen';
import './assets/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/google-login" element={<OneboxScreen />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
