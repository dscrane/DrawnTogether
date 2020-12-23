import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { default as Sidebar } from "./components/sidebar/Sidebar";
import { default as Canvas } from "./components/display/Canvas";

export const App = () => {
  return (
    <Container fluid className="app">
      <Row className="app__display">
        <Col xl={3} xs={4} className="app__sidebar">
          <Sidebar />
        </Col>
        <Col height={100} xl={9} className="app__canvas text-center">
          <div className="canvas__container">
            <Canvas />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
