//importing necessary exported components  
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
//Initializing local state by assigning objects to this.state.
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      prevSearch: '',
      loading: true
    };
  }
  //Initialization that requires DOM node. /Needed to load data from remote endpoint
  componentDidMount() {
    this.search('tropical birds');
  }
  // creating a function to allow the pictures to load when a nav button is clicked
  isTrue = (isTrue = true) => {
    this.setState({
      loading: true
    });
  }
  //creating a search function
  search = (searchResults, isTrue = false) => {
    if (searchResults !== this.state.prevSearch) {
      this.setState({
        prevSearch: searchResults,
        loading: true
      })
    }
    //fetching photo data using axios 
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${searchResults}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  //importing the Search and Nav components and calling the search function using this.search
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container">
            <Search onSearch={this.search}/>
            {/* importing the nav buttons and making them functional/search upon clicking */}
            <Nav isTrue={this.isTrue} onClick={this.search} />

            {
              //extra credit loading requirement
              (this.state.loading)
                ? <h3>Loading...</h3>
                :
                //creating routes for error, root, and search
                <Switch>
                  <Route exact path="/" render={(props) => <PhotoContainer title="PhotoContainer" data={this.state.photos}{...props} />} />
                  <Route exact path="/search/:query" render={(props) => <PhotoContainer search={this.search} photos={this.state.photos}{...props} />} />
                  <Route component={Error} />
                </Switch>
            }
          </div>
        </div>
      </BrowserRouter>
    );
  }
}