import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAuthor: {},
      authors: authors
    };

    this.selectAuthor = this.selectAuthor.bind(this);
    this.unselectAuthor = this.unselectAuthor.bind(this);
    this.filterAuthors = this.filterAuthors.bind(this);
  }
  filterAuthors(query) {
    console.log("RUNNIN");
    const newAuthors = authors.filter(author => {
      return (
        author.first_name.toLowerCase().includes(query.toLowerCase()) ||
        author.last_name.toLowerCase().includes(query.toLowerCase())
      );
    });
    this.setState({ authors: newAuthors });
  }
  selectAuthor(author) {
    this.setState({ currentAuthor: author });
  }
  unselectAuthor(author) {
    this.setState({ currentAuthor: {} });
  }

  render() {
    const detailOrList = () => {
      if (this.state.currentAuthor.first_name) {
        return <AuthorDetail currentAuthor={this.state.currentAuthor} />;
      } else {
        return (
          <AuthorsList
            authors={this.state.authors}
            selectAuthor={this.selectAuthor}
            filterAuthors={this.filterAuthors}
          />
        );
      }
    };
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthor={this.unselectAuthor} />
          </div>
          <div className="content col-10">{detailOrList()}</div>
        </div>
      </div>
    );
  }
}

export default App;
