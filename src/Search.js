import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import SearchBar from './SearchBar';
import Book from './Book';

class Search extends Component {

state = {
    books: [],
    query: ''
}

/*componentDidMount() {
    this.searchForBook();
}*/

queryUpdate = (event) => {
    this.setState({
        query: event.target.value
    })
}

searchForBook = (event) => {
    if(event) {
        BooksAPI.search(event.target.value).then((books) => 
        this.setState({books: books})).then(this.queryUpdate(event));
    }
    console.log(this.state.books)
}

render () {
    return (
        <div className="search-books">
            <SearchBar 
                clickSearch={this.props.clickSearch}
                query={this.state.query}
                queryUpdate={this.queryUpdate}
                searchForBook={this.searchForBook}
            />
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.books.map((book) => 
                        (<li key={book.id}>{book.title/*<Book book={book} />*/}</li>)
                    )}
                </ol>
            </div>
        </div>
    );
}
}

export default Search;