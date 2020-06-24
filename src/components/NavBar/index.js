import React from "react";
import "../../App.css";

function Header() {
  return (
    <div className="jumbotron">
      <div className="container text-container">
        <p className="jumbotron-text d-flex justify-content-around">
            <span className="full-name"><h1>Chyna Davis</h1></span>
            <span className="job-title"><h4>Full-Stack Web Developer</h4></span>
        </p>
        <p className="d-flex justify-content-around">
            <span><a className="page-links" href="/"><i class="fas fa-user-alt"></i> About Me</a></span>
            <span><a className="page-links" href="/portfolio"><i class="fas fa-folder-open"></i> My Portfolio</a></span>
            <span><a className="page-links" href="/contact"><i class="fas fa-envelope"></i> Contact Me</a></span>
        </p>
      </div>
    </div>
  );
}

export default Header;
