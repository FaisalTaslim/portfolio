import CapsuleText from "../Capsule-Text.jsx"
import HeaderCard from "./HeaderCard.jsx"
import {skillsTechnicalCardsData} from "../../../data/card-data.js"

import "./Card.css"
import "../../../components/user-interface/Capsule-Text.css"

function TechnicalSkillsCard() {
  return (
    <>
      {skillsTechnicalCardsData.map((card) => (
        <div className="skills-card" key={card.heading}>
          <HeaderCard
            icon={card.icon}
            heading={card.heading}
          />

          <div className="skills-list">
            {card.list.map((skill) => (
              <CapsuleText
                key={skill}
                text={skill}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default TechnicalSkillsCard;