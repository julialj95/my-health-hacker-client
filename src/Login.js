import React from "react";

function Login() {
  return (
    <div className="login">
      <h1>LOG IN</h1>
      <h2 className="demo_access">
        *To test out MyHealthHacker with a demo account, log in with:
        <br />
        Username: demouser
        <br />
        Password: demopassword
      </h2>
      <form className="login_form">
        <input
          className="login_field"
          type="text"
          name="username"
          placeholder="Enter username"
        />

        <br />

        <input
          className="login_field"
          type="text"
          name="password"
          placeholder="Enter password"
        />

        <br />
        <button className="login_btn" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
export default Login;
