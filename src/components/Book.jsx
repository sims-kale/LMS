import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function Book(props) {



  function deleteBook() {
    console.log('Deleting book with isbn ' + props.book.isbn);

    axios.delete("http://127.0.0.1:8000/deleteBook", {
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        "isbn": props.book.isbn
      }
    }).then(() => {
        // alert("Post deleted!");
        window.location.reload();

      });
  }

  // {console.log(props.book)}
  return (
    
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>
          {props.book.publisher}<br />
          {props.book.publishyear}<br />
          {props.book.isbn}<br />
          {props.book.author}<br />
          {props.book.title}<br />
          {props.book.genre}<br />
        </Card.Text>
        <Button variant="primary" onClick={deleteBook} >Delete</Button> {" "}
        <Button variant="primary">Update</Button>
      </Card.Body>
    </Card>
  )
}

export default Book;