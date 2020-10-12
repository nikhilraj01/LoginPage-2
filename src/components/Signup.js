import React, { useState } from "react";
import { UserPool } from "../UserPool";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    //Creating a new user in the user pool using UserPool.signUp() and initializing it with email and password as provided by the user
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      else {
        console.log(data);
        alert("Account successfully created");
      }
    });
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={onSubmit}>
          <input
            className="input-field"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter Email Address"
          />
          <br />
          <input
            className="input-field"
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter Password"
          />
          <br />
          <button className="signup-button" type="submit">
            Create New Account
          </button>
        </form>
      </div>
    </div>
  );
}
