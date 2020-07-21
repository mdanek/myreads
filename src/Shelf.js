import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
    render () {
        return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
                <ul className="books-grid">
                    {this.props.bookList.map((element, id) => (<li key={id}>
                    <Book book={this.props.bookList[id]}/></li>))}
                </ul>
            </div>
        </div>
        );
    }
}

export default Shelf;