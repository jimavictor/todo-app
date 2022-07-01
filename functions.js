import {
  todoItems,
  filterContainer,
  typing,
  list,
  body,
  number,
  modeDark,
  modeLight,
  darkMode,
  all,
  active,
  completed,
  completedMobile,
  activeMobile,
  allMobile,
  clearCompleted,
  allState,
  filterMobile,
  dragInfo,
  allMobileState,
  activeState,
  activeMobileState,
  completedState,
  completedMobileState,
} from "./script.js";

function displayItemsLeft() {
  if (allState == true || allMobileState == true) {
    number.innerHTML = list.getElementsByClassName("item").length;
  } else if (completedState == true || completedMobileState == true) {
    number.innerHTML = document.querySelectorAll(".check").length;
  } else {
    number.innerHTML =
      list.getElementsByClassName("item").length -
      document.querySelectorAll(".check").length;
  }
}

function addItems(e) {
  if (e.key == "Enter" && input.value != " " && input.value != "") {
    let myDiv = document.createElement("div");
    let myImg = document.createElement("img");
    let mySpan = document.createElement("span");
    let mySpann = document.createElement("span");
    let myInput = document.createElement("input");

    myInput.type = "checkbox";
    myInput.className = "items";
    myImg.className = "cross";
    mySpann.className = "new-item";
    myImg.src = "./images/icon-cross.svg";
    myDiv.className = "item";
    let darkMode = localStorage.getItem("darkMode");
    if (darkMode == "true") {
      myDiv.classList.add("dark-items");
    }
    mySpann.innerText = input.value;
    input.value = "";
    mySpan.append(myInput, mySpann);
    myDiv.append(mySpan, myImg);
    list.appendChild(myDiv);
  }
  let checkBox = document.querySelectorAll(".items");
  let checkBoxArray = [...checkBox];
  let todoItems = document.querySelectorAll(".item");
  let todoItemsArray = [...todoItems];
  let crossIcons = document.querySelectorAll(".cross");
  let crossIconsArray = [...crossIcons];

  if (completedState == true || completedMobileState == true) {
    todoItemsArray.forEach((item) => {
      item.style.display = "none";
    });
    [...document.querySelectorAll(".check")].forEach((item) => {
      item.parentNode.parentNode.style.display = "flex";
    });
  }
  crossIconsArray.forEach((item) => {
    item.addEventListener("click", () => {
      removeItem(item);
    });
  });
  checkBoxArray.forEach((item) => {
    item.addEventListener("change", () => {
      checkItem(item);
    });
  });
  todoItemsArray.forEach((item) => {
    onItemHover(item);
  });
  displayItemsLeft();
}

function checkItem(item) {
  if (item.checked == true) {
    item.parentNode.getElementsByTagName("span")[0].classList.add("check");
    if (activeState == true || activeMobileState == true) {
      [...document.querySelectorAll(".check")].forEach((elem) => {
        elem.parentNode.parentNode.style.display = "none";
        displayItemsLeft();
      });
    }
  } else {
    item.parentNode.getElementsByTagName("span")[0].classList.remove("check");
  }
}

function clearCompletedItems() {
  [...document.querySelectorAll(".check")].forEach((item) => {
    item.parentNode.parentNode.remove();
  });
  [...document.querySelectorAll(".check")].forEach((item) => {
    item.parentNode.parentNode.remove();
  });
  displayItemsLeft();
}

function enableDark() {
  let darkMode = localStorage.setItem("darkMode", "true");
  modeDark.style.display = "none";
  modeLight.style.display = "inline";
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");
  all.classList.add("dark-text");
  active.classList.add("dark-text");
  completed.classList.add("dark-text");
  clearCompleted.classList.add("dark-text");
  todoItems.forEach((item) => {
    item.classList.add("dark-items");
  });
  if (completedState == true) {
    [...document.querySelectorAll(".taskComplete")].forEach((item) => {
      item.parentNode.parentNode.classList.add("dark-items");
    });
  }
  typing.classList.add("dark-items");
  dragInfo.classList.add("white");
  input.classList.add("dark-items");
  filterMobile.classList.add("dark-items");
  filterContainer.classList.add("dark-items");
}

function disableDark() {
  let darkMode = localStorage.setItem("darkMode", "false");
  modeDark.style.display = "inline";
  modeLight.style.display = "none";
  body.classList.add("light-mode");
  dragInfo.classList.remove("white");
  filterMobile.classList.remove("dark-items");
  all.classList.remove("dark-text");
  active.classList.remove("dark-text");
  completed.classList.remove("dark-text");
  clearCompleted.classList.remove("dark-text");
  body.classList.remove("dark-mode");
  todoItems.forEach((item) => {
    item.classList.remove("dark-items");
  });
  if (completedState == true) {
    [...document.querySelectorAll(".taskComplete")].forEach((item) => {
      item.parentNode.parentNode.classList.remove("dark-items");
    });
  }
  typing.classList.remove("dark-items");
  input.classList.remove("dark-items");
  filterContainer.classList.remove("dark-items");
}
function onItemHover(item) {
  item.addEventListener("mouseover", function () {
    var cross = item.getElementsByClassName("cross");
    var crossArray = [...cross];
    crossArray[0].style.display = "inline";
  });
  item.addEventListener("mouseout", () => {
    var cross = item.getElementsByClassName("cross");
    var crossArray = [...cross];
    crossArray[0].style.display = "none";
  });
}
function removeItem(item) {
  item.parentNode.remove();
  displayItemsLeft();
}
function filterCompleted() {
  completed.style.color = "hsl(192, 100%, 67%)";
  all.style.color = "";
  active.style.color = "";

  completedMobile.style.color = "hsl(192, 100%, 67%)";
  allMobile.style.color = "";
  activeMobile.style.color = "";

  var el = [...document.getElementsByClassName("item")];
  el.forEach((item) => {
    item.style.display = "none";
  });
  const elem = [...document.querySelectorAll(".check")];
  elem.forEach((item) => {
    item.parentNode.parentNode.style.display = "flex";
    item.classList.add("textDecor");
    item.parentNode.getElementsByTagName("input")[0].checked = false;
  });

  displayItemsLeft();
}
function filterAll() {
  completed.style.color = "";
  all.style.color = "hsl(192, 100%, 67%)";
  active.style.color = "";

  completedMobile.style.color = "";
  allMobile.style.color = "hsl(192, 100%, 67%)";
  activeMobile.style.color = "";
  [...document.getElementsByClassName("item")].forEach((item) => {
    item.style.display = "flex";
  });
  [...document.querySelectorAll(".check")].forEach((item) => {
    item.classList.remove("textDecor");
    item.parentNode.getElementsByTagName("input")[0].checked = true;
  });
  displayItemsLeft();
}
function filterActive() {
  active.style.color = "hsl(192, 100%, 67%)";
  all.style.color = "";
  completed.style.color = "";

  activeMobile.style.color = "hsl(192, 100%, 67%)";
  allMobile.style.color = "";
  completedMobile.style.color = "";

  var element = [...document.getElementsByClassName("item")];
  element.forEach((item) => {
    item.style.display = "flex";
  });
  [...document.querySelectorAll(".check")].forEach((item) => {
    item.parentNode.parentNode.style.display = "none";
  });
  displayItemsLeft();
}
export {
  addItems,
  displayItemsLeft,
  checkItem,
  clearCompletedItems,
  enableDark,
  disableDark,
  onItemHover,
  removeItem,
  filterCompleted,
  filterAll,
  filterActive,
};
