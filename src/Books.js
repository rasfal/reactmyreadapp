import React, { Component } from 'react';
import './App.css';

class Books extends Component {
  render() {
    const { books, shelves } = this.props;

    let listBooks; // This variable filters the books array to match with the shelf passed
    listBooks = books.filter(book => book.shelf === shelves);

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
                    backgroundImage: 'url(' + book.imageLinks.thumbnail + ')'
                  }}
                />
                <div className="book-shelf-changer">
                  <select>
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
                {book.authors}
              </div>
            </div>
          </li>
        )}
      </ol>
    );
  }
}

export default Books;
