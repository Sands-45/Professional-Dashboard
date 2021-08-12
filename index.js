const dashDropDown = document.querySelector("#dash-dropDown");
let dashDropMenu = document.querySelector("#dropMenu");
let dropDownIcon = document.getElementById("dropIcon");

dashDropDown.addEventListener("click", () => {
  dashDropMenu = document.querySelector("#dropMenu");
  dropDownIcon = document.getElementById("dropIcon");
  dashDropMenu.classList.toggle("dropHS");
  dropDownIcon.classList.toggle("rotate");
});

/* ============= Active Tab =============*/
let activeTab;
let tabs = document.querySelectorAll(".sideNav");
tabs.forEach((option) => {
  option.addEventListener("click", () => {
    if (activeTab) activeTab.classList.remove("active");
    activeTab = option;
    activeTab.classList.add("active");
  });
});
/* =================Minimize SideBar ==============*/
const toggleSideBtn = document.getElementById("toggle");

toggleSideBtn.addEventListener("click", () => {
  let sideNav = document.getElementById("sideNav");
  let mainContent = document.getElementById("mainContent");
  let navControlLg = document.querySelector(".navMiniLg");
  let collapse = document.getElementById("collapse");
  collapse.classList.toggle("active");
  let colNav = "active";
  if (collapse.classList == colNav) {
    sideNav.style.width = "0%";
    sideNav.style.zIndex = "-1";
    sideNav.style.opacity = "0";
    mainContent.style.width = "97%";
    mainContent.style.zIndex = "1";
    navControlLg.classList.remove("bi-grid-fill");
    navControlLg.classList.add("bi-grid-1x2-fill");
  } else {
    sideNav.style.width = "16.66666667%";
    sideNav.style.opacity = "1";
    sideNav.style.zIndex = "0";
    mainContent.style.zIndex = "0";
    mainContent.style.width = "83.33333333%";
    navControlLg.classList.remove("bi-grid-1x2-fill");
    navControlLg.classList.add("bi-grid-fill");
  }
});
/* ==============OffMenu Canvas ==================*/
const toggleOffcanvas = document.getElementById("toggle2");
let sideMenuOffcanvas = document.getElementById("sideMenu-Offcanvas");

toggleOffcanvas.addEventListener("click", () => {
  sideMenuOffcanvas.classList.toggle("displayMenu");
});

const dashDropDown2 = document.querySelector("#dash-dropDown2");
let dashDropMenu2 = document.querySelector("#dropMenu2");
let dropDownIcon2 = document.getElementById("dropIcon2");

dashDropDown2.addEventListener("click", () => {
  dashDropMenu2.classList.toggle("dropHS");
  dropDownIcon2.classList.toggle("rotate");
});
