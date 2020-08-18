import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {

shelfName = (name) => {
 switch (name) {
    case 'currentlyReading' : return 'Currently Reading'
    case 'wantToRead' : return 'Want to Read'
    case 'read' : return 'Read'
    case 'none' : return 'None'
    default : return 'None'
 }
}

render () {
    return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{this.shelfName(this.props.name)}</h2>
        <div className="bookshelf-books">
            <ul className="books-grid">
                {this.props.books.map((book) => book.shelf === this.props.name
                    && (<li key={book.id}><Book book={book} updateBook={this.props.updateBook} /></li>)  
                )}
            </ul>
        </div>
    </div>
    );
}
}

export default Shelf;