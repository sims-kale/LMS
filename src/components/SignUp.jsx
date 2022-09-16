import {Link} from "react-router-dom"
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
          <Link to="/login">Login</Link>
        } else {
          alert("Already Registred ");
        }
      };
    
      let handleClick = e => {
        e.preventDefault();
        alert("Sign Up");
      };

  return(
  <div className="App">

            {/* <img src={logo} className="logo" alt="Business view - Reports" /> */}
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email </label>
                    <input type="email" name="email" placeholder="nome@email.com.br" />
                </div><br/>
                <div className="input-group">
                    <label htmlFor="password">Password </label>
                    <input type="password" name=" Create password" placeholder="************" />
                </div><br/>
                <div className="input-group">
                    <label htmlFor="password">Password </label>
                    <input type="password" name="password" placeholder="************" />
                </div><br/>
                <button className="primary">Log In</button>
            </form><br/>
            <button className="secondary" onClick={handleClick}>
                Sign Up
            </button>
    </div>
  );
}
