import Booklist from "./Booklist";
// import { Button } from "react-bootstrap";

import axios from "axios";


function Dashboard() {
  let book = {};

  function submitbtn() {
    console.log("submit called");
    book.genre = document.getElementById("bgenre").value;
    book.publishyear = document.getElementById("bpyear").value;
    book.isbn = document.getElementById("bisbn").value;
    book.author = document.getElementById("bauthor").value;
    book.title = document.getElementById("btitle").value;
    book.publisher = document.getElementById("bpublisher").value;

    console.log("Book Inserted" + book.isbn);

    axios
      .post("http://127.0.0.1:8000/insertBook", {
        headers: {
          "Content-Type": "application/json",
        },
        data: book,
      })
      .then(() => {
        alert("Book Inserted!");
      });
  }

  function showpopup() {
    document.getElementById("id01").style.display = "flex";
  }
  function closepopup() {
    document.getElementById("id01").style.display = "none";
  }

  return (
    <div>
      <div className="bg-white mt-4 mb-4">
        <button
          type="button"
          className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl"
          onClick={showpopup}
        >
          Insert Book
        </button>
      </div>

      <Booklist />

      <div>
        <div
          id="id01"
          className="w-full fixed inset-0 bg-transparent bg-opacity-100 backdrop-blur-sm flex justify-center items-center"
        >
          <form class="w-full max-w-lg justify-center items-center bg-blue-200 p-3 ">
            <div class="relative h-20 w-100">
              <h3 class="font-semibold content-center absolute py-2" > Insert Book</h3>
              <button
                type="button"
                class="absolute top-0 right-0 h-0 w-0 font-semibold text-black bg px-3 py-2 rounded hover:scale-95 transition text-xl"
                onClick={closepopup}
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
                  placeholder="Enter Genre"
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
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="bpyear"
                  type="number"
                  placeholder="Publish Year"
                />

              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-2/5"></div>
              <div class="md:w-2/3">
                <button
                  onClick={submitbtn}
                  class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
          
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
