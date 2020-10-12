import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Accounts";
import ChangePassword from "./ChangePassword";

export default () => {
  const { getSession } = useContext(AccountContext);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  }, []);
  return (
    <div>
      {loggedIn && (
        <>
          <ChangePassword />
        </>
      )}
    </div>
  );
};
