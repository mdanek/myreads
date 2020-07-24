import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import BookApp from './BookApp';
import Search from './Search';

class BooksApp extends React.Component {

state = {
  books: [],
  showSearchPage: false
}

booksState = (books) => {
  this.setState(() => ({books: books }));
}

clickSearch = (value) => {
  this.setState(() => ({showSearchPage: value }));
}

searchForBook = (event) => {
  BooksAPI.search(event.target.value).then((books) => {
  if (books === 'undefined' || books.error==='empty query') 
  {
      this.setState({books: []})
  } else {
      this.setState({books: books})
  }})
}

updateBook = (book, shelf) => {
  BooksAPI.update(book, shelf).then((cos) => console.log(cos))
}

render() {
  return (
    <div className="app">
      {this.state.showSearchPage 
      ? <Search 
          books={this.state.books}
          booksState={this.booksState}
          clickSearch={this.clickSearch} 
          searchForBook={this.searchForBook}
          updateBook={this.updateBook}
        /> 
      : <BookApp 
          books={this.state.books}
          booksState={this.booksState}
          clickSearch={this.clickSearch} 
        />}
    </div>)
  }
}

export default BooksApp
