import React, { Component } from "react";
import '../App.css'; 
import { Form, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import axios from "axios";

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert(" Admin Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "noreply@gmail.com" &&
      e.target.password.value === "pass@122"
    ) {
      alert("Successfully logged in");
      
    } else {
      alert("Invalid Access");
      
    }
  };




  handleClick = e => {
    e.preventDefault();
    axios.get('http://127.0.0.1:8000/login',
    { data:{email: document.getElementById("loginemail").value, password: document.getElementById('loginpass').value} })
    .then(response => {
      console.log(response)
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Admin Login</h1>
        <Form className ="loginSignupForm">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control id='loginemail' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control id='loginpass'type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" onClick={this.handleClick} type="submit">Log In</Button>
      
      <Button variant="primary" >Sign Up</Button>
      </Form>
   
   

        {/* <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password"placeholder="enter password" />
          </div>
          <button className="primaryBtn">Log In</button>
          </form>
        <button className="primaryBtn" onClick={this.handleClick}>
          Sign Up
        </button> */}
        
      </div>
      

    );
  }
}

export default Login;
