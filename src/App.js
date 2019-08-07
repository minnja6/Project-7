import React, { Component } from 'react';
import './App.css';
import PhotoContainer from './PhotoContainer';
import Nav from './Nav';
import Search from './Search';
import NotFound from './NotFound';
import axios from 'axios';
import apikey from './config.js';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() { 
    this.search(); 
  }

  isTrue = (isTrue = true) => {
    this.setState({
      loading: isTrue
    });
}
    search = (searchResults, isTrue = false) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${searchResults}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  render() {
    console.log(this.state.photos);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">PhotoSearch</h1>
            <Search />
          </div>
        </div>
        <div className="main-content">
          <PhotoContainer data={this.state.photos} />
        </div>
      </div>
    )
  }
}
