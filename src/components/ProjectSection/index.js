import React from "react";
import { Tabs, Tab, Row } from "react-bootstrap";
import webProjects from "../../utils/WebProjects";
import WebProject from "../WebProject";
import artProjects from "../../utils/ArtProjects";
import ArtProject from "../ArtProject";

function ProjectSection() {
  return (
    <div className="project-section">
      <Tabs
        className="tabs-section"
        defaultActiveKey="webDevProjects"
        transition={false}
        id="noanim-tab-example"
      >
        <Tab eventKey="webDevProjects" title="Web Development Projects">
          <Row noGutters>
            {webProjects.map((webProject) => (
              <WebProject key={`web-${webProject.id}`} webProject={webProject} />
            ))}
          </Row>
        </Tab>
        <Tab eventKey="artProjects" title="Digital Illustration / Design">
          <Row noGutters>
            {artProjects.map((artProject) => (
              <ArtProject key={`art-${artProject.id}`} artProject={artProject} />
            ))}
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ProjectSection;
