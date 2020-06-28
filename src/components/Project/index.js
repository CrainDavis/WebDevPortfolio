import React from "react";
import "../../App.css";
import { Card, Col } from "react-bootstrap";

import img1 from "../../utils/images/app-images/code-quiz-IMAGE.png";
import img2 from "../../utils/images/app-images/weather-dashboard-IMAGE.png";
import img3 from "../../utils/images/app-images/recipe-finder-IMAGE.png";
import img4 from "../../utils/images/app-images/burger-IMAGE.png";
import img5 from "../../utils/images/app-images/bestimator-IMAGE.png";
import img6 from "../../utils/images/app-images/workout-tracker-IMAGE.png";
import img7 from "../../utils/images/app-images/employee-directory-IMAGE.png"; 

const images = [img1, img2, img3, img4, img5, img6, img7];

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
              <p className="card-text">{props.project.app_text}</p>
              <span className="d-flex justify-content-around">
                <a
                  className="project-link-btn"
                  href={props.project.app_href}
                  target="__blank"
                >
                  see app→
                </a>
                <a
                  className="project-link-btn"
                  href={props.project.gh_href}
                  target="__blank"
                >
                  see repo→
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
