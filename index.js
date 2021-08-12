const dashDropDown = document.querySelector("#dash-dropDown");
let dashDropMenu = document.querySelector("#dropMenu");
let dropDownIcon = document.getElementById("dropIcon");

dashDropDown.addEventListener("click", () => {
  dashDropMenu = document.querySelector("#dropMenu");
  dashDropMenu.classList.toggle("dropHS");
  let state = "dropHS";
  if (dashDropMenu.classList == state) {
    dropDownIcon = document.getElementById("dropIcon").style.transform =
      "rotate(-180deg)";
  } else {
    dropDownIcon = document.getElementById("dropIcon").style.transform =
      "rotate(0deg)";
  }
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
  let collapse = document.getElementById("collapse");
  collapse.classList.toggle("active");
  let colNav = "active";
  if (collapse.classList == colNav) {
    sideNav.style.width = "0%";
    sideNav.style.zIndex = "-1";
    sideNav.style.opacity = "0";
    mainContent.style.width = "97%";
    mainContent.style.zIndex = "1";
  } else {
    sideNav.style.width = "16.66666667%";
    sideNav.style.opacity = "1";
    sideNav.style.zIndex = "0";
    mainContent.style.zIndex = "0";
    mainContent.style.width = "83.33333333%";
  }
});

