import React from "react";
import "../App.css";
import hibiscusLogo from "../utils/images/art-images/hibiscus-logo.png";

function Welcome() {
    return (
        <div className="main-container">
            <div className="main-text-area">
                <div className="welcome-content row justify-content-center">
                    <div className="col-xs-12 col-md-6 col-lg-4 col-xl-3">
                        <img src={hibiscusLogo} alt="hibiscus-logo" className="hibiscus-logo"></img>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-8 col-xl-9">
                        <div className="row justify-content-center">
                            <div className="col-12"><h4 className="welcome-statement1">Welcome to my Web Development Portfolio,</h4></div>
                            <div className="col-12"><h4 className="welcome-statement2">and thanks for visiting!</h4></div>
                            <div className="col-12"><h6 className="welcome-statement3">read my biography, check out my projects, and contact me</h6></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;