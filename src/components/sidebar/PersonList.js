import React, { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import UsersProvider from "../../store/user-context";

import { DotSpinner } from "@uiball/loaders";

const PersonList = () => {
  const [users, setUsers] = useState();
  const { dispatch } = useContext(UsersProvider);

  useEffect(() => {
    const sortedUsers = (users) => users.sort((a, b) => a.name > b.name);

    const fetchingData = async () => {
      const response = await fetch("http://localhost:8080/api/people");
      const data = await response.json();

      const people = data.people;
      const firstUser = people[0];

      setUsers(sortedUsers(people));
      await dispatch({ type: "CHOSEN_USER", payload: firstUser });
    };
    fetchingData();
  }, []);

  const zeroPadding = { paddingLeft: 0, paddingRight: 0 };

  return (
    <Col md={2} style={zeroPadding}>
      <Sidebar>
        <UserList>
          {users ? (
            users.map((user) => (
              <UserListItem
                key={uuidv4()}
                onClick={() => dispatch({ type: "CHOSEN_USER", payload: user })}
              >
                {user.name}
              </UserListItem>
            ))
          ) : (
            <DotSpinner size={40} speed={0.9} color='black' />
          )}
        </UserList>
      </Sidebar>
    </Col>
  );
};

const Sidebar = styled.div`
  border-right: 2px black solid;
  height: 100vh;
`;

const UserList = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const UserListItem = styled.li`
  user-select: none;
  &:hover {
    background-color: #eef;
    cursor: pointer;
  }
`;

export default PersonList;
