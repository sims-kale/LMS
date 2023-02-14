
import Booklist from "./Booklist";
import { Button } from "react-bootstrap";
import '../App';
import { axios } from "axios";

function Dashboard() {

    function showpopup(){
      document.getElementById('id01').style.display='block';
    }
    function closepopup(){
      document.getElementById('id01').style.display='none'
    }
    function submitbtn(props) {
      console.log('Book Inserted' + props.book.isbn);
  
      axios.insert("http://127.0.0.1:8000/insertBook", {
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          "isbn": props.book.isbn
        }
      }).then(() => {
          alert("Book Inserted!");
          window.location.reload();
  
        });
    }

    return (
      <div className="parent-main">
        <Button onClick={showpopup} className= "insertbutton" >Insert New Book </Button><br/>
        <div id="id01" className="addlink">
          <span onClick={closepopup} className="close"
            title="Close addlink"></span>
          <form method="post" action="http://127.0.0.1:8000/insertBook" className="addlink-content animate">
            <div className="container">
              <label><b>ISBN No. </b></label>
              <input type="text" placeholder="Enter Isbn No." name="isbn" required/>
              <label><b>Title </b></label>
              <input type="text" placeholder="Enter book title" name="title" required/>
              <label><b>Author </b></label>
              <input type="text" placeholder="Enter author" name="author" required/>
              <label><b>Publisher </b></label>
              <input type="text" placeholder="enter publisher" name="publisher" required/>
              <label><b>Publish Year</b></label>
              <input type= "text" placeholder="Enter Publish Year" name="publishyear" required/>
              <label><b>Genre </b></label>
              <input type="text" placeholder="Enter genre" name="genre" required/>

                
                  <div className="clearfix">

                    <button type="submit" onClick={submitbtn}> Insert Book</button>
                    
                </div>
            </div>
          </form>
        </div>
        <Booklist />

      </div>


    );

  }


export default Dashboard; 
