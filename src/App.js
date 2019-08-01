import React from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoContainer from './PhotoContainer';
import Nav from './Nav';
import Search from './Search';
const ApiKey = a992ee7166c6f76e0371547b464ce976;

function App() {
  return (
    <div className="container">

     <Search/>

      <Nav />

      <PhotoContainer />

    </div>
  );
}


export default App;
