import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Sidebar } from "./components/sidebar";
import { Canvas } from "./components/canvas";

export const App = () => {
  return (
    <Container fluid className="app">
      <Row className="app__display">
        <Col className="app__sidebar">
          <Sidebar />
        </Col>
        <Col height={100} className="app__canvas text-center">
          <div className="canvas__container">
            <Canvas />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
