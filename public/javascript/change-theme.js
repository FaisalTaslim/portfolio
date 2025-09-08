const light_theme = document.querySelector(".light-theme");
const dark_theme = document.querySelector(".dark-theme");
const theme_link = document.querySelector(".theme");

// Start state (only light theme visible by default)
dark_theme.style.display = "none";

light_theme.addEventListener("click", () => {
    light_theme.style.display = "none";  // hide sun
    dark_theme.style.display = "block";  // show cloud+sun
    theme_link.setAttribute("href", "public/css/dark-theme.css");
});

dark_theme.addEventListener("click", () => {
    dark_theme.style.display = "none";   // hide cloud+sun
    light_theme.style.display = "block"; // show sun
    theme_link.setAttribute("href", "public/css/light-theme.css");
});
