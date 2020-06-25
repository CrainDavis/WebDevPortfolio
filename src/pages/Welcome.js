import React from "react";
import "../App.css";

function Welcome() {
    return (
        <div className="main-container">
            <div className="main-text-area">
                <div className="row">
                    <div className="col-12"><h4 className="welcome-statement1">Welcome to my Web Development Portfolio,</h4></div>
                    <div className="col-12"><h4 className="welcome-statement1">and thanks for visiting!</h4></div>
                    <div className="col-12"><h6 className="welcome-statement2">read my biography, check out my projects, and contact me</h6></div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;