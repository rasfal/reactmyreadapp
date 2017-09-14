import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    books: [],
    shelf: ['currentlyReading', 'wantToRead', 'read']
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  onUpdateShelfSrch = (book, shelf) => {
    let bookList = this.state.books;
    book.shelf = shelf;
    bookList.push({ ...book });
    this.setState({ books: bookList });
  };

  onUpdateShelf = (id, shelf) => {
    let book,
      bookList = this.state.books;

    bookList.filter(item => {
      if (item.id === id) {
        book = item;
        book.shelf = shelf;
      }
      return false;
    });
    BooksAPI.update(book, shelf);

    this.setState({ books: bookList });
  };

  render() {
    const { books, shelf } = this.state;

    return (
      <BrowserRouter>
        <div className="app">
          <Route
            exact
            path="/"
            render={() =>
              <ListBooks
                books={books}
                shelf={shelf}
                onUpdateShelf={this.onUpdateShelf}
              />}
          />
          <Route
            path="/search"
            render={() =>
              <SearchBooks
                books={books}
                shelf={shelf}
                onUpdateShelfSrch={this.onUpdateShelfSrch}
              />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
