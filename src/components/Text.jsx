import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Text = () => {
  return (
    <div className="text-center my-lg-5  burger-choose">
      <Container>
        <Row>
          <Col>
            <div className="main-color">
              <h5 className="p-3 py-2 m-auto">ALWAYS TASTY BURGER</h5>
              <h3 className="my-4">CHOOSE & ENJOY</h3>
              <p className=" fw-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, obcaecati dignissimos itaque,
                repellendus ipsum, earum excepturi voluptatem nobis dolorem quibusdam labore. Praesentium aliquid unde
                nesciunt! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nesciunt eaque .
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Text;
