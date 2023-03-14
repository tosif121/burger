import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
  return (
    <div className="d-flex justify-content-center pb-5">
      <div className="footerimg py-5 shadow text-white">
        <Container>
          <Row>
            <Col md={12}>
              <div className="px-4">
                <img width={270} src="/images/logo2.svg" alt="" />
                <div className="row">
                  <div className="col-lg-6">
                    <p className="py-lg-5">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, explicabo dicta? Accusantium quod
                      et possimus recusandae iste quisquam ab enim. Perferendis quos eum quas, voluptas saepe
                      consectetur iusto, dignissimos excepturi voluptatum explicabo placeat fugiat minus?
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="ms-auto w-50 text-nowrap">
                      <div className="d-flex mb-3 align-items-center">
                        <img className='img-fluid' src="/images/Location.png" alt="location" />
                        <p className="ms-3 mb-0"> Main Road ,Buiding Name,Country</p>
                      </div>
                      <div className="d-flex  align-items-center">
                        <img className='img-fluid' src="/images/Email.png" alt="email" />
                        <p className="ms-3 mb-0">Info@companynane.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-lg-flex align-items-center justify-content-between mt-4 mt-lg-0">
                  <div className="">
                    <p className="mb-lg-0">@Company name 2023. All Right Reserved</p>
                  </div>
                  <div className="">
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                      <FaInstagram size={25} className="me-3" color="white" />
                    </a>
                    <a href="http://fb.com" target="_blank" rel="noopener noreferrer">
                      <FaFacebook size={25} className="me-3" color="white" />
                    </a>
                    <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                      <FaTwitter size={25} className="me-3" color="white" />
                    </a>
                    <a href="http://whatsapp.com" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp size={25} color="white" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
