import React, { useState } from 'react';
import './App.css';
import data from './data';
import Navbar from './Navbar.js';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
     <Navbar />
     {data.map((item, index) => 
        <Card key={index} {...item} /> 
      )}
    </div>
  );
}

export default App;
