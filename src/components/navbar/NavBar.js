import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Container>
        <Row>
          <nav>
            <Col>
              <Link to="/">
                <h1>Logo.</h1>
              </Link>
            </Col>
            <Col>
              <ul>
                <Link to="/Home">
                  <li>Home</li>
                </Link>

                <Link to="/Form">
                  <li>Form</li>
                </Link>

                <Link to="/Test">
                  <li>Test </li>
                </Link>
              </ul>
            </Col>
          </nav>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;
