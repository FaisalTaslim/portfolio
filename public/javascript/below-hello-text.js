const subtitle = document.querySelector(".about-subtitle");
const text = "Here's who I am & what I do";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

subtitle.textContent = "";
typeWriter();
