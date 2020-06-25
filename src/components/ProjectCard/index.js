import React from "react";
import "../../App.css";
import projects from "../../utils/projects";
import img1 from "../../utils/images/app-images/code-quiz-IMAGE.png";
import img2 from "../../utils/images/app-images/weather-dashboard-IMAGE.png";
import img3 from "../../utils/images/app-images/recipe-finder-IMAGE.png";
import img4 from "../../utils/images/app-images/burger-IMAGE.png";
import img5 from "../../utils/images/app-images/bestimator-IMAGE.png";

const images = [img1, img2, img3, img4, img5];

function ProjectCard() {
    return (
        <>
        {projects.map((project) => (
            <div key={project.id} className="card ml-1 mr-1" style={{flex: 1}}>
            <img src={images[project.num]} className="project-img card-img-top" alt={project.id}></img>
                <div className="card-body">
                    <h5 className="card-title">{project.app_name}</h5>
                    <p className="card-text">{project.app_text}</p>
                    <span className="d-flex justify-content-around"><a className="project-link-btn" href={project.app_href}>see app→</a><a className="project-link-btn" href={project.gh_href}>see repo→</a></span>
                </div>
            </div>
        ))}
        </>
    );
}

export default ProjectCard;