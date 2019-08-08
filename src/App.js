import React, { Component } from 'react';
import './App.css';
import PhotoContainer from './PhotoContainer';
import Nav from './Nav';
import Search from './Search';
import axios from 'axios';
import apikey from './config.js';
import {
  BrowserRouter,
  Switch,
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
    this.search('cake');
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
          photos: response.data.photos.photo,
          loading: isTrue
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div>
          <div className="main-container">
            <Search onSearch={this.search} />
            <Nav isTrue={this.isTrue} onClick={this.search} />
            {
              (this.state.loading)
              ? <h3>Loading...</h3>
              :
              <Switch>

              </Switch>
           }
            <PhotoContainer photos={this.state.photos} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}