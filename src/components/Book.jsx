import React from "react";
import Button from "react-bootstrap/button";
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
  function showpopup() {
    document.getElementById("id02").style.display = "flex";
  }

  function deleteclose() {
    document.getElementById("id03").style.display = "none";
  }
  function deletePopup() {
    document.getElementById("id03").style.display = "flex";
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
    <>
      <div>
        <Card
          style={{ width: "18rem" }}
          className="bg-transparent bg-opacity-40 backdrop-blur-sm"
        >
          <Card.Body className="bg-transparent bg-opacity-40 backdrop-blur-sm">
            <Card.Title>{props.book.title}</Card.Title>
            <Card.Text>
              {props.book.publisher}
              <br />
              {props.book.publishyear}
              <br />
              {props.book.isbn}
              <br />
              {props.book.author}
              <br />
              {props.book.title}
              <br />
              {props.book.genre}
              <br />
            </Card.Text>
            <div>
              <div className="bg-white mt-4 mb-4">
                <button type = 'button'
                  className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl"
                  onClick={deletePopup}
                >
                  Delete
                </button>
              </div>
            </div>
            <div>
            <div  id = "id03"className="box-content">
              <p> Are sure you want to delete this book ?</p>
              
              <div className="flex flex-row space-x-20">
                <div className="bg-white p-3 rounded ">
                  <button type="button" onClick={deleteBook}>
                    Yes
                  </button>
                </div>
                <div className="bg-white p-3 rounded ">
                  <button type="button" onClick={deleteclose}>
                    Close
                  </button>
                </div>
                </div>
              </div>
            </div>

            <div className="bg-white mt-4 mb-4">
              <button
                className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl"
                onClick={showpopup}
              >
                Update
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div></div>
      {/* <div id="id02" className="w-full fixed inset-0 bg-transparent bg-opacity-95 backdrop-blur-sm flex justify-center items-center">
  <form class="w-full max-w-lg justify-center items-center bg-black p-8 " >
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Title
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="btitle"
                  type="text"
                  placeholder="Enter Title of Book"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  ISBN
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="bisbn"
                  type="text"
                  placeholder="Enter ISBN"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Author
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="bauthor"
                  type="text"
                  placeholder="Enter Author Name"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Publisher
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="bpublisher"
                  type="text"
                  placeholder="Enter Publisher"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Genre
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="bgenre"
                  type="text"
                  placeholder="Genre"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Publish Year
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="bpyear"
                  type="number"
                  placeholder="Publish Year"
                />
              </div>
              <div className="bg-white p-3 rounded   ">
                <button type="button" onClick={updateBook}>
                  Submit
                </button>
              </div>
            </div>
          </form>
          </div>
          <div>
            <div className="bg-white p-3 rounded">
              <button onClick={()=>closepopup()}> close </button>
            </div>
          </div> */}

      {/* <div className="parent-main">
     <div id="id02" className="addlink">
       <span onClick={closepopup} className="close" 
     title="Close addlink"></span> 
          <form method="put" action="http://127.0.0.1:8000/updateBook" className="addlink-content animate">
         <div className="container">
           <label><b>ISBN No. </b></label>
           <input type="text" placeholder="Enter Isbn No."  id="bisbn" name="isbn" required/>
           <label><b>Title </b></label>
           <input type="text" placeholder="Enter book title" id="btitle" name="title" required/>
           <label><b>Author </b></label>
           <input type="text" placeholder="Enter author" id="bauthor" name="author" required/>
           <label><b>Publisher </b></label>
           <input type="text" placeholder="enter publisher" id="bpublisher" name="publisher" required/>
           <label><b>Publish Year</b></label>
           <input type= "text" placeholder="Enter Publish Year" id="bpyear" name="publishyear" required/>
           <label><b>Genre </b></label>
           <input type="text" placeholder="Enter genre" name="genre" id="bgenre" required/>

        

               <div className="clearfix">

                <button onClick={updateBook}> Update Book</button>
                 
             </div>
         </div>
       </form>
   
             </div> 
     </div>  */}
    </>
  );
}
