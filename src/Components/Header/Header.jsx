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
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-3 justify-content-center">
      <Container>
        <Navbar.Brand href="#home" className="px-3">
          <span style={{ color: "#30336b" }}>Ship</span>
          <span style={{ color: "#f16322", fontWeight: "500" }}>Up</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Company">
              <div className="dropdown-menu w-100 show align-items-start">
                <Row>
                  <Col md={6}>
                    <h5>Company</h5>
                    <NavDropdown.Item href="#about-us">
                      <div className="d-flex align-items-start">
                        <i
                          className="bi bi-person-fill mr-2"
                          style={{ fontSize: "1.5em", color: "#f16322" }}
                        ></i>
                        <div>
                          <strong>About Us</strong>
                          <p className="mb-0 small">
                            The people behind ShipUp and the story of shared
                            success.
                          </p>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#partner">
                      <div className="d-flex align-items-start">
                        <i
                          className="bi bi-handshake-fill mr-2"
                          style={{ fontSize: "1.5em", color: "#f16322" }}
                        ></i>
                        <div>
                          <i
                            className="bi bi-people"
                            style={{
                              fontSize: "1.5em",
                              color: "#f16322",
                              marginLeft: "auto",
                            }}
                          ></i>{" "}
                          <strong>Partner With Us</strong>
                          <p className="mb-0 small">
                            Collaboration with ShipUp and drive mutual growth.
                          </p>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#careers">
                      <div className="d-flex align-items-start">
                        <i
                          className="bi bi-briefcase-fill mr-2"
                          style={{ fontSize: "1.5em", color: "#f16322" }}
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
            <Nav.Link href="#services" className="px-3">
              Services
            </Nav.Link>
            <Nav.Link href="#solutions" className="px-3">
              Solutions
            </Nav.Link>
            <Nav.Link href="#industries" className="px-3">
              Industries
            </Nav.Link>
            <Nav.Link href="#insights" className="px-3">
              Insights
            </Nav.Link>
            <Nav.Link href="#news" className="px-3">
              News And Media
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto d-flex align-items-center">
            <Button
              // variant="outline-primary"
              className="mr-lg-2 mb-2 mb-lg-0 px-3"
              style={{
                color: "#2C2D5B",
                backgroundColor: "white",
                fontWeight: "500",
              }}
            >
              Request Quote
            </Button>
          </Nav>
          <Nav className="ml-auto m-lg-2">
            <Button
              style={{ backgroundColor: "#2C2D5B", borderColor: "#2C2D5B" }}
              className="px-3"
            >
              Join Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
