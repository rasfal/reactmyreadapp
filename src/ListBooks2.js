import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListBooks extends Component {
  state = {
    shelf: '',
    books: []
  };

  getChange = value => {
    console.log('Changed:' + value);
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.curReadBooks.map(curbooks =>
              <div className="bookshelf">
                <h2 className="bookshelf-title">
                  {curbooks.shelf}
                </h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.curReadBooks.map(curbooks =>
                      <li key={curbooks.title}>
                        <div className="book">
                          <div className="book-top">
                            <div
                              className="book-cover"
                              style={{
                                width: 128,
                                height: 193,
                                backgroundImage: 'url(' + curbooks.bgImage + ')'
                              }}
                            />
                            <div className="book-shelf-changer">
                              <select
                                onChange={event =>
                                  this.getChange(
                                    event.target.value,
                                    this.props.curbooks
                                  )}
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
                            {curbooks.title}
                          </div>
                          <div className="book-authors">
                            {curbooks.authors}
                          </div>
                        </div>
                      </li>
                    )}
                  </ol>
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
