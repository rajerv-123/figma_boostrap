import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <span style={{ color: "#f16322" }}>Ship</span>
          <span style={{ color: "#30336b" }}>Up</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              title="Company"
              id="company-nav-dropdown"
              className="position-static"
            >
              <div className="dropdown-menu p-3 w-100">
                <Row>
                  <Col md={6}>
                    <h5>Company</h5>
                    <NavDropdown.Item href="#about-us">
                      <div className="d-flex align-items-center">
                        <i
                          className="bi bi-person-fill mr-2"
                          style={{ fontSize: "1.5em" }}
                        ></i>
                        <div>
                          <strong>About US</strong>
                          <p className="mb-0 small">
                            The people behind ShipUp and the story of shared
                            success.
                          </p>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#partner">
                      <div className="d-flex align-items-center">
                        <i
                          className="bi bi-handshake-fill mr-2"
                          style={{ fontSize: "1.5em" }}
                        ></i>
                        <div>
                          <strong>Partner With Us</strong>
                          <p className="mb-0 small">
                            Collaboration with ShipUp and drive mutual growth.
                          </p>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#careers">
                      <div className="d-flex align-items-center">
                        <i
                          className="bi bi-briefcase-fill mr-2"
                          style={{ fontSize: "1.5em" }}
                        ></i>
                        <div>
                          <strong>Career</strong>
                          <p className="mb-0 small">Join the ShipUp</p>
                        </div>
                      </div>
                    </NavDropdown.Item>
                  </Col>
                  <Col md={6}>
                    <h5>Newsroom</h5>
                    <img
                      src="https://s3-alpha-sig.figma.com/img/45d9/a1d2/d9f40e52fa5e935b76d02f1341c144f4?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k6XXv1blUOeqh7EMF0MfonImC3dt611SLn8eC0pv9CihbKd5Q7DN2f6clAoFok3hI2zdqf997Hw~~5QRfvjW9EWBu4Q5N2YCr2H11yqpk3eX1khTr0bKc~O7Kl39Cv8VeR276CNWIzetxNkbbuQzgyHuBuN~-YrSVDDf52j5aOEJdT8bLv2RJhME8QmPuPX3B6hxeLy5n2es2uCiWquwNN~x4Quu3VjU7ugBRelzG0aK06m0UX1fYHC8pJyln~yeVOj21aDMs3I5ezX1LtAiYiBWc6h-Jl7hsjCdVR9ouSDcCFOYyfeJAwl~1XL8XNwk0TmR2yN5~dcIYm-lUbgN6g__"
                      alt="Newsroom"
                      className="img-fluid mb-2 rounded"
                    />
                    <p className="mb-0">News and awards</p>
                    <a href="#learn-more" className="text-danger">
                      Learn More &rarr;
                    </a>
                  </Col>
                </Row>
              </div>
            </NavDropdown>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#solutions">Solutions</Nav.Link>
            <Nav.Link href="#industries">Industries</Nav.Link>
            <Nav.Link href="#insights">Insights</Nav.Link>
            <Nav.Link href="#news">News And Media</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Button variant="outline-primary" className="mr-2">
              Request Quote
            </Button>
            <Button variant="primary">Join Now</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
