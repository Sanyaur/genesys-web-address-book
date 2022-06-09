import UserContext from "./user-context";

import React, { useReducer } from "react";

const initialValue = { chosenUser: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "CHOSEN_USER":
      const chosenUser = action.payload;

      return {
        chosenUser: chosenUser,
      };

    default:
      break;
  }
};

function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UsersProvider;
