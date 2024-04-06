import React, { useState } from 'react';
import './App.css';
import Burger from './components/Burger';
import Navbar from './components/Navbar';

function App() {
  const [currentPrice, setCurrentPrice] = useState(0); // Define and initialize currentPrice state

  return (
    <div className="burgerContent">
      <Burger />
      <Navbar currentPrice={currentPrice} /> {/* Pass currentPrice to Navbar */}
    </div>
  );
}

export default App;
