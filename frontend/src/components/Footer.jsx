/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../App.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div
            className="col-md-12"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "white", fontSize: "30px" }}
                />
              </a>
              <div
                style={{
                  color: "white",
                  marginLeft: "5px",
                  textDecoration: "none",
                }}
              >
                Mcanozcan
              </div>
            </div>
            <div>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "white", fontSize: "30px" }}
                />
              </a>
              <div
                style={{
                  color: "white",
                  marginLeft: "5px",
                  textDecoration: "none",
                }}
              >
                İsmail Efe
              </div>
            </div>
            <div>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "white", fontSize: "30px" }}
                />
              </a>
              <div
                style={{
                  color: "white",
                  marginLeft: "5px",
                  textDecoration: "none",
                }}
              >
                Zeynep
              </div>
            </div>
            <div>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "white", fontSize: "30px" }}
                />
              </a>
              <div
                style={{
                  color: "white",
                  marginLeft: "5px",
                  textDecoration: "none",
                }}
              >
                Ceren
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ color: "white" }}>Copyright © 2024 MOONEWS</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
