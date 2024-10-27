import React from 'react'
import './App.css';
import Navbar from './components/navbar';
import Portraitlist from './components/Portraitlist';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <Portraitlist />
      <About />
    </div>
  )
}

export default App;
