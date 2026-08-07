import { useEffect, useState } from "react";
import "./Header.css";
import Button from "../user-interface/Button.jsx";
import { navButtonsData } from "../../data/button-data.js";

function Header() {
  const [activeButton, setActiveButton] = useState("Home");
  const [activeTheme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", activeTheme);
    localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

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
        <div className="theme-change-icons">
          <i
            className="fa-regular fa-moon"
            style={{ display: activeTheme === "dark" ? "none" : "block" }}
            onClick={() => setTheme("dark")}
          ></i>
          <i
            className="fa-regular fa-sun"
            style={{ display: activeTheme === "light" ? "none" : "block" }}
            onClick={() => setTheme("light")}
          ></i>
        </div>
        <button className="hamburger-menu deactivate big">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
