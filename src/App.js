import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import NewHome from './NewHome';
import * as BooksAPI from './BooksAPI';
import './App.css';
import * as ContactAPI from './ContactAPI';

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //  screen: 'home', //search
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" render={() => <ListBooks />} />
          <Route
            path="/search"
            render={() => <SearchBooks books={this.state.books} />}
          />
        </div>
      </BrowserRouter>
      //    {this.state.screen === 'home' &&
      //    <ListBooks
      //    onSearch={() => {
      //    this.setState({ screen: 'search' });
      //    }}
      //    />}
      //  {this.state.screen === 'search' && <SearchBooks />}
    );
  }
}

export default BooksApp;
//export default withRouter(
//  connect(mapStateToProps, mapDispatchToProps)(BooksApp)//
//);
