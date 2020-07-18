import React from "react";
import { NavLink } from "react-router-dom"
import "../../App.css";

function Header() {
  return (
    <div className="jumbotron">
      <div className="container text-container">
        <p className="jumbotron-text d-flex justify-content-around">
            <NavLink className="Header__link home-page-link" to="/">Chyna Davis</NavLink>
            <span className="job-title">Full-Stack Web Developer</span>
        </p>
        <p className="d-flex justify-content-around">
            <NavLink activeClassName="Header__link--active" className="Header__link page-links" to="/aboutme"><i className="fas fa-user-alt"></i> About Me</NavLink>
            <NavLink activeClassName="Header__link--active" className="Header__link page-links" to="/portfolio"><i className="fas fa-folder-open"></i> My Portfolio</NavLink>
            <NavLink activeClassName="Header__link--active" className="Header__link page-links" to="/contact"><i className="fas fa-envelope"></i> Contact Me</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Header;
