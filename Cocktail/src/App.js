import logo from './logo.svg';
import React from 'react';
import './App.css';
import Cocktail from './Components/Cocktail';
import { Routes,Route } from 'react-router-dom';
import Receipeinfo from './Components/Receipeinfo';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Cocktail/>}/>
      <Route path='/:DrinkId' element={<Receipeinfo/>}/>
      </Routes>
     </>
   
  );
}

export default App;
