(() => {
    document.addEventListener("DOMContentLoaded", () => {

        const elements =
            document.querySelectorAll(".certificates img");

        const length = elements.length;

        elements.forEach(img => {

            if (length % 2 === 0 && window.innerWidth >= 768) {
                img.style.width = "calc(50% - 0.5rem)";
            }
            else {
                img.style.width = "calc(30% - 0.5rem)";
            }

        });
    });
})();