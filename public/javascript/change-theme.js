const light_theme = document.querySelector(".light-theme");
const dark_theme = document.querySelector(".dark-theme");
const theme_link = document.querySelector(".theme");
let count = 1;

dark_theme.style.display = "none";

light_theme.addEventListener("click", () => {
    if (count < 4) {
        theme_link.setAttribute("href", `public/css/themes/light-theme-${count}.css`);
        count++;
    }
    else {
        light_theme.style.display = "none";
        dark_theme.style.display = "block";
        theme_link.setAttribute("href", `public/css/themes/light-theme-${count}.css`);
        count = 1;
    }
});

dark_theme.addEventListener("click", () => {
    if (count < 4) {
        theme_link.setAttribute("href", `public/css/themes/dark-theme-${count}.css`);
        count++;
    }
    else {
        dark_theme.style.display = "none";
        light_theme.style.display = "block";
        theme_link.setAttribute("href", `public/css/themes/dark-theme-${count}.css`);
        count = 1;
    }
});
