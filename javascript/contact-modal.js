document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("contact-modal-overlay");
  const closeBtn = document.getElementById("contact-modal-close");
  const openTriggers = document.querySelectorAll(".contacts-link");

  function openModal(e) {
    if (e) e.preventDefault();
    overlay.classList.add("active");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    overlay.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  openTriggers.forEach((el) => {
    if (el.tagName !== "OPTION") {
      el.addEventListener("click", openModal);
    }
  });

  const mobileSelect = document.querySelector(".nav-bar-mobile select");
  if (mobileSelect) {
    mobileSelect.addEventListener("change", (e) => {
      const selected = e.target.options[e.target.selectedIndex];
      if (selected.classList.contains("contacts-link")) {
        openModal();
        mobileSelect.value = ""; 
      }
    });
  }

  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active"))
      closeModal();
  });
});
