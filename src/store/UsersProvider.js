import UserContext from "./user-context";

import React, { useEffect, useState } from "react";

function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(
      fetch("http://localhost:8080/api/people").then((res) =>
        res.json().then((data) => console.log(data))
      )
    );
  }, []);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
}

export default UsersProvider;
