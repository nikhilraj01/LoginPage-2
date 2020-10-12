import React from "react";

export default function Navigation() {
  return (
    <div>
      <button
        className="login-button"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:3000/login";
        }}
      >
        Login
      </button>
      <br />
      <button
        className="signup-button"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:3000/signup";
        }}
      >
        Create New Account
      </button>
    </div>
  );
}
