import axios from "axios";
import { CloseButton } from "react-bootstrap";
import {Link} from "react-router-dom"
import '../App.css';
export default function SignUp({isVisible, onClose}){
  if (!isVisible) return null;

    let handleSubmit = e => {
        e.preventDefault();
        if (!e.target.email.value) {
          alert("Admin Email is required");
        } else if (!e.target.email.value) {
          alert("Valid email is required");
        } else if (!e.target.password.value) {
          alert("Password is required");
        } else if (
          e.target.email.value === "admin@test.com" &&
          e.target.password.value === "123456"
        ) {
          alert("Successfully Signed Up");
          e.target.email.value = "";
          e.target.password.value = "";
        } else {
          alert("Already Registred ");
          <Link to="/login">Login</Link>
        }
       
      };
    
      let handleClick = e => {
        e.preventDefault();
        axios.get('http://127.0.0.1:8000/admins',
    { data:{email: document.getElementById("loginemail").value, password: document.getElementById('loginpass').value} })
    .then(response => {
      console.log(response)
    })
        alert("Successfully Signed Up");
      };

      // function closepopup() {
      //   document.getElementById("id01").style.display = "none";
      // }

  

  return(
    <div>
    <div
      id="id01"
      class="w-full fixed inset-0 bg-transparent bg-opacity-100 backdrop-blur-sm flex justify-center items-center"
    >
      <form class="w-full max-w-lg justify-center items-center bg-transparent p-3 shadow-2xl">
        <div class="relative h-20 w-100">
          <h3 class="font-semibold content-center absolute py-2" > SIGN UP </h3>
          <button
            type="button"
            class="absolute top-0 right-0 h-0 w-0 font-semibold text-black bg px-3 py-2 rounded hover:scale-95 transition text-xl"
            onClick={() => onClose()}
          >
            X
          </button>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Full Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="bpublisher"
              type="text"
              placeholder="Enter full name"
            />
          </div>
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
              Create Password
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="bisbn"
              type="text"
              placeholder="Enter Password"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Re-enter Password
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="bauthor"
              type="text"
              placeholder="Re-enter Password"
            />
          </div>
          
          
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-2/5"></div>
          <div class="md:w-2/3">
            <button
              onClick={handleClick}
              class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
      
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}
