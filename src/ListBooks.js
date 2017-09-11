import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Books from './Books';

class ListBooks extends Component {
  render() {
    const { books, shelf, onUpdateShelf } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelf.map(shelves =>
              <div key={Math.random()} className="bookshelf">
                <h2 className="bookshelf-title">
                  {shelves}
                </h2>
                <div className="bookshelf-books">
                  <Books
                    books={books}
                    shelves={shelves}
                    onUpdateShelf={onUpdateShelf}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
