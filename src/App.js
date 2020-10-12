import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Login from "./components/Login";
import { Account } from "./components/Accounts";
export default () => {
  return (
    <div className="login-container">
      <Header />
      <Account>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Navigation} />
      </Account>
    </div>
  );
};
/* 
<Signup />
<br />
<p>OR, if you already have an account</p>
<Login /> 
*/
