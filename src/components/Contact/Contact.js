import React, { useState } from "react";
import Typical from "react-typical";
import "./Contact.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../components/footer/footer";

export default function Contact(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading
        subHeading={"You have something for me? ☺️"}
        title={"Contact Me"}
      />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Send me something ☺️", 1000]} />
          </h2> {" "}
          <a href="https://www.instagram.com/marlinism_/">
            <i className="fa fa-instagram fa-3x"></i>
          </a>
          <a href="https://www.linkedin.com/in/tuong-banh">
            <i className="fa fa-linkedin-square fa-3x"></i>
          </a>
          <a href="https://github.com/marlinism">
            <i className="fa fa-github-square fa-3x"></i>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
