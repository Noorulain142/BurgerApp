
import React from 'react';
import './App.css';
import Burger from './components/Burger'
import Navbar from './components/Navbar'

function App() {

    return (
      <>
      <Navbar/>
      <div className="burgerContent">
        <Burger/>
      </div>
      </>
    );

}

export default App;
