import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { default as Sidebar } from "./components/sidebar/Sidebar";
import { default as Canvas } from './components/display/Canvas';

export const App = () => {
  return (
    <Container fluid className='app'>
      <Row className='app__display'>
        <Col xl={3} xs={4} className='app__sidebar'>
          <Sidebar />
        </Col>
        <Col className='app__canvas text-center'>
         <Canvas />
        </Col>
      </Row>
    </Container>
  )
}