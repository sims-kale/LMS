import React, { Component } from "react";
import Booklist from "./Booklist";
import { Button } from "react-bootstrap";


class Dashboard extends Component {

  

  render() {

    function showpopup(){
      document.getElementById('id01').style.display='block';
    }
    function closepopup(){
      document.getElementById('id01').style.display='none'
    }

    return (
      <div className="parent-main">
        <Button onClick={showpopup} variant="primary">Insert New Book </Button>
        <div id="id01" className="addlink">
          <span onClick={closepopup} className="close"
            title="Close addlink">×</span>
          <form method="post" action="http://localhost:8000/insertBook" className="addlink-content animate">
            <div className="container">
              <label><b>Amazon Product </b></label>
              <input type="text" placeholder="Add Amazon Link" name="amazon" required/>

                <label><b>Flipkart Product</b></label>
                <input type="link" placeholder="Add Flipkart Link" name="flipkart" required/>

                  <div className="clearfix">

                    <button type="submit" className="submitbtn"> Add Product</button>
                </div>
            </div>
          </form>
        </div>
        <Booklist />

      </div>


    );

  }

}
export default Dashboard; 
