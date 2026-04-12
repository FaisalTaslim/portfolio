const map_redirects = {
    ".about-link": "about-myself",
    ".skills-link": "main-2",
    ".projects-link": "main-3",
    ".certifications-link": "main-4",
    ".contacts-link": "footer",
};

Object.keys(map_redirects).forEach((key) => {
    const elements = document.querySelectorAll(key);

    elements.forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();

            const target = document.getElementById(map_redirects[key]);

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
});