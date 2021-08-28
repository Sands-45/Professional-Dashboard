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
// function openTab(evt, tabName) {
//   let i, x, tablinks;
//   x = document.querySelectorAll(".tabContent");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   tablinks = document.querySelectorAll(".sideNav");
//   for (i = 0; i < x.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(tabName).style.display = "flex";
//   evt.currentTarget.className += " active";
// }

let navLinks = document.getElementsByClassName("sideNav");
let linksContent = document.getElementsByClassName("tabContent");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    Array.prototype.forEach.call(navLinks, (item) =>
      item.classList.remove("active")
    );
    navLinks[i].classList.add("active");
    for (let j = 0; j < linksContent.length; j++) {
      if (
        navLinks[i].id == linksContent[j].id &&
        navLinks[i].classList.contains("active") == true
      ) {
        linksContent[j].style.display = "flex";
      } else {
        linksContent[j].style.display = "none";
      }
    }
  });
}
