import React, { Component } from 'react';

class SearchBar extends Component {

render () {
  return (
      <div className="search-books-bar">
          <button className="close-search" onClick={() => this.props.clickSearch(false)}>Close</button>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.props.query}
              onChange={this.props.searchForBook}
            />
          </div>
      </div>
  );
}
}

export default SearchBar;