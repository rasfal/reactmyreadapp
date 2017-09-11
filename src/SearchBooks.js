import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  state = {
    bookQuery: '',
    books: []
  };

  searchBooks(bookQuery) {
    this.setState({ bookQuery });
    if (bookQuery) {
      BooksAPI.search(bookQuery, 20).then(books => {
        this.setState({ books });
      });
    }
  }

  render() {
    const { books, bookQuery } = this.state;
    const { onUpdateShelf } = this.props;

    let showingBooks;

    if (bookQuery) {
      const mtch = new RegExp(escapeRegExp(bookQuery), 'i');
      if (books.error) {
        showingBooks = books;
      } else {
        showingBooks = books.filter(
          cnt => mtch.test(cnt.title) || mtch.test(cnt.authors)
        );
      }
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
              onChange={event => this.searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results" />
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookQuery &&
              showingBooks.error === undefined &&
              showingBooks.map(book =>
                <li key={Math.random()}>
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
                        <select
                          value={book.shelf}
                          onChange={event =>
                            onUpdateShelf(book, event.target.value)}
                        >
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
