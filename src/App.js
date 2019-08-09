import React, { Component } from 'react';
import './App.css';
import PhotoContainer from './PhotoContainer';
import Nav from './Nav';
import Search from './Search';
import axios from 'axios';
import apikey from './config.js';
import Error from './Error';
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
    this.search('butterflies');
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
          <div className="container">
            <Search onSearch={this.search} />
            <Nav isTrue={this.isTrue} onClick={this.search} />
            {
              (this.state.loading)
              ? <h3>Loading...</h3>
              :
              <Switch>
                  {/* <Route exact path="/" render={props => <PhotoContainer title="PhotoContainer" data={this.state.photos}{...props} />} /> */}
                  <Route exact path="/:query" render={props => <PhotoContainer search={this.performSearch} photos={this.state.photos}{...props} />} />
                  <Route exact path="/Cupcakes" render={props => <PhotoContainer title='PhotoContainer' photos={this.state.photos}{...props} />} />
                  <Route exact path="/Waterfalls" render={props => <PhotoContainer title='PhotoContainer' photos={this.state.photos}{...props} />} />
                  <Route exact path="/Flowers" render={props => <PhotoContainer title='PhotoContainer' photos={this.state.photos}{...props} />} />
                  <Route exact path="/Sunflowers" render={props => <PhotoContainer title='PhotoContainer' photos={this.state.photos}{...props} />} />
                  <Route component={Error} />
                </Switch>
           }
          </div>
        </div>
      </BrowserRouter>
    );
  }
}