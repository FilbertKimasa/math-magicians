import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import './styles/App.css';
import Quotes from './components/Quotes';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
