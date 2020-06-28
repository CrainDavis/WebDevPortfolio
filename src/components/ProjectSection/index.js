import React from "react";
import "../../App.css";
import { Row } from "react-bootstrap";
import projects from "../../utils/projects";
import Project from "../Project";


function ProjectSection() {
  return (
    <>
    <Row noGutters>
    {projects.map((project) => (
        <Project project={project}/>
    ))}
    </Row>
    </>
  );
}

export default ProjectSection;
