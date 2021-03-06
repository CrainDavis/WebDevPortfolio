import React from "react";
import "../../App.css";
import { Card, Row, Col } from "react-bootstrap";

import jpnQuiz from "./app-images/jpn-quiz-IMAGE.png";
import weatherDashboard from "./app-images/weather-dashboard-IMAGE.png";
import employeeTrackerCMS from "./app-images/employee-CMS-IMAGE.png";
import burger from "./app-images/burger-IMAGE.png";
import bestimator from "./app-images/bestimator-IMAGE.png";
import employeeDirectory from "./app-images/employee-directory-IMAGE.png";
import googleBookshelf from "./app-images/google-bookshelf-IMAGE.png";
import colorStory from "./app-images/color-story-IMAGE.png";
import colorSorter from "./app-images/color-sorting-machine-IMAGE.png";

const images = [
  jpnQuiz,
  weatherDashboard,
  employeeTrackerCMS,
  burger,
  bestimator,
  employeeDirectory,
  googleBookshelf,
  colorStory,
  colorSorter
];

function WebProject(props) {
  return (
    <>
      <Col xs={12} md={6} xl={4} className="mb-3">
        <Card key={props.webProject.id} className="project-card h-100">
          <Card.Img variant="top" className="project-img" src={images[props.webProject.num]}/>
          <Card.Body>
            <Card.Title>{props.webProject.app_name}</Card.Title>
            <Card.Text className="project-desc">
              <p style={{ fontSize: "75%" }} className="card-text">{props.webProject.app_text}</p>
              <p style={{ fontSize: "75%" }} className="card-text">
                <span style={{ fontWeight: "bold" }}>tech used: </span>{props.webProject.tech_used.join(", ")}
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row className="justify-content-md-center">
              <Col xs={6}>
                <a className="project-link-btn" href={props.webProject.app_href} target="__blank">
                  {props.webProject.app_name === "Employee Tracker CMS" ? "see demo →" : "see app →"}
                </a>
              </Col>
              <Col xs={6}>
                <a className="project-link-btn" href={props.webProject.gh_href} target="__blank">
                  see repo →
                </a>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}

export default WebProject;
