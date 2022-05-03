import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
function Cards() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mb-3">
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/Yh2Y8avvPec"
              height="400"
            />
            <Card.Body>
              <Card.Title className="text-dark">Card Title</Card.Title>
              <Card.Text className="text-red-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-3">
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/Yh2Y8avvPec"
              height="400"
            />
            <Card.Body>
              <Card.Title className="text-dark">Card Title</Card.Title>
              <Card.Text className="text-red-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-3" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/Yh2Y8avvPec"
            />
            <Card.Body>
              <Card.Title className="text-dark">Card Title</Card.Title>
              <Card.Text className="text-red-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
