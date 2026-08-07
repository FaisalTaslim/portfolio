import { useState } from "react";
import "./Header.css";
import Button from "../user-interface/Button.jsx";
import {navButtonsData} from "../../data/button-data.js";

function Header() {
  const [activeButton, setActiveButton] = useState("Home");

  return (
    <header>
      <div className="left-side">
        <div className="brand">
          <div className="mark">FT</div>
          Faisal Taslim
        </div>
      </div>

      <div className="middle">
        {navButtonsData.map((button) => {
          return (
            <Button
              key={button.text}
              text={button.text}
              status={activeButton === button.text ? "active" : "deactivate"}
              size={button.size}
              onClick={() => setActiveButton(button.text)}
            />
          );
        })}
      </div>
      
      <div className="right-side">
        <Button
          key={"Resume"}
          text="Resume"
          status="deactivate"
          size="big"
          onClick={() => setActiveButton("Resume")}
        />
        <button className="hamburger-menu deactivate big">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;