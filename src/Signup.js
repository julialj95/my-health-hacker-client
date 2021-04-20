import React from "react";
import config from "./config";
import TokenService from "./services/token-service";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSignup = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    fetch(`${config.API_BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + TokenService.getAuthToken(),
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
        return res.json();
      })

      .then(() => this.props.history.push("/login"))
      .catch((error) => this.setState({ error }));
  };
  render() {
    return (
      <div className="signup">
        {" "}
        <h1>SIGN UP</h1>
        <h2 className="signup_instructions">
          Create an account to start tracking your health habits!
        </h2>
        <form className="signup_form" onSubmit={this.handleSignup}>
          <input
            className="signup_field"
            type="text"
            name="username"
            placeholder="Create a username..."
            onChange={this.handleChange}
          />

          <br />

          <input
            className="signup_field"
            type="text"
            name="password"
            placeholder="Create a password..."
            onChange={this.handleChange}
          />

          <br />
          <button className="signup_btn" type="submit">
            Create Account
          </button>
        </form>
      </div>
    );
  }
}
export default Signup;
