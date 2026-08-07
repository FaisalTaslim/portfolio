import { useState } from "react";
import CapsuleText from "../../user-interface/Capsule-Text.jsx";
import HeaderCard from "../../user-interface/cards/HeaderCard.jsx";
import Button from "../../user-interface/Button.jsx";
import ProjectCard from "../../user-interface/cards/ProjectCard.jsx";

import "../../user-interface/Capsule-Text.css";
import "../../user-interface/cards/Card.css";
import "./Projects.css"

function Projects() {
    const [activeButton, setActiveButton] = useState("All Projects");
    const buttondata = [
        {
            text: "All Projects",
            size: "small",
            onClick: () => setActiveButton("All Projects"),
        },
        {
            text: "Full-Stack",
            size: "small",
            onClick: () => setActiveButton("Full-Stack")
        },
        {
            text: "Frontend only",
            size: "small",
            onClick: () => setActiveButton("Frontend only")
        },
        {
            text: "Backend only",
            size: "small",
            onClick: () => setActiveButton("Backend only")
        }
    ];

    return (
        <div className="projects" data-aos="fade-up">
            <CapsuleText text="— MY WORK" override={true}/>
            <div className="divide-headers">
                <h2>Projects That</h2>
                <h2>Solve Problems</h2>
            </div>
            <p className="project-section-caption">
                A collection of full-stack projects where I design, build and deliver scalable and impactful applications.
            </p>
            <div className="project-buttons">
                {buttondata.map((button, index) => (
                    <Button key={index} text={button.text} status={activeButton === button.text ? "active" : "deactivate"} size={button.size} onClick={() => setActiveButton(button.text)} />
                ))}
            </div>
            <div className="projects-list">
                <ProjectCard type={activeButton}/>
            </div>
            <div className="ending-projects-section">
                <HeaderCard icon="fa-solid fa-rocket" heading="More projects on the way" caption="I'm constantly building and experiementing with new technologies"/>
            </div>
        </div>
    )
}

export default Projects;