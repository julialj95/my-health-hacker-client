import React from "react";

function Signup() {
  return (
    <div className="signup">
      {" "}
      <h1>SIGN UP</h1>
      <h2 className="signup_instructions">
        Create an account to start tracking your health habits!
      </h2>
      <form className="signup_form">
        <input
          className="signup_field"
          type="text"
          name="username"
          placeholder="Create a username..."
        />

        <br />

        <input
          className="signup_field"
          type="text"
          name="password"
          placeholder="Create a password..."
        />

        <br />
        <button className="signup_btn" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
