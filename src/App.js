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

  render() {
    const { books, shelf } = this.state;

    return (
      <BrowserRouter>
        <div className="app">
          <Route
            exact
            path="/"
            render={() => <ListBooks books={books} shelf={shelf} />}
          />
          <Route path="/search" render={() => <SearchBooks books={books} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
