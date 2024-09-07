import React from 'react';
import './App.css';
import data from './data';
import Navbar from './components/Navbar.js';
import Card from './components/Card.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
     <Navbar />
     {data.map((item, index) => 
        <Card key={index} {...item} /> 
      )}
      <Footer />
    </div>
  );
}

export default App;
