import React from "react";
import "../App.css";
import SectionSpacing from "../components/SectionSpacing";
import Resume from "../utils/documents/ChynaDavis_resume.pdf";

function Contact() {
    return (
        <div className="main-container">
            <div className="main-text-area">
                <div className="row">
                    <div className="col-12"><h4 className="page-label">Contact Me</h4></div>
                </div>
                <SectionSpacing />
                <div className="row">
                    <div className="main-contact-card col-12 col-lg-4 d-flex justify-content-around">
                        <div className="sns-section">
                            <div className="row">
                                <div className="col-12">
                                    <span className="sns-link-heading">find me on:</span>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-12">
                                    <span className="sns-link"><a className="sns-link-icon" href="https://www.facebook.com/chyna.davis.5"><i class="fab fa-facebook"></i></a></span>
                                    <span className="sns-link"><a className="sns-link-icon" href="https://linkedin.com/in/chyna-davis"><i class="fab fa-linkedin"></i></a></span>
                                    <span className="sns-link"><a className="sns-link-icon" href="https://github.com/CrainDavis"><i class="fab fa-github"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-contact-card card-address col-12 col-lg-4 d-flex justify-content-around">
                        <div className="sns-section">
                            <div className="row">
                                <div className="col-12">
                                    <span className="sns-link-heading">contact me at:</span>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-12">
                                    <span className="contact-address"><i class="fas fa-mobile-alt"></i> (520) 269-1481</span>
                                </div>
                                <div className="col-12">
                                    <span className="contact-address"><i class="fas fa-envelope"></i><a className="email-link" href="mailto:chyna.davis11@gmail.com"> chyna.davis11@gmail.com</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-contact-card col-12 col-lg-4 d-flex justify-content-around">
                        <div className="sns-section">
                            <div className="row">
                                <div className="col-12">
                                    <span className="sns-link-heading">check out my resume:</span>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-12">
                                    <span className="sns-link"><a className="resume-link" href={Resume}><i className="far fa-file-alt"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SectionSpacing />
            </div>
        </div>
    );
}

export default Contact;