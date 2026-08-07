import "./Main.css"
import About from "../Main/about/About.jsx";
import Project from "../Main/projects/Projects.jsx";
import Skills from "../Main/skills/Skills.jsx";
import Contact from "../Main/contact/Contact.jsx";

function Main() {
    return (
        <main>
            <About />
            <Project />
            <Skills />
            <Contact />
        </main>
    )
}

export default Main;