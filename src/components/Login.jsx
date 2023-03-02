import React, { useState } from "react";
// import ReactDOM from "react-dom";

// import "../App";
import SignUp from "./SignUp";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div class="w-full fixed inset-0 bg-transparent bg-opacity-100 backdrop-blur-sm flex justify-center items-center">
      <form class= "w-full max-w-lg justify-center items-center bg-transparent p-3 shadow-2xl"
       onSubmit={handleSubmit}>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Username
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="btitle"
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Password
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="btitle"
              type="text"
              placeholder="Enter Password"
            />
          </div>
        <div class="flex flex-row ">
          
          <div class="md:w-1/3">
            <button
              //onClick={submitbtn}
              class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>

          <div class="">
          
              <div class="mmd:flex md:items-center">
                <button
                  onClick={() => setShowModal(true)}
                  class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
           
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div>
       
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>

      <SignUp isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Login;
