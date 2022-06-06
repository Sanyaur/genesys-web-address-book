import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
const PersonList = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const sortedUsers = (users) => users.sort((a, b) => a.name > b.name);

    fetch("http://localhost:8080/api/people").then((res) =>
      res.json().then((data) => setUsers(sortedUsers(data.people)))
    );
  }, []);

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
  user-select: none;
  &:hover {
    background-color: #eef;
    cursor: pointer;
  }
`;

export default PersonList;
