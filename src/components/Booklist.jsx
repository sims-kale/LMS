import React from "react";
import Book from "./Book";

class Booklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      Books: [],
    };
  }

  componentDidMount() {
    console.log("Called");
    fetch("http://127.0.0.1:8000/getBooks")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            Books: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, Books } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div class="grid grid-cols-4 gap-4">
            {Books.map((b) => (
              <Book book={b} />
            ))}
          </div>
          ;
        </div>
      );
    }
  }
}

export default Booklist;
