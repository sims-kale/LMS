import {Link} from "react-router-dom"
import '../App.css';
export default function SignUp(){

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
        alert("Successfully Signed Up");
      };

  return(
  <div className="App">


            <h1>Admin Sign Up</h1>
            <form className="form" onSubmit={handleSubmit}>
              
                <div className="input-group">
                    <label htmlFor="email">Email </label>
                    <input type="email" name="email" placeholder="nome@email.com.br" />
                </div><br/>
                <div className="input-group">
                    <label htmlFor="password">Create Password </label>
                    <input type="password" name="password" placeholder="Enter Password" />
                </div><br/>
                <div className="input-group">
                    <label htmlFor="password">Password </label>
                    <input type="password" name="password" placeholder=" Re-Enter Password" />
                </div><br/>
      
           
            <button className="secondary" onClick={handleClick}>
                Sign Up
            </button>
            
          </form>
    </div>
  );
}
