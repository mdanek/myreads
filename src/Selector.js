import React, { Component } from 'react';

class Selector extends Component {
    change = () => { console.log(this.props.book)}
    render () {
        return (
            <div className="book-shelf-changer">
                        <select onChange={() => this.props.updateBook(this.props.book, 'read')}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
        );
    }
}

export default Selector;