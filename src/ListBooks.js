import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListBooks extends Component {
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
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
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
                              <option value="currentlyReading" default>
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
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.wantToRead.map(wantbooks =>
                    <li key={wantbooks.title}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage: 'url(' + wantbooks.bgImage + ')'
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
                              <option value="wantToRead" default>
                                Want to Read
                              </option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">
                          {wantbooks.title}
                        </div>
                        <div className="book-authors">
                          {wantbooks.authors}
                        </div>
                      </div>
                    </li>
                  )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.read.map(readbooks =>
                    <li key={readbooks.title}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 192,
                              backgroundImage: 'url(' + readbooks.bgImage + ')'
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
                              <option value="read" default>
                                Read
                              </option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">
                          {readbooks.title}
                        </div>
                        <div className="book-authors">
                          {readbooks.authors}
                        </div>
                      </div>
                    </li>
                  )}
                </ol>
              </div>
            </div>
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
