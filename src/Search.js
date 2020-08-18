import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import SearchBar from './SearchBar';
import Book from './Book';

class Search extends Component {

state = {
    query: ''
}

checkUndefined = (book) => {
    if(typeof book.imageLinks === 'undefined'){
      book.imageLinks = {thumbnail: "https://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
    }
    if(typeof book.authors === 'undefined'){
      book.authors = ["Unknown"]
    }
}

queryUpdate = (event) => {
    this.setState({
        query: event.target.value
    })
}

render () {
    this.props.books.map((book) => this.checkUndefined(book));
    
    return (
        <div className="search-books">
            <SearchBar 
                clickSearch={this.props.clickSearch}
                query={this.state.query}
                queryUpdate={this.queryUpdate}
                searchForBook={this.props.searchForBook}
            />
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.books.map((book) => 
                        (<li key={book.id}><Book book={book} updateBook={this.props.updateBook} />}</li>)
                    )}
                </ol>
            </div>
        </div>
    );
}
}

export default Search;