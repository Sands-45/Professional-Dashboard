/* =================Theme Switcher ==============*/
const themeSwitcher = document.querySelector(".themeSwitch");
let theme = localStorage.getItem("theme");

function lightTheme() {
  document.body.style.background = "#e0fbfc";
  document
    .querySelectorAll(".stats")
    .forEach((el) => (el.style.background = "#bee3db"));

  document
    .querySelectorAll(".charts")
    .forEach((el) => (el.style.background = "#bee3db"));

  let x = window.matchMedia("(max-width: 1200px)");
  sideBarTheme(x); // Call listener function at run time
  x.addListener(sideBarTheme); // Attach listener function on state changes
  function sideBarTheme(x) {
    if (x.matches) {
      document.getElementById("sideNav").style.background = "#bee3db9f";
    } else {
      document.getElementById("sideNav").style.background = "#e0fbfc";
    }
  }

  localStorage.setItem("theme", "enabled");
  document.querySelector(".sidebar").classList.remove("text-secondary");
  document.querySelector(".themeIcon").classList.remove("bi-sun-fill");
  document.querySelector(".themeIcon").classList.add("bi-moon-stars-fill");
}

function darkTheme() {
  document.body.style.background = "#0a1726";

  document
    .querySelectorAll(".stats")
    .forEach((el) => (el.style.background = "#131f2d"));

  document
    .querySelectorAll(".charts")
    .forEach((el) => (el.style.background = "#131f2d"));
    
  let x = window.matchMedia("(max-width: 1200px)");
  sideBarTheme(x); // Call listener function at run time
  x.addListener(sideBarTheme); // Attach listener function on state changes
  function sideBarTheme(x) {
    if (x.matches) {
      document.getElementById("sideNav").style.background = "#0a172691";
    } else {
      document.getElementById("sideNav").style.background = "#0a1726";
    }
  }
  localStorage.setItem("theme", "disabled");
  document.querySelector(".sidebar").classList.add("text-secondary");
  document.querySelector(".themeIcon").classList.remove("bi-moon-stars-fill");
  document.querySelector(".themeIcon").classList.add("bi-sun-fill");
}
 /* ===============Save Theme to Local Storage ===========*/
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
