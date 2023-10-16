import React, { useState } from "react";
import "./Projects.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Projects(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const ProjectsHeading = (props) => {
    return (
      <div className="projects-heading">
        <div className="projects-main-heading">
          {props.Date ? (
            <div className="heading-date">
              {props.Date}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="projects-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="projects-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const projectsBullets = [
    { label: "Whimsy Walks", logoSrc: "education.svg" },
    { label: "Inventory Management Application", logoSrc: "work-history.svg" },
    { label: "Species Classification", logoSrc: "programming-skills.svg" },
    { label: "Outbreak_PTO Game", logoSrc: "projects.svg" },
    { label: "Calendar", logoSrc: "interests.svg" },
  ];

  const projectsDetails = [
    <div className="projects-screen-container" key="work-experience">
      <div className="experience-container">
        <ProjectsHeading
          subHeading={"Front-end Developer Internship"}
          Date={"2023"}
        />
        <div className="experience-description">
            <a href="https://www.whimsywalks.org" className="projects-description-text">Link to the project</a>
        </div>
        <div className="experience-description">
          <span className="projects-description-text">
            - Developed the appearance of the website, and implemented the dynamic map based on the users’
locations and navigating function to the destination for the users to start walking
          </span>
          <br />
          <span className="projects-description-text">
            - Utilized knowledge in HTML, CSS, JavaScript, and related libraries for the front-end and back-end
of the project
          </span>
          <br />
          <span className="projects-description-text">
            - Improved the productivity of the website, and received 80% positive reviews higher from users’
experience
          </span>
          <br />
        </div>
      </div>
    </div>,

<div className="projects-screen-container" key="work-experience">
<div className="experience-container">
  <ProjectsHeading
    subHeading={"IOS Project"}
    Date={"2021"}
  />
  <div className="experience-description">
      <a href="https://github.com/marlinism/GroceryApp" className="projects-description-text">Link to the project</a>
  </div>
  <div className="experience-description">
    <span className="projects-description-text">
      - Implemented an application that is able to keep track of the amount of stock, reduce overstocking,
and gain a better profit margin
    </span>
    <br />
    <span className="projects-description-text">
      - Utilized Swift, XCode, and Core Data to create the design, function, and engage with the stored
information
    </span>
    <br />
    <span className="projects-description-text">
      - Improved productivity of the business by reducing 40% the time to keep tracking stock
    </span>
    <br />
  </div>
</div>
</div>,
<div className="projects-screen-container" key="work-experience">
      <div className="experience-container">
        <ProjectsHeading
          subHeading={"Machine Learning Project"}
          Date={"2021"}
        />
        <div className="experience-description">
            <a href="https://github.com/marlinism/SpeciesClassificationApp" className="projects-description-text">Link to the project</a>
        </div>
        <div className="experience-description">
          <span className="projects-description-text">
            - Purposed to develop an application with the ability to classify the different animals to support
newborn children
          </span>
          <br />
          <span className="projects-description-text">
            - Utilized Swift, XCode, and related libraries to develop a machine-learning program that classifies
different types of animals
          </span>
          <br />
          <span className="projects-description-text">
            - Trained the program with the large-scale of different species’ images
          </span>
          <br />
        </div>
      </div>
    </div>,

<div className="projects-screen-container" key="work-experience">
<div className="experience-container">
  <ProjectsHeading
    subHeading={"Game Project"}
    Date={"2022"}
  />
  <div className="experience-description">
      <a href="https://github.com/marlinism/OUTBREAKPTO" className="projects-description-text">Link to the project</a>
  </div>
  <div className="experience-description">
    <span className="projects-description-text">
      - Developed the game with the purpose is for students to relax after school and work
    </span>
    <br />
    <span className="projects-description-text">
      - Applied knowledge in C#, Unity in designing the interface for the game and enhancing the sound
effects of all the movements
    </span>
    <br />
    <span className="projects-description-text">
      - Received 73% positive reviews after 2 weeks of publishing on campus and on social media
    </span>
    <br />
  </div>
</div>
</div>,
<div className="projects-screen-container" key="work-experience">
<div className="experience-container">
  <ProjectsHeading
    subHeading={"VueJS Project"}
    Date={"2021"}
  />
  <div className="experience-description">
      <a href="https://github.com/marlinism/Calendar_Vuejs" className="projects-description-text">Link to the project</a>
  </div>
  <div className="experience-description">
    <span className="projects-description-text">
      - Built the calendar using Vue.js and ran it using a browser or Electron
    </span>
    <br />
    <span className="projects-description-text">
      - Improved the ability of time management of college students in studying, working, and social life
    </span>
    <br />
    <span className="projects-description-text">
      - Worked as the tester in a group of five to implement a calendar that is able to display day, week,
month, year, and store events locally
    </span>
    <br />
  </div>
</div>
</div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return projectsBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <span className="bullet-logo">◦</span>
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getProjectsScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="projects-details-carousal"
      >
        {projectsDetails.map((ProjectsDetail) => ProjectsDetail)}
      </div>
    );
  };

  return (
    <div className="projects-container screen-container" id={props.id || ""}>
      <div className="projects-content">
        <ScreenHeading title={"Projects"} subHeading={"My Favorite Projects Details"} />
        <div className="projects-card">
          <div className="projects-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="projects-bullet-details">{getProjectsScreens()}</div>
        </div>
      </div>
    </div>
  );
}
