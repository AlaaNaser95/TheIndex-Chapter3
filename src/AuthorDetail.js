import React, { Component } from "react";
import Book from "./Book";
class AuthorDetail extends Component {
  render() {
    const books = this.props.currentAuthor.books.map(book => (
      <Book book={book} key={book.title} />
    ));
    return (
      <div className="author col-xs-10">
        <div>
          <h3>
            {`${this.props.currentAuthor.first_name}
             ${this.props.currentAuthor.last_name}`}
          </h3>
          <img
            src={this.props.currentAuthor.imageUrl}
            className="img-thumbnail"
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{books}</tbody>
        </table>
      </div>
    );
  }
}
export default AuthorDetail;
