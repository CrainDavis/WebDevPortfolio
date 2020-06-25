import React from "react";
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
            <span><a className="page-links" href="/"><i className="fas fa-user-alt"></i> About Me</a></span>
            <span><a className="page-links" href="/portfolio"><i className="fas fa-folder-open"></i> My Portfolio</a></span>
            <span><a className="page-links" href="/contact"><i className="fas fa-envelope"></i> Contact Me</a></span>
        </p>
      </div>
    </div>
  );
}

export default Header;
