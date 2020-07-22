import React from 'react'
import './App.css'
import BookApp from './BookApp';
import Search from './Search';

class BooksApp extends React.Component {

state = {
  showSearchPage: false
}

clickSearch = (value) => {
  this.setState(() => ({showSearchPage: value }));
}

render() {
  return (
    <div className="app">
      {this.state.showSearchPage 
      ? <Search 
          books={this.state.books}
          clickSearch={this.clickSearch} 
        /> 
      : <BookApp 
          books={this.state.books}
          clickSearch={this.clickSearch} 
        />}
    </div>)
  }
}

export default BooksApp
