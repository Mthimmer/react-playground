import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Button_Class from "../components/Button_Class";
import Button_Function from "../components/Button_Function";
import States from "../components/States";
import API from "../components/helloworld";
const test = () => {
  return (
    <div>
      <h1 className="p-5 mb-2 bg-dark text-white">API test</h1>
      <API />

      <h1 className="p-5 mb-2 bg-dark text-white">Props test</h1>
      <Container>
        <Row>
          <Col>
            <States
              firstname="Props firstname"
              lastname="Pieters"
              secondname="my second name"
              description="This is my description, the props are done with the normal function component"
            />
          </Col>
          <Col>
            <States firstname="Props Bart" lastname="Dimmen" />
          </Col>
          <Col>
            <States firstname="Props firstname" lastname="Timmerman" />
          </Col>
        </Row>
      </Container>
      <h2>States</h2>
      <Button_Class />
      <Button_Function />
    </div>
  );
};

export default test;
