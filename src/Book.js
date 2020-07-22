import React, { Component } from 'react';
import Selector from './Selector';

class Book extends Component {

    render () {
        const { imageLinks, title, authors } = this.props.book;
        return (
            <div className="book">
                <div className="book-top">
                    <img className="book-cover" src={imageLinks.thumbnail} alt={title}/>
                    <Selector />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.map((author) =>(<p key={author}>{author}</p>))}</div>
            </div>
        );
    }
}

export default Book;