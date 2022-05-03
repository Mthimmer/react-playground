import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import StateDescription from "./StateDescription";
// rcc
// import React, { Component } from "react";

function States({ firstname, lastname, secondname, description }) {
  return (
    <div>
      <Container className="mt-5 mb-5 bg-dark text-white">
        <Row>
          <Col>
            <h2>{firstname}</h2>
          </Col>
          <Col>
            <h3>{lastname}</h3>
          </Col>
          <StateDescription name={secondname} description={description} />
        </Row>
      </Container>
    </div>
  );
}

export default States;
