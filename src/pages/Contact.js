import React from "react";
import "../App.css";
import SectionSpacing from "../components/SectionSpacing";
import Resume from "../utils/documents/ChynaDavis_resume.pdf";
import BootcampCertificate from "../utils/documents/ChynaDavis_01.pdf";

function Contact() {
    return (
        <div className="main-container">
            <div className="main-text-area">
                <div className="row">
                    <div className="col-12"><h4 className="page-label">Contact Me</h4></div>
                </div>
                <SectionSpacing />
                <div className="row justify-content-center contact-me-section">
                    {/* social media links card */}
                    <div className="main-contact-card col-12 col-lg-4">
                        <div className="sns-section">
                            <div className="row">
                                <div className="col-12">
                                    <span className="sns-link-heading">find me on:</span>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-12">
                                    <span className="sns-link"><a className="sns-link-icon" href="https://www.facebook.com/chyna.davis.5" target="__blank"><i className="fab fa-facebook"></i></a></span>
                                    <span className="sns-link"><a className="sns-link-icon" href="https://linkedin.com/in/chyna-davis" target="__blank"><i className="fab fa-linkedin"></i></a></span>
                                    <span className="sns-link"><a className="sns-link-icon" href="https://github.com/CrainDavis" target="__blank"><i className="fab fa-github"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* contact method card */}
                    <div className="main-contact-card col-12 col-lg-4">
                        <div className="sns-section">
                            <div className="row">
                                <div className="col-12">
                                    <span className="sns-link-heading">contact me at:</span>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-12">
                                    <span className="contact-address"><a className="email-link" href="mailto:chyna.davis11@gmail.com"><i className="fas fa-envelope"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* resume & certificates card */}
                    <div className="main-contact-card col-12 col-lg-4">
                        <div className="sns-section">
                            <div className="row">
                                <div className="col-12">
                                    <span className="sns-link-heading">resume & certification:</span>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-12">
                                    <span className="sns-link"><a className="resume-link" href={Resume} target="__blank"><i className="far fa-file-alt"></i></a></span>
                                    <span className="sns-link"><a className="resume-link" href={BootcampCertificate} target="__blank"><i className="fas fa-medal"></i></a></span>
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