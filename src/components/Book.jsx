import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function main(props) {

  function updatepopup() {
    document.getElementById("id02").style.display = "block";
    document.getElementById("bisbn").value = props.book.isbn;
    document.getElementById("bauthor").value = props.book.author;
    document.getElementById("btitle").value = props.book.title;
    document.getElementById("bpublisher").value = props.book.publisher;
    document.getElementById("bpyear").value = props.book.publishyear;
    document.getElementById("bgenre").value = props.book.genre;
  }

  function closepopup() {
    document.getElementById("id02").style.display = "none";
  }

  function deleteBook() {
    console.log("Deleting book with isbn " + props.book.isbn);

    axios
      .delete("http://127.0.0.1:8000/deleteBook", {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          isbn: props.book.isbn,
        },
      })
      .then(() => {
        alert("Post deleted!");
        window.location.reload();
      });
  }

  function updateBook() {
    props.book.genre = document.getElementById("bgenre").value;
    props.book.publishyear = document.getElementById("bpyear").value;
    props.book.isbn = document.getElementById("bisbn").value;
    props.book.author = document.getElementById("bauthor").value;
    props.book.title = document.getElementById("btitle").value;
    props.book.publisher = document.getElementById("bpublisher").value;

    let newbook = props.book;
    newbook.isbn = document.getElementById("bisbn").value;

    console.log("Updating book with isbn " + props.book.isbn);

    axios.put("http://127.0.0.1:8000/updateBook", { props: props }).then(() => {
      console.log("updating book");
      window.location.reload();
    });

    axios
      .put("http://127.0.0.1:8000/updateBook", {
        data: props.book,
      })
      .then((response) => {
        console.log(response);
      });
  }

  // {console.log(props.book)}

  return (
   <div>
    
    <Card style={{ width: '18rem' }} className= "bg-transparent bg-opacity-40 backdrop-blur-sm">
      
      <Card.Body className="bg-transparent bg-opacity-40 backdrop-blur-sm">
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
        <Button onClick={updatepopup} variant="primary">Update</Button>
        
      </Card.Body>
    </Card>
  </div>
    
  //    <div className="parent-main">
  //    <div id="id02" className="addlink">
  //      <span onClick={closepopup} className="close" */
    /* title="Close addlink"></span> */
    /* //      <form method="put" action="http://127.0.0.1:8000/updateBook" className="addlink-content animate">
  //        <div className="container">
  //          <label><b>ISBN No. </b></label>
  //          <input type="text" placeholder="Enter Isbn No."  id="bisbn" name="isbn" required/>
  //          <label><b>Title </b></label>
  //          <input type="text" placeholder="Enter book title" id="btitle" name="title" required/>
  //          <label><b>Author </b></label>
  //          <input type="text" placeholder="Enter author" id="bauthor" name="author" required/>
  //          <label><b>Publisher </b></label>
  //          <input type="text" placeholder="enter publisher" id="bpublisher" name="publisher" required/>
  //          <label><b>Publish Year</b></label>
  //          <input type= "text" placeholder="Enter Publish Year" id="bpyear" name="publishyear" required/>
  //          <label><b>Genre </b></label>
  //          <input type="text" placeholder="Enter genre" name="genre" id="bgenre" required/>

        

  //              <div className="clearfix">

  //                <button onClick={updateBook}> Update Book</button>
                 
  //            </div>
  //        </div>
  //      </form>
   
  //            </div> */
    /* </div> */
  );
}
