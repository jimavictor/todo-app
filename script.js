import {
  filterCompleted,
  filterActive,
  filterAll,
  removeItem,
  onItemHover,
  displayItemsLeft,
  addItems,
  checkItem,
  enableDark,
  disableDark,
  clearCompletedItems,
} from "./functions.js";
let darkMode = localStorage.getItem("darkMode");
const list = document.querySelector(".list");
const typing = document.querySelector(".typing");
let checkBox = document.querySelectorAll(".items");
let checkBoxArray = [...checkBox];
const dragInfo = document.querySelector(".drag-info");
const all = document.querySelector(".all");
const allMobile = document.querySelector(".all-mobile");
const active = document.querySelector(".active");
const activeMobile = document.querySelector(".active-mobile");
const completed = document.querySelector(".completed");
const completedMobile = document.querySelector(".completed-mobile");
const clearCompleted = document.querySelector(".clear-completed");
const filterContainer = document.querySelector(".filter-container");
const filterMobile = document.querySelector(".filter-mobile");
const input = document.querySelector("#input");
let crossIcons = document.querySelectorAll(".cross");
const modeDark = document.querySelector(".mode-dark");
const modeLight = document.querySelector(".mode-light");
const number = document.querySelector(".number");
let todoItems = document.querySelectorAll(".item");
let todoItemsArray = [...todoItems];
let crossIconsArray = [...crossIcons];
const body = document.getElementsByTagName("body")[0];

let activeState = false;
let allState = false;
let completedState = false;

let activeMobileState = false;
let allMobileState = false;
let completedMobileState = false;

new Sortable(list, { animation: 150 });

if (darkMode == "true") {
  enableDark();
} else {
  disableDark();
}
window.onload = function () {
  all.style.color = "hsl(192, 100%, 67%)";
  allMobile.style.color = "hsl(192, 100%, 67%)";
  allState = true;
  allMobileState = true;
  displayItemsLeft();
};

body.addEventListener("keydown", (e) => {
  addItems(e);
});

checkBoxArray.forEach((item) => {
  item.addEventListener("change", () => {
    checkItem(item);
  });
});

clearCompleted.addEventListener("click", function () {
  clearCompletedItems();
});

modeDark.addEventListener("click", function () {
  enableDark();
});
modeLight.addEventListener("click", function () {
  disableDark();
});

[...document.querySelectorAll(".item")].forEach((item) => {
  onItemHover(item);
});

crossIconsArray.forEach((item) => {
  item.addEventListener("click", () => {
    removeItem(item);
  });
});
completed.addEventListener("click", function () {
  activeState = false;
  allState = false;
  completedState = true;

  activeMobileState = false;
  allMobileState = false;
  completedMobileState = true;

  filterCompleted();
});
completedMobile.addEventListener("click", function () {
  activeState = false;
  allState = false;
  completedState = true;

  activeMobileState = false;
  allMobileState = false;
  completedMobileState = true;

  filterCompleted();
});
all.addEventListener("click", function () {
  activeState = false;
  allState = true;
  completedState = false;

  activeMobileState = false;
  allMobileState = true;
  completedMobileState = false;

  filterAll();
});
allMobile.addEventListener("click", function () {
  activeState = false;
  allState = true;
  completedState = false;

  activeMobileState = false;
  allMobileState = true;
  completedMobileState = false;

  filterAll();
});
active.addEventListener("click", function () {
  activeState = true;
  allState = false;
  completedState = false;

  activeMobileState = true;
  allMobileState = false;
  completedMobileState = false;

  filterActive();
});
activeMobile.addEventListener("click", function () {
  activeState = true;
  allState = false;
  completedState = false;

  activeMobileState = true;
  allMobileState = false;
  completedMobileState = false;

  filterActive();
});
export {
  list,
  body,
  number,
  modeDark,
  modeLight,
  all,
  active,
  completed,
  clearCompleted,
  dragInfo,
  filterMobile,
  darkMode,
  allState,
  allMobileState,
  allMobile,
  activeState,
  activeMobileState,
  activeMobile,
  completedState,
  completedMobileState,
  completedMobile,
  todoItems,
  typing,
  filterContainer,
  clearCompletedItems,
};
