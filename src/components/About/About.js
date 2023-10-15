import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './About.css'

export default function About(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: "I am a software engineer in wa, usa. i LOVE coding and art; for me, coding is the 8th form of art: using imagination and logicity to create the masterpiece. this site is the way for me to convey my definition of ART to everybody.",
    highlights: {
      bullets: ["Achieved 2 Golden Medals in Mathematics", "Participated as a copywriter for some nonprofit-organizations in VietNam", "Earned the Associates degree from Bellevue College", "Completed the internship in a sponsored organization - Whimsy Walks", "Earned the Bachelor degree in University of Washington"],
      heading: "Highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading
          title={"About"}
          subHeading={"Some information about me"}
        />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-option">
              <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToContact()}
              > {" "}
              Contact Me {" "}
              </button>
              <a href="MarlinBanhResume.pdf" download="MarlinBanhResume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
