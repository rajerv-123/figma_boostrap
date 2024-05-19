import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./MiddleContent.css";
const MiddleContent = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1>
            Quick & Reliable{" "}
            <span style={{ color: "#FF6F61" }}>Warehousing</span> and{" "}
            <span style={{ color: "#FF6F61" }}>Logistics</span> Solution.
          </h1>
          <p>
            ShipUp delivers an unparalleled customer service through dedicated
            customer teams, engaged people working in an agile culture, and a
            global footprint.
          </p>
          <div className="d-flex flex-column flex-md-row">
            <button
              className="btn btn-primary mb-2 mb-md-0 mr-md-2"
              style={{ backgroundColor: "#2C2D5B" }}
            >
              Join Now
            </button>
            <button
              className="btn mr-md-2"
              style={{ color: "#2C2D5B", fontWeight: "500" }}
            >
              Play Demo
            </button>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
          <img
            src="https://s3-alpha-sig.figma.com/img/2a7d/ac74/fa85409179d1e72a92cca0b0e464fdee?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DPnX19PAW50UrkDxGNsDgmTLI4fNib527ANyCJgxo53bRdQFZM1sJSO-1C4otiJQ~NxQgkgfhGIuVYon1S42xoIGXMKBT9N5MDeaCZ6rm5QUdYgJQYMp1pB-l2reBHY3UoAH-cOOj~gpdfpwcFdX1R2f0jOGJKaZsaV9RpjFg-QkGUHUlbH3D8bon-1VhgtHJcbMBc3hz98fRIsG397Eb7Om~G9YZhLEqpQiFXrnGaCxbAceXrSedDDn9IwuQSU0E2M3Uh1PtaqijIrca0G6VNJ~WVXLT1Bc6E9DHJsJ4L6C-ndrVmcVamMihI6r9I1iOCjijgExyR1mxE3o3IMBFg__"
            alt="Example"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div
        className="shadow-sm rounded p-4 inputFiledContier"
        style={{ border: "1px solid #ddd" }}
      >
        <div className="row mb-3">
          <div className="col-md-3">
            <h5>Origin</h5>
            <div className="input-group shadow-sm rounded">
              <div className="input-group-prepend">
                <span className="input-group-text border-0 bg-white">
                  <i className="bi bi-geo-alt"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Enter Location"
                style={{ boxShadow: "none" }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <h5>Destination</h5>
            <div className="input-group shadow-sm rounded">
              <div className="input-group-prepend">
                <span className="input-group-text border-0 bg-white">
                  <i className="bi bi-geo-alt"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Enter Location"
                style={{ boxShadow: "none" }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <h5>Weight</h5>
            <div className="input-group shadow-sm rounded">
              <div className="input-group-prepend">
                <span className="input-group-text border-0 bg-white">
                  <i className="bi bi-box-seam"></i>
                </span>
              </div>
              <input
                type="number"
                className="form-control border-0"
                placeholder="Weight (KG)"
                style={{ boxShadow: "none" }}
              />
            </div>
          </div>
          <div className="col-md-3 d-flex align-items-end">
            <button
              className="btn btn-primary w-100 shadow-sm"
              style={{ backgroundColor: "#2C2D5B" }}
            >
              Check Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;
