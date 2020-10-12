import React, { useState, useContext } from "react";
import { AccountContext } from "./Accounts";
import Status from "./Status";
import Dashboard from "./Dashboard";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();
    authenticate(email, password)
      .then((data) => {
        console.log("Logged In!", data);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Failed to login!", err);
      });
  };
  return (
    <div className="App">
      <div>
        <Status />
        <form onSubmit={onSubmit} id="loginform">
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
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <Dashboard />
      </div>
    </div>
  );
}
