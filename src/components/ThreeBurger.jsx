import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ThreeBurger = () => {
  return (
    <>
      {/* responive bigdi hue hai iski or header ki */}
      <Container>
        <Row className="my-5">
          {/* First card */}
          <Col md={12} lg={4}>
            <div className="burger-choose my-5">
              <div className="burger-card">
                <Card.Img variant="top" src="/images/BurgerOne.png" />
              </div>
              <Card.Body className="text-center my-4">
                <Card.Title className="fs-2 main-color">LOREM IPSUM DOLOR</Card.Title>
                <Card.Text className="mt-2 main-color">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant=" " className="rounded-0 text-white px-4 py-2">ORDER NOW</Button>
              </Card.Body>
            </div>
          </Col>
          {/* Second card */}
          <Col md={12} lg={4}>
            <div className="burger-choose my-5">
              <div className="burger-card">
                <Card.Img variant="top" src="/images/BurgerTwo.png" />
              </div>
              <Card.Body className="text-center my-4">
                <Card.Title className="fs-2 main-color">LOREM IPSUM DOLOR</Card.Title>
                <Card.Text className="mt-2 main-color">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant=" " className="rounded-0 text-white px-4 py-2">ORDER NOW</Button>
              </Card.Body>
            </div>
          </Col>
          {/* third card */}
          <Col md={12} lg={4}>
            <div className="burger-choose my-5">
              <div className="burger-card">
                <Card.Img variant="top" src="/images/BurgerOne.png" />
              </div>
              <Card.Body className="text-center my-4">
                <Card.Title className="fs-2 main-color">LOREM IPSUM DOLOR</Card.Title>
                <Card.Text className="mt-2 main-color">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant=" " className="rounded-0 text-white px-4 py-2">ORDER NOW</Button>
              </Card.Body>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ThreeBurger;
