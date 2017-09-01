import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';

class SearchBooks extends Component {
  state = {
    bookQuery: ''
  };

  updateQry = bookQuery => {
    this.setState({ bookQuery: bookQuery.trim() });
  };

  render() {
    const { bookQuery } = this.state;
    const { books } = this.props;

    let showingBooks;

    if (bookQuery) {
      const mtch = new RegExp(escapeRegExp(bookQuery), 'i');
      showingBooks = books.filter(
        cnt => mtch.test(cnt.title) || mtch.test(cnt.authors)
      );
    } else {
      showingBooks = books;
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
        NOTES: The search from BooksAPI is limited to a particular set of search terms.
        You can find these search terms here:
        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
        you don't find a specific author or title. Every search is limited by search terms.
      */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={bookQuery}
              onChange={event => this.updateQry(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results" />
        <div className="bookshelf-books">
          <ol className="books-grid">
            {showingBooks.map(book =>
              <li key={book.title}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                          'url(' + book.imageLinks.thumbnail + ')'
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select>
                        <option value="none" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">
                    {' '}{book.title}
                  </div>
                  <div className="book-authors">
                    {' '}{book.authors}
                  </div>
                </div>
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
