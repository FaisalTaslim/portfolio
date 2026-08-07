import { Fragment } from "react";

import HeaderCard from "./HeaderCard";
import CapsuleText from "../Capsule-Text";
import "./Card.css";
import "../Capsule-Text.css";

function ProjectCard({ type }) {
  const projectdata = [
    {
      icon: "fa-solid fa-qrcode",
      type: "All Projects, Full-Stack",
      heading: "AttendSmart",
      caption: "Smart Attendance Platform",
      about:
        "A full-stack attendance management system using facial recognition. Built for automation, accuracy and real-time management, it uses the combination of face recognition and Qr code to mark attendance, and prevent proxy.",
      stacks: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "face-api.js",
        "qr-code.js",
      ],
      status: "Completed",
      color: "var(--success)",
      pillicon1: "fa-solid fa-square-arrow-up-right",
      pillicon2: "fa-brands fa-github",
    },
    {
      icon: "fa-regular fa-file",
      type: "All Projects, Full-Stack",
      heading: "Bytes of Life",
      caption: "Digital Journaling Application",
      about:
        "Bytes of Life is a modern digital journaling application built with React. It is designed to provide a clean and distraction-free space for capturing thoughts, memories, and daily experiences. The project focuses on intuitive UI, responsive design, and will later include features such as authentication, rich-text journaling, and cloud synchronization.",
      stacks: ["React.js", "Node.js", "Express.js", "MongoDB"],
      status: "In Progress",
      color: "var(--warning)",
      pillicon1: "fa-solid fa-square-arrow-up-right",
      pillicon2: "fa-brands fa-github",
    },
  ];

  const filteredProjects = projectdata.filter((project) =>
    project.type.toLowerCase().includes(type.toLowerCase()),
  );

  return (
    <>
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <div className="project-card" key={project.heading}>
            <HeaderCard
              icon={project.icon}
              heading={project.heading}
              caption={project.caption}
            />

            <p style={{ color: project.color }}>{project.status}</p>
            <p>{project.about}</p>

            <div className="project-stacks">
              {project.stacks.map((stack) => (
                <CapsuleText key={stack} text={stack} />
              ))}
            </div>

            <div className="live-demo">
              <CapsuleText text="Live Demo" icon={project.pillicon1} />
              <CapsuleText text="GitHub" icon={project.pillicon2} />
            </div>
          </div>
        ))
      ) : (
        <div className="fallback">
          <CapsuleText
            text="Nothing to show for this section."
            override={true}
          />
        </div>
      )}
    </>
  );
}

export default ProjectCard;
