import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Reserve = () => {
  return (
    <>
      <div className="footer-image w-100 " id="contact">
        <Container>
          <Row className="align-items-center">
            <Col lg={1}>
              <img src="/images/bottle.png" alt="bottle" className="img-fluid d-lg-block d-none" />
            </Col>
            <Col lg={11}>
              <div className="">
                <div className="d-flex align-items-center justify-content-center">
                  <input type="text" className="form-control shadow-none border me-4" placeholder="Name" />
                  <input type="text" className="form-control shadow-none border" placeholder="Email" />
                </div>
                <div className="d-flex align-items-center my-4 justify-content-center">
                  <input type="text" className="form-control shadow-none border me-4" placeholder="Date" />
                  <input type="text" className="form-control shadow-none border" placeholder="Time" />
                </div>
                <div className="d-flex align-items-center justify-content-center mb-4 mb-lg-0">
                  <input type="text" className="form-control shadow-none border me-4" placeholder="People" />
                  <div className="burger-choose">
                    <Button variant=" " className="rounded-1 text-white px-4 text-nowrap">
                      FIND A TABLE
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Reserve;
