import { NavLink } from "react-router-dom"
import Navbar from "../components/Navbar"


export default function Signup() {
    return (
      <>
      <Navbar />
      <div className="auth--page">
          <div className="auth--links">
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Sign In</NavLink>
          </div>
        <div className="auth--container">
          <h1>Create New Account</h1>
          <form action="" className="auth--form">
            <div className="form-inputs">
              <input type="text" name="username" id="" placeholder="Enter your  username" />
              <input type="email" name="email" id="" placeholder="Enter your  email" />
              <input type="password" name="password" id="" placeholder="Enter your password"/>
              <input type="password" name="password2" id="" placeholder="Repeat password"/>
              <p className="policy-text">By clicking <strong>"Sign up"</strong>, you agree to our Terms of Use and our Privacy Policy.</p>
            </div>
            <button>Sign Up</button>
          </form>
        </div>  
      </div>
      </>
    )
  }