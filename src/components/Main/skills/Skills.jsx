import CapsuleText from "../../user-interface/Capsule-Text.jsx";
import TechnicalSkillsCard from "../../user-interface/cards/TechnicalSkillsCard.jsx"

import "./Skills.css";
import "../../user-interface/Capsule-Text.css";
import AdditionalSkillsCard from "../../user-interface/cards/AdditionalSkills.jsx";

function Skills() {
  return (
    <div className="skills" data-aos="fade-up">
      <CapsuleText text="— MY SKILLS" override={true} />
      <div className="divide-headers">
        <h2>Skills That</h2>
        <h2 className="skills-highlight-header">Power</h2>
        <h2>My Work</h2>
      </div>
      <p>
        A carefully chosen stack of technologies that helps me build fast,
        scalable, and user-focused web applications.
      </p>
      <div className="technical-skills-heading">
        <p>Technical Skills</p>
        <hr/>
      </div>
      <div className="skills-container">
        <TechnicalSkillsCard />
      </div>
      <div className="technical-skills-heading">
        <p>Additional Skills</p>
        <hr/>
      </div>
      <div className="skills-container">
        <AdditionalSkillsCard />
      </div>
    </div>
  );
}

export default Skills;
