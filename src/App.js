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

  // function used when the shelf is updated in the search page
  onUpdateShelfSrch = (book, shelf) => {
    let bookList = this.state.books;
    //If the user updates the same book which is already in state then remove it
    //and push it back with updated shelf
    let bookremoved = bookList.filter(function(el) {
      return el.id !== book.id;
    });

    // updating the shelf and push to the list
    book.shelf = shelf;
    bookremoved.push({ ...book });

    BooksAPI.update(book, shelf);

    this.setState({ books: bookremoved });
  };

  // function used when the shelf is updated in the main page
  onUpdateShelf = (id, shelf) => {
    let book,
      bookList = this.state.books;

    //using fiter
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
