const toggleBnt = document.querySelector(".navbar-togleBtn");
const menu = document.querySelector(".navbar-menu");
const icons = document.querySelector(".navbar-icons");

toggleBnt.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
