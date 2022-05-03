import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import getApi from "../getApi";

const helloworld = () => {
  const data = getApi();
  const result = Object.keys(data).map((key) => {
    console.log(key); // drink number
    console.log(data[key].strDrink); // drink name
    console.log(data[key].strDrinkThumb); // drink picture

    return (
      <>
        <Col md>
          <div className="p-5 mb-2 bg-dark text-white">
            <p key={key}>{data[key].strDrink};</p>
            <img src={data[key].strDrinkThumb} width="100px" height="100px" />
          </div>
        </Col>
      </>
    );
  });

  console.log(result);

  return (
    <div>
      <Container className="mt-5 mb-5">
        <h2>helloworld Component</h2>
        <h3>data API</h3>
        {/* {result.map((post) => {
          return <p>{post.strDrink}</p>;
        })} */}
        <Row>{result}</Row>
      </Container>
    </div>
  );
};

export default helloworld;
