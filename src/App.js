import React from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoContainer from './PhotoContainer';
import Nav from './Nav';
import Search from './Search';

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
