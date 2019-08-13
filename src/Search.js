//import react component and react, also the router
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
//clearing the search field after a search
class Search extends Component {
    state = {
        searchText: ''
    }
    //executing the search
    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }
    //handling the submition of the search input
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.state.searchText);
        let query = this.state.searchText;
        let path = `/search/${query}`;
        this.props.history.push(path);
        this.props.onSearch(this.state.searchText, true);

        //clearing the search field again 
        e.currentTarget.reset();
    }

    //format and handling of the search box/button
    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="search"
                    onChange={this.onSearchChange}
                    name="searchText"
                    ref={(input) => this.query = input}
                    placeholder="Search..." />
                <button type="submit" className="search-button">
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                </button>
            </form>
        )
    };
}
//exporting component
export default withRouter(Search);