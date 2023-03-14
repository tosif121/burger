import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Carddetails = () => {
  return (
    <>
      <Container className="shadow bg-white" id="Ourstory">
        <Row className="my-5">
          <Col lg={12} md={12}>
            <Carousel>
              <Carousel.Item>
                <div className="main-color d-lg-flex align-items-center p-3">
                  <div className="">
                    <div className="text-uppercase">
                      <h5 className="fs-3">discover</h5>
                      <h6 className="fs-2">Upcoming event</h6>
                    </div>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque itaque quisquam reprehenderit, in
                      asperiores odio, sapiente soluta est qui officiis sit ipsum quia? Recusandae, in? Lorem ipsum,
                      dolor sit amet consectetur adipisicing elit. Debitis, dolores tenetur qui quis praesentium itaque?
                    </p>
                  </div>
                  <img className="img-fluid" src="/images/BurgerDetails.png" alt="First slide" />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="main-color d-lg-flex align-items-center p-4">
                  <div className="">
                    <div className="text-uppercase">
                      <h5 className="fs-3">discover</h5>
                      <h6 className="fs-2">Upcoming event</h6>
                    </div>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque itaque quisquam reprehenderit, in
                      asperiores odio, sapiente soluta est qui officiis sit ipsum quia? Recusandae, in? Lorem ipsum,
                      dolor sit amet consectetur adipisicing elit. Debitis, dolores tenetur qui quis praesentium itaque?
                    </p>
                  </div>
                  <img className="img-fluid" src="/images/BurgerDetails.png" alt="First slide" />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="main-color d-lg-flex align-items-center p-4">
                  <div className="">
                    <div className="text-uppercase">
                      <h5 className="fs-3">discover</h5>
                      <h6 className="fs-2">Upcoming event</h6>
                    </div>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque itaque quisquam reprehenderit, in
                      asperiores odio, sapiente soluta est qui officiis sit ipsum quia? Recusandae, in? Lorem ipsum,
                      dolor sit amet consectetur adipisicing elit. Debitis, dolores tenetur qui quis praesentium itaque?
                    </p>
                  </div>
                  <img className="img-fluid" src="/images/BurgerDetails.png" alt="First slide" />
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Carddetails;
