import { Fragment } from "react";

import HeaderCard from "./HeaderCard";
import CapsuleText from "../Capsule-Text";
import {projectdata} from "../../../data/projects-data";

import "./Card.css";
import "../Capsule-Text.css";

function ProjectCard({ type }) {
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
              <CapsuleText text="GitHub" icon={project.pillicon2} link={project.link}/>
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
