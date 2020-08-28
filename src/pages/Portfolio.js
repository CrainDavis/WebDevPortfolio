import React from "react";
import "../App.css";
import "../pages/css/Portfolio.css";
import SectionSpacing from "../components/SectionSpacing";
import ProjectSection from "../components/ProjectSection";

function Portfolio() {
  return (
    <div className="main-container">
      <div className="main-text-area">
        <div className="row">
          <div className="col-12">
            <h4 className="page-label">My Portfolio</h4>
          </div>
        </div>
        <SectionSpacing />
        <ProjectSection />
      </div>
    </div>
  );
}

export default Portfolio;
