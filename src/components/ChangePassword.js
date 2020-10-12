import React, { useState, useContext } from "react";
import { AccountContext } from "./Accounts";

export default () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { getSession } = useContext(AccountContext);
  const onSubmit = (event) => {
    event.preventDefault();

    getSession().then(({ user, email }) => {
      user.changePassword(password, newPassword, (err, result) => {
        if (err) console.error(err);
        console.log(result);
      });
    });
  };
  return (
    <div>
      <h3>Change Password?</h3>
      <form onSubmit={onSubmit}>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Current Password"
        />
        <br />
        <input
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          placeholder="Enter New Password"
        />
        <br />
        <button className="login-button" type="submit">
          Change Password
        </button>
      </form>
    </div>
  );
};
