import React from "react";
import { Col } from "react-bootstrap";
import Details from "./Details";
import Header from "./Header";

function DetailsBody() {
  return (
    <Col md={10}>
      <Header />
      <Details />
    </Col>
  );
}

export default DetailsBody;
