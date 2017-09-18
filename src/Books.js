import React, { Component } from 'react';
import './App.css';

class Books extends Component {
  render() {
    const { books, onUpdateShelf } = this.props;

    let listBooks; // This variable places the books in their respective shelves
    listBooks = books.filter(book => book.shelf === this.props.shelves);

    return (
      <ol className="books-grid">
        {listBooks.map(book =>
          <li key={Math.random()}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                      'url(' +
                      (book.imageLinks
                        ? book.imageLinks.thumbnail
                        : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif') +
                      ')'
                  }}
                />
                <div className="book-shelf-changer">
                  <select
                    value={book.shelf}
                    onChange={event =>
                      onUpdateShelf(book.id, event.target.value)}
                  >
                    <option value="none" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">
                {book.title}
              </div>
              <div className="book-authors">
                {book.authors ? book.authors.join(', ') : book.authors}
              </div>
            </div>
          </li>
        )}
      </ol>
    );
  }
}

export default Books;
