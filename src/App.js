// src/App.js
import React from 'react';
import Header from './component/Header';
import TicketGrid from './component/TicketGrid';
import './App.css';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <TicketGrid />
      <Footer />
    </div>
  );
}

export default App;