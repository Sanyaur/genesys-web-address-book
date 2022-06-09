import React, { useContext } from "react";
import styled from "styled-components";
import avatar from "../../avatar.png";
import UsersProvider from "../../store/user-context";

function Header() {
  const {
    state: { chosenUser },
  } = useContext(UsersProvider);

  return (
    <HeaderComponent>
      <img src={avatar} alt='avatar' />
      <div>{chosenUser && chosenUser.name}</div>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.div`
  display: flex;

  & img {
    width: 125px;
    height: 125px;
    border-radius: 113px;
    border: 2px solid #1e1e9c;
    overflow: hidden;
    background-size: contain;
  }
`;

export default Header;
