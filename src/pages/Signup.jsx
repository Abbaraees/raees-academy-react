export default function Signup() {
    return (
      <div className="auth--page">
        <div className="auth--container">
          <h1>Create New Account</h1>
          <form action="" className="auth--form">
            <input type="text" name="username" id="" placeholder="Enter your  username" />
            <input type="email" name="email" id="" placeholder="Enter your  email" />
            <input type="password" name="password" id="" placeholder="Enter your password"/>
            <input type="password" name="password2" id="" placeholder="Repeat password"/>
            <button>Sign Up</button>
          </form>
          <div className="auth--links">
            <a href="#">Create an Account</a>
            <a href="#">Forgot password</a>
          </div>
        </div>  
      </div>
    )
  }