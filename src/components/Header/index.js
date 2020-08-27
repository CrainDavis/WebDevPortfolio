import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../App.css";

function Header() {
  return (
    <div className="jumbotron">
      <div className="container text-container">
        <Row className="jumbotron-text d-flex justify-content-around">
          <Col xs={12} md={6}>
            <NavLink className="Header__link home-page-link" to="/">
              Chyna Davis
            </NavLink>
          </Col>
          <Col xs={12} md={6}>
            <p className="job-title">Full-Stack Web Developer & Linguist</p>
          </Col>
        </Row>
        <p className="d-flex justify-content-around">
          <NavLink
            activeClassName="Header__link--active"
            className="Header__link page-links"
            to="/aboutme"
          >
            <i className="fas fa-user-alt"></i> About Me
          </NavLink>
          <NavLink
            activeClassName="Header__link--active"
            className="Header__link page-links"
            to="/portfolio"
          >
            <i className="fas fa-folder-open"></i> My Portfolio
          </NavLink>
          <NavLink
            activeClassName="Header__link--active"
            className="Header__link page-links"
            to="/contact"
          >
            <i className="fas fa-envelope"></i> Contact Me
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Header;
