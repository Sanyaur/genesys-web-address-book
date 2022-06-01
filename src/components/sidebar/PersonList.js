import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import UsersProvider from "../../store/user-context";

const PersonList = () => {
  const users = useContext(UsersProvider);

  // sorting users alphabetically, also modifying the original array
  if (users) {
    users.sort((a, b) => a.name > b.name);
  }

  return (
    <Col md={2}>
      <Sidebar>
        <UserList>
          {users &&
            users.map((user) => (
              <UserListItem key={uuidv4()}>{user.name}</UserListItem>
            ))}
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
  &:hover {
    background-color: #eef;
    cursor: pointer;
  }
`;

export default PersonList;
