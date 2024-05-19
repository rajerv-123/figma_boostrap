import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container container-fluid mt-5">
      <div className="row text-white">
        <div className="col-md-12 d-flex justify-content-center">
          <div className="row">
            <div className="col-md-3 d-flex flex-column justify-content-start align-items-start mb-4 mb-md-0">
              <h5 className="text-white">
                Ship<span style={{ color: "#FF6F61" }}>Up</span>
              </h5>
              <p className="text-white footer-description">
                ShipUp delivers an unparalleled customer service through
                dedicated customer teams, engaged people working in an agile
                culture, and a global footprint.
              </p>
            </div>

            <div className="col-md-3 text-center text-md-left mb-4 mb-md-0">
              <h5 className="text-white">Explore</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white footer-link">
                    Our Warehouses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white footer-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white footer-link">
                    News and Media
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 text-center text-md-left mb-4 mb-md-0">
              <h5 className="text-white">Legal</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white footer-link">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white footer-link">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 text-center text-md-left">
              <h5 className="text-white mb-4 mb-md-0">Social Media</h5>
              <div className="d-flex justify-content-center justify-content-md-start align-items-center footer-icons  pt-2">
                <a href="#" className="text-white mr-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white mr-3">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-white mr-3">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="#" className="text-white mr-3">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col text-center text-white">
          <hr className="border-secondary" />
          <p className="footer-bottom-text">
            Ship<span style={{ color: "#FF6F61" }}>Up</span>.ng
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
