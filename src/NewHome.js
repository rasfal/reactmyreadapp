import React, { Component } from 'react';
class NewHome extends Component {
  render() {
    console.log(this.props);
    return (
      <ol>
        {this.props.books.map(cont =>
          <li key={cont.title}>
            {cont.title}
          </li>
        )}
      </ol>
    );
  }
}

export default NewHome;
