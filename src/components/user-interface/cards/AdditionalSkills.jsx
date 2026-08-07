import HeaderCard from "./HeaderCard.jsx"
import {skillsAdditionalCardsData} from "../../../data/card-data.js"

import "./Card.css"
import "../../../components/user-interface/Capsule-Text.css"

function AdditionalSkillsCard() {
  return (
    <>
      {skillsAdditionalCardsData.map((card) => (
        <div className="skills-card" key={card.heading}>
          <HeaderCard
            icon={card.icon}
            heading={card.heading}
          />

          <div className="skills-description">
            <p className="override-paragraph">{card.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default AdditionalSkillsCard;