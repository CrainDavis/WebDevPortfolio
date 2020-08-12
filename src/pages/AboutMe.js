import React from "react";
import "../App.css";
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
                  Welcome to my webpage and thanks for visiting! My name is
                  Chyna Davis and I am a linguist and full-stack web developer from Tucson, Arizona.
                  I graduated from the University of Arizona in 2017 with a
                  degree in Linguistics and a minor in Japanese language.
                </p>
                <p className="para1">
                  After graduating, I traveled abroad to Taichung, Taiwan to
                  study Mandarin Chinese in an intensive and immersive
                  environment. While studying at Tunghai University's Chinese
                  Language Center, I was also teaching English as a Second
                  Language (ESL). After three semesters, I returned home and
                  decided to enroll in the UofA's Coding Bootcamp to gain highly
                  sought-after web development skills. My goal is to be able to
                  find employment through these new skills in a challenging and
                  rewarding field of work, learn a thousand times more than I
                  already have, and help develop amazing web applications.
                </p>
                <p className="para1">
                  Though I have experience with both front and back-end
                  development, I especially enjoy the design aspect of creating
                  an application's user-oriented front-end, and am proficient
                  with technologies, libraries, and frameworks from both ends including:
                </p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-10 col-md-8 col-lg-4 col-xl-1 skill-item-main">
                HTML / CSS
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
                Node.js / Express
              </div>
              <div className="col-10 col-md-8 col-lg-4 col-xl-1 skill-item-main">
                Handlebars
              </div>
              <div className="col-10 col-md-8 col-lg-4 col-xl-2 skill-item-main">
                MySQL / Sequelize
              </div>
              <div className="col-10 col-md-8 col-lg-4 col-xl-1 skill-item-main">
                MongoDB
              </div>
              <div className="col-10 col-md-8 col-lg-4 col-xl-1 skill-item-main">
                REST APIs
              </div>
              <div className="col-10 col-md-8 col-lg-4 col-xl-2 skill-item-main">
                Git version control
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
