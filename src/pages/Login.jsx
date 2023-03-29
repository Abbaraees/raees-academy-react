export default function Login() {
  return (
    <div className="auth--page">
      <div className="auth--container">
        <h1>Login to your Account</h1>
        <form action="" className="auth--form">
          <input type="text" name="username" id="" placeholder="Enter your  username" />
          <input type="password" name="password" id="" placeholder="Enter your password"/>
          <button>Login</button>
        </form>
        <div className="auth--links">
          <a href="#">Create an Account</a>
          <a href="#">Forgot password</a>
        </div>
      </div>  
    </div>
  )
}