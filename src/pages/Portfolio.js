import React from "react";
import "../App.css";
import SectionSpacing from "../components/SectionSpacing";
import ProjectCard from "../components/ProjectCard";

function Portfolio() {
    return (
        <div className="main-container">
            <div className="main-text-area">
                <div className="row">
                    <div className="col-12"><h4 className="page-label">My Portfolio</h4></div>
                </div>
                <SectionSpacing />
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="portfolio-cards col-12">
                                <ProjectCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;