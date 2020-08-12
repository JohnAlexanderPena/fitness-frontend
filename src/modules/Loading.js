import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import loader from "./../assets/loader.gif";
const Loading = ({ width, height }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm="auto">
          <img
            src={loader}
            alt="Loader"
            width={width || "200"}
            height={height || "202"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
