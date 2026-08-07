import { useState } from "react";

import Header from "../../Header/Header.jsx";
import Button from "../../user-interface/Button.jsx";
import CapsuleText from "../../user-interface/Capsule-Text.jsx";
import HeaderCard from "../../user-interface/cards/HeaderCard.jsx";
import ExperienceCard from "../../user-interface/cards/ExperienceCard.jsx";

import "../../user-interface/Capsule-Text.css";
import "../../user-interface/cards/Card.css";
import "./About.css";

import {aboutButtonsData} from "../../../data/button-data.js";
import {aboutHeaderCardsData} from "../../../data/card-data.js";
import {aboutExperienceCardsData} from "../../../data/card-data.js";
import {aboutSkillsData} from "../../../data/capsule-text-data.js";

function About() {
  const [activeButton, setActiveButton] = useState("View My Work");

  return (
    <div className="about" id="about">
      <div className="top">
        <div className="left">
          <span className="hello">Hello, I am</span>
          <div className="divide-words">
            <h1>Faisal</h1>
            <h1>Taslim</h1>
          </div>
          <div className="role">
            <p>Full-Stack Developer</p>
          </div>
          <p id="about-myself">
            I build full-stack web applications with React, Node.js and MongoDB, focusing on performance, usability and solving real-world problems.
          </p>
          <div className="pills">
            {aboutSkillsData.map((pill) => {
              return (
                <CapsuleText
                  key={pill.text}
                  icon={pill.icon}
                  text={pill.text}
                />
              );
            })}
          </div>
          <div className="cta-buttons">
            {aboutButtonsData.map((button) => {
              return (
                <Button
                  key={button.text}
                  text={button.text}
                  status={
                    activeButton === button.text ? "active" : "deactivate"
                  }
                  size={button.size}
                  onClick={() => setActiveButton(button.text)}
                />
              );
            })}
          </div>
        </div>
        <div className="right">
          {aboutHeaderCardsData.map((card) => {
            return (
              <HeaderCard
                key={card.heading}
                icon={card.icon}
                heading={card.heading}
                caption={card.caption}
              />
            );
          })}
        </div>
      </div>
      <div className="bottom">
        {aboutExperienceCardsData.map((card) => {
          return (
            <ExperienceCard
              key={card.data}
              data={card.data}
              caption={card.caption}
            />
          );
        })}
      </div>
    </div>
  );
}

export default About;