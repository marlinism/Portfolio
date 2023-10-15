import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css"

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.instagram.com/marlinism_/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/tuong-banh">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/marlinism">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Marlin</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software Engineer 💻",
                    1000,
                    "Music Lover 🎶",
                    1000,
                    "Grad Student 🎓",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Welcome to <span className="highlighted-text">marlinism</span>!
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToContact()}
            // onClick={() => ScrollService.scrollHandler.scrollToContact()}
            > Contact Me</button>
            <a href="MarlinBanhResume.pdf" download="MarlinBanhResume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
