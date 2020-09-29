import React from "react";
import "../App.css";
import "../pages/css/AboutMe.css";
import SectionSpacing from "../components/SectionSpacing";
import BioImage from "../utils/images/bio-image.jpeg";

function AboutMe() {
  return (
    <div className="main-container">
      <div className="main-text-area">
        <div className="row">
          <div className="col-12">
            <h4 className="page-label">About Me</h4>
          </div>
        </div>
        <SectionSpacing />
        <div className="row">
          <div className="col-12 col-md-5 col-xl-3">
            <img className="bio-image" src={BioImage} alt="aboutme-bio"></img>
          </div>
          <div className="col-12 col-md-7 col-xl-9 bio-paragraphs">
            <div className="row">
              <div className="col-12">
                <p className="para1">
                  Welcome to my webpage and thanks for visiting! My name is{" "}
                  <span className="para-accent">Chyna Davis</span> and I am a
                  linguist and full-stack web developer from{" "}
                  <span className="para-accent">Tucson, Arizona</span>. I
                  graduated from the{" "}
                  <span className="para-accent">University of Arizona</span> in
                  2017 with a degree in{" "}
                  <span className="para-accent">Linguistics</span> and a minor
                  in <span className="para-accent">Japanese</span> language.
                  After graduating, I traveled abroad to{" "}
                  <span className="para-accent">Taichung, Taiwan</span> to study{" "}
                  <span className="para-accent">Mandarin Chinese</span> in an
                  intensive and immersive environment. While studying at the{" "}
                  <span className="para-accent">
                    Tunghai University Chinese Language Center
                  </span>
                  , I was also teaching{" "}
                  <span className="para-accent">
                    English as a Second Language (ESL)
                  </span>
                  . After three semesters, I returned home and decided to enroll
                  in the{" "}
                  <span className="para-accent">
                    University of Arizona Full-Stack Web Development Bootcamp
                  </span>{" "}
                  to gain highly sought-after web development skills. In
                  addition to my new skills in web development, I also have
                  extensive experience using{" "}
                  <span className="para-accent">
                    Microsoft Office (Word, PowerPoint, Excel)
                  </span>{" "}
                  and{" "}
                  <span className="para-accent">
                    Adobe Creative Cloud (Illustrator, Photoshop, Dreamweaver)
                  </span>
                  . My goal is to be able to find employment through my skills
                  in web development in a challenging and rewarding field of
                  work, learn a thousand times more than I already have, and
                  help develop amazing web applications.
                </p>
                <p className="para1">
                  Though I have experience with both front and back-end
                  development, I especially enjoy the design aspect of creating
                  an application's user-oriented front-end, and am proficient
                  with technologies, libraries, and frameworks from both ends
                  including:
                </p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-10 col-md-8 col-lg-4 col-xl-2 skill-item-main">
                HTML5 / CSS3
              </div>
              <div className="col-10 col-md-8 col-lg-4 col-xl-3 skill-item-main">
                Bootstrap, Bulma, Material-UI
              </div>
              <div className="col-10 col-md-8 col-lg-4 col-xl-2 skill-item-main">
                JavaScript / jQuery
              </div>
              <div className="col-10 col-md-8 col-lg-4 col-xl-1 skill-item-main">
                React
              </div>
              <div className="col-10 col-md-8 col-lg-4 col-xl-2 skill-item-main">
                Node.js / Express.js
              </div>
              <div className="col-10 col-md-8 col-lg-4 col-xl-2 skill-item-main">
                Handlebars.js
              </div>
              <div className="col-10 col-md-8 col-lg-4 col-xl-1 skill-item-main">
                MySQL
              </div>
              <div className="col-10 col-md-8 col-lg-4 col-xl-1 skill-item-main">
                MongoDB
              </div>
              <div className="col-10 col-md-8 col-lg-4 col-xl-1 skill-item-main">
                REST APIs
              </div>
              <div className="col-10 col-md-8 col-lg-4 col-xl-1 skill-item-main">
                LocalStorage
              </div>
              <div className="col-10 col-md-8 col-lg-4 col-xl-2 skill-item-main">
                Git version control
              </div>
            </div>

            <br></br>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
