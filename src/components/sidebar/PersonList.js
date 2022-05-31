import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const PersonList = () => {
  return (
    <Col md={2}>
      <Sidebar>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
      </Sidebar>
    </Col>
  );
};

const Sidebar = styled.div`
  border-right: 2px black solid;
  height: 100vh;
`;

export default PersonList;
