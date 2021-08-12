/* =================Theme Switcher ==============*/
const themeSwitcher = document.querySelector(".themeSwitch");
let theme = localStorage.getItem("theme");

function lightTheme() {
  document.body.style.background = "#e0fbfc";
  document
    .querySelectorAll(".stats")
    .forEach((el) => (el.style.background = "#bee3db"));
  localStorage.setItem("theme", "enabled");
  document.querySelector(".sidebar").classList.remove("text-secondary");
  document.querySelector(".themeIcon").classList.remove("bi-sun-fill");
  document.querySelector(".themeIcon").classList.add("bi-moon-stars-fill");
  document.querySelector("#offcanvasTop").classList.remove("bg-dblue");
  document.querySelector("#offcanvasTop").classList.add("bg-lightTheme");
}

function darkTheme() {
  document.body.style.background = "#0a1726";
  document
    .querySelectorAll(".stats")
    .forEach((el) => (el.style.background = "#131f2d"));
  localStorage.setItem("theme", "disabled");
  document.querySelector(".sidebar").classList.add("text-secondary");
  document.querySelector(".themeIcon").classList.remove("bi-moon-stars-fill");
  document.querySelector(".themeIcon").classList.add("bi-sun-fill");
  document.querySelector("#offcanvasTop").classList.remove("bg-lightTheme");
  document.querySelector("#offcanvasTop").classList.add("bg-dblue");
}

themeSwitcher.addEventListener("click", () => {
  let current = "";
  let current2 = "rgb(10, 23, 38)";
  if (
    document.body.style.background == current ||
    document.body.style.background == current2
  ) {
    lightTheme();
  } else {
    darkTheme();
  }
});

if (localStorage.getItem("theme") === "enabled") {
  lightTheme();
}
