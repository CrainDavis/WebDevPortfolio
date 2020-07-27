import React from "react";
import "../../App.css";
import { Card, Col } from "react-bootstrap";

import codeQuiz from "../../utils/images/app-images/code-quiz-IMAGE.png";
import weatherDashboard from "../../utils/images/app-images/weather-dashboard-IMAGE.png";
// import recipeFinder from "../../utils/images/app-images/recipe-finder-IMAGE.png";
import employeeTrackerCMS from "../../utils/images/app-images/employee-CMS-IMAGE.png";
import burger from "../../utils/images/app-images/burger-IMAGE.png";
import bestimator from "../../utils/images/app-images/bestimator-IMAGE.png";
import workoutTracker from "../../utils/images/app-images/workout-tracker-IMAGE.png";
import employeeDirectory from "../../utils/images/app-images/employee-directory-IMAGE.png";
import googleBookshelf from "../../utils/images/app-images/google-bookshelf-IMAGE.png";
import colorStory from "../../utils/images/app-images/color-story-IMAGE.png"

const images = [codeQuiz, weatherDashboard, employeeTrackerCMS, burger, bestimator, workoutTracker, employeeDirectory, googleBookshelf, colorStory];

function Project(props) {
  return (
    <>
      <Col xs={12} md={6} lg={4} xl={3} className="mb-3">
        <Card key={props.project.id} className="h-100">
          <Card.Img
            variant="top"
            className="project-img"
            src={images[props.project.num]}
          />
          <Card.Body>
            <Card.Title>{props.project.app_name}</Card.Title>
            <Card.Text>
              <p style={{fontSize: "75%"}} className="card-text">{props.project.app_text}</p>
              <span className="d-flex justify-content-around">
                <a
                  className="project-link-btn"
                  href={props.project.app_href}
                  target="__blank"
                >
                  see app →
                </a>
                <a
                  className="project-link-btn"
                  href={props.project.gh_href}
                  target="__blank"
                >
                  {props.project.app_name === "Employee Tracker CMS" ? ("see demo →") : ("see repo →")}
                </a>
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Project;
