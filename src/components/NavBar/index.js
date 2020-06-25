import React from "react";
import {NavLink} from "react-router-dom"
import "../../App.css";

function Header() {
  return (
    <div className="jumbotron">
      <div className="container text-container">
        <p className="jumbotron-text d-flex justify-content-around">
            <span className="full-name">Chyna Davis</span>
            <span className="job-title">Full-Stack Web Developer</span>
        </p>
        <p className="d-flex justify-content-around">
            <NavLink activeClassName="navbar__link--active" className="navbar__link page-links" to="/aboutme"><i className="fas fa-user-alt"></i> About Me</NavLink>
            <NavLink activeClassName="navbar__link--active" className="navbar__link page-links" to="/portfolio"><i className="fas fa-folder-open"></i> My Portfolio</NavLink>
            <NavLink activeClassName="navbar__link--active" className="navbar__link page-links" to="/contact"><i className="fas fa-envelope"></i> Contact Me</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Header;
