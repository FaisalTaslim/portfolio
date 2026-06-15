document.addEventListener("DOMContentLoaded", () => {
  const map_redirects = {
    ".about-link": "about-myself",
    ".skills-link": "main-2",
    ".projects-link": "main-3",
    ".certifications-link": "main-4",
    ".contacts-link": "footer",
  };

  const mobileNavSelect = document.querySelector(".nav-bar-mobile select");
  if (mobileNavSelect) {
    mobileNavSelect.addEventListener("change", () => {
      const targetId = mobileNavSelect.value;
      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Let users pick the same destination again (change won't fire if value doesn't change).
      mobileNavSelect.value = "";
    });
  }

  Object.keys(map_redirects).forEach((key) => {
    const elements = document.querySelectorAll(key);

    elements.forEach((el) => {
      // Options inside <select> don't reliably emit click events on real mobile UIs.
      if (el.tagName === "OPTION") return;

      el.addEventListener("click", (e) => {
        e.preventDefault();

        const target = document.getElementById(map_redirects[key]);
        if (!target) return;

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    window.location.href = "/portfolio/thank-you.html";
  }
});
