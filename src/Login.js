import React, { useState } from "react";
import TokenService from "./services/token-service";
import AuthService from "./services/auth-service";

function Login() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleJwtAuthSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const { username, password } = userData;
    console.log(username, password);
    AuthService.postLogin({
      username: username,
      password: password,
    })
      .then((res) => {
        setUserData({ username: "", password: "" });
        TokenService.saveAuthToken(res.authToken);
        console.log(res.authToken);
        this.props.handleLogin(true);
      })
      .catch((res) => {
        setError(res.error);
      });
  };

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
      <form className="login_form" onSubmit={(e) => handleJwtAuthSubmit(e)}>
        <input
          className="login_field"
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={(e) => handleChange(e)}
        />

        <br />

        <input
          className="login_field"
          type="text"
          name="password"
          placeholder="Enter password"
          onChange={(e) => handleChange(e)}
        />

        <br />
        <button className="login_btn" type="submit">
          Log In
        </button>
        {error ? (
          <h2>Incorrect username or password. Please try again.</h2>
        ) : null}
      </form>
    </div>
  );
}
export default Login;
