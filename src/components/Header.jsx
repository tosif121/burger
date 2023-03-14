import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, NavLink } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  const handleClose = () => {
    setChecked(!checked);
  };
  return (
    <>
      {/* Header Point */}
      <div className="main-bg w-100">
        <Container>
          <Row>
            <Col>
              <div className="d-flex d-lg-block align-items-center justify-content-between main-navbar">
                <div className="d-lg-flex align-items-baseline mt-4 justify-content-between">
                  <div>
                    <NavLink to={'/'}>
                      <img src="/images/logo.svg" alt="logo" />
                    </NavLink>
                  </div>
                  <div className="mt-3 mt-lg-0 d-flex ">
                    <div>
                      <img src="/images/scooter.svg" alt="scooter" />
                    </div>
                    <h6 className="d-flex align-items-end ms-2 fw-semibold">Express Delivery +1 234 567 890 </h6>
                  </div>
                </div>
                {/* Navbar */}
                <Navbar expand="lg">
                  <div className={`d-block d-lg-none ${checked && 'expand-menu d-none'}`}>
                    <FaBars onClick={handleClick} className="main-color mb-4" />
                  </div>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-uppercase fs-5 main-color">
                      <Nav.Link className="p-0 main-color burger-link" href="#home">
                        Home
                      </Nav.Link>
                      <Nav.Link className="p-0 main-color burger-link ms-4" href="#Menu">
                        Menu
                      </Nav.Link>
                      <Nav.Link className="p-0 main-color burger-link ms-4" href="#Ourstory">
                        Our Story
                      </Nav.Link>
                      <Nav.Link className="p-0 main-color burger-link ms-4" href="#contact">
                        Contact Us
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
                <div className="d-lg-none">
                  <div
                    className={(checked || '') && 'expand w-100 h-100 d-lg-none position-fixed start-0 top-0'}
                    onClick={handleClose}
                  ></div>
                  <div
                    className={`bg-white mobile-menu position-absolute top-0 start-0 overflow-hidden ${
                      checked && 'expand-menu'
                    }`}
                  >
                    <div className="d-flex flex-column mt-3 main-navbar">
                      <Nav.Link className="p-0 main-color burger-link" href="#home">
                        Home
                      </Nav.Link>
                      <Nav.Link className="p-0 main-color burger-link ms-4" href="#Menu">
                        Menu
                      </Nav.Link>
                      <Nav.Link className="p-0 main-color burger-link ms-4" href="#Ourstory">
                        Our Story
                      </Nav.Link>
                      <Nav.Link className="p-0 main-color burger-link ms-4" href="#contact">
                        Contact Us
                      </Nav.Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* Main Content */}
          <Container>
            <Row className="align-items-center pb-lg-4 main-color">
              <Col lg={6} md={12}>
                <p className="dotted-border p-2 text-uppercase mt-4 mt-lg-0">
                  It Is A Good Time For The Great Taste Of Burger
                </p>
                <div className="burger-text text-uppercase">
                  <h1 className="mb-0">Burger</h1>
                  <h2>week</h2>
                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className="burgereek d-lg-block d-none">
                  <img src="/images/burgereek.png" alt="burgereek" />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default Header;
