import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Book from './Book';

class Search extends Component {
    render () {
        return (
            <div className="search-books">
                <SearchBar clickSearch={this.props.clickSearch}/>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        );
    }
}

export default Search;