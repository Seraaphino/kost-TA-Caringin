const header = document.querySelector(".site-header");

const setHeaderState = () => {
  header.dataset.elevated = window.scrollY > 12 ? "true" : "false";
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });