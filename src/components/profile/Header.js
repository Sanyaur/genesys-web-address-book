import React from "react";
import styled from "styled-components";
import avatar from "../../avatar.png";

function Header() {
  return (
    <HeaderComponent>
      <img src={avatar} alt='avatar' />
      <div>Header</div>;
    </HeaderComponent>
  );
}

const HeaderComponent = styled.div`
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
