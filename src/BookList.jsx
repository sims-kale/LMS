import React from "react";

class BookList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        Book: []
      };
    }
  
    componentDidMount() {
      fetch("http://127.0.0.1:8000/getBooks")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              Book: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, Book } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {Book.map(Book => (
              <li key={Book.id}>
                <li>{Book.isbn}</li>
                <li>{Book.author}</li>
                <li>{Book.publisher}</li> 
                <li>{Book.publishyear}</li>
                <li> {Book.genre}</li>
              </li>
            ))}
          </ul>
        );
      }
    }
  }
  export default BookList;