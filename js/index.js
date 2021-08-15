const dashDropDown = document.querySelector("#dash-dropDown");
let dashDropMenu = document.querySelector("#dropMenu");
let dropDownIcon = document.getElementById("dropIcon");

dashDropDown.addEventListener("click", () => {
  dashDropMenu = document.querySelector("#dropMenu");
  dropDownIcon = document.getElementById("dropIcon");
  dashDropMenu.classList.toggle("dropHS");
  dropDownIcon.classList.toggle("rotate");
});

/* =================Minimize SideBar ==============*/
const toggleSideBtn = document.getElementById("toggle");

toggleSideBtn.addEventListener("click", () => {
  let sideNav = document.getElementById("sideNav");
  let mainContent = document.getElementById("mainContent");
  let toggleIcon = document.querySelector(".toggleIcon");
  let collapse = document.getElementById("collapse");
  collapse.classList.toggle("active");
  let colNav = "active";
  if (collapse.classList == colNav) {
    sideNav.style.width = "0%";
    sideNav.style.zIndex = "-1";
    mainContent.style.zIndex = "1";
    sideNav.style.opacity = "0";
    mainContent.style.width = "97%";
    toggleIcon.classList.remove("bi-grid-fill");
    toggleIcon.classList.add("bi-grid-1x2-fill");
  } else {
    sideNav.style.width = "16.66666667%";
    sideNav.style.opacity = "1";
    sideNav.style.zIndex = "1";
    mainContent.style.zIndex = "-1";
    mainContent.style.width = "83.33333333%";
    toggleIcon.classList.remove("bi-grid-1x2-fill");
    toggleIcon.classList.add("bi-grid-fill");
  }
});

/* ============= Active Tab =============*/
// tablinks = document.querySelectorAll(".sideNav");
// tablinks.forEach((item) => {
//   item.className = item.className.replace(" active", "");
// });

function openTab(evt, tabName) {
  let i, x, tablinks;
  x = document.querySelectorAll(".tabContent");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.querySelectorAll(".sideNav");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}
