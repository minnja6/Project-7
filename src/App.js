import React from 'react';
import './App.css';
import PhotoContainer from './PhotoContainer';
import Nav from './Nav';
import Search from './Search';
import { createConfigItem } from '@babel/core';
import './config.js';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

const App = () => ( 
    <BrowserRouter>
    <div className="container">

     <Search/>

      <Nav />

      <PhotoContainer />
      {/* <Route path="/" component={} /> */}
    </div>
    </BrowserRouter>
  );



export default App;
