import React, { Component } from "react";
import '../App.css'; 
import { Form, Button } from "react-bootstrap";

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
      e.target.email.value === "AdminId@example.com" &&
      e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Invalid Access");
    }
  };

  handleClick = e => {
    e.preventDefault();

    alert("Please Sign Up");
  };

  render() {
    return (
      <div className="App">
        <h1>Admin Login</h1>
        <Form className ="loginSignupForm">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Log In
      </Button>
<br/><br/>
      <Button variant="primary" >
        Sign Up
      </Button>

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
