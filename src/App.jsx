import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  useEffect(() => {
    const container = document.getElementById("particles");

    if (!container) return;

    const count = 60;

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");

      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.top = Math.random() * 100 + "%";
      p.style.animationDelay = Math.random() * 4 + "s";

      const size = Math.random() * 1.5 + 1;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;

      container.appendChild(p);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="background">
        <div className="glow-primary"></div>
        <div className="glow-secondary"></div>
        <div className="dot-grid"></div>
        <div className="particles" id="particles"></div>
      </div>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
