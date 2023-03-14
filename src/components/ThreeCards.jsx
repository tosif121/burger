import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ThreeCards = () => {
  return (
    <>
      {/* first card*/}
      <Container className="my-5" id="Menu">
        <Row>
          <Col lg={6} md={12}>
            <Card className="border-0 text-white">
              <Card.Img src="/images/BurgerCard1.svg" alt="Card image" />
              <Card.ImgOverlay className="p-4">
                <Card.Title>
                  <h5>TRY IT TODAY</h5>
                </Card.Title>
                <Card.Text>
                  <h2>MOST POPULAR BURGER</h2>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            {/* Second card*/}
            <div className="mt-4 mt-lg-0">
              <Card className="border-0 text-white mb-4">
                <Card.Img src="/images/BurgerCard2.svg" alt="Card image" />
                <Card.ImgOverlay className="p-4">
                  <Card.Title>
                    <h5>TRY IT TODAY</h5>
                  </Card.Title>
                  <Card.Text>
                    <h2> MORE FUN MORE TASTE</h2>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>

              <Card className="border-0 text-white">
                <Card.Img src="/images/BurgerCard3.svg" alt="Card image" />
                <Card.ImgOverlay className="p-4">
                  <Card.Title>
                    <h5>TRY IT TODAY</h5>
                  </Card.Title>
                  <Card.Text>
                    <h2>FRESH & CHILI</h2>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ThreeCards;
