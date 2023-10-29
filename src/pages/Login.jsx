import { NavLink } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="auth--page">
          <div className="auth--links">
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Sign In</NavLink>
          </div>
        <div className="auth--container">
          <h1>Sign to your Account</h1>
          <form action="" className="auth--form">
            <div className="form-inputs">
              <input type="text" name="username" id="" placeholder="Enter your  username" />
              <input type="password" name="password" id="" placeholder="Enter your password"/>
              <p className="policy-text">By clicking <strong>"Sign in"</strong>, you agree to our Terms of Use and our Privacy Policy.</p>
            </div>
            <button>Login</button>
            <a href="#" className="forgot-password-link">Forgot your password?</a>
          </form>
        </div>  
      </div>
    </>
  )
}