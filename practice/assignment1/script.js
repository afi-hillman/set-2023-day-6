// console.log("Hello world");

// var name = "hillman";
// let firstName = "afi";
// const birthYear = 1999;

// let firstH1Element = document.querySelector("h1");
// let secondH1Element = document.querySelector("#name");
let parentContainer = document.querySelector("#parentContainer");
let rightNav = document.querySelector("#rightNav");
let model = document.querySelector("#model");

// mutate value of h1Element.innerText
// firstH1Element.innerText = "Welcome to my website";
// secondH1Element.innerText = "testing 123";

// parentContainer.innerText = sampleHTML;
// parentContainer.setAttribute("style", "background-color: red");
// parentContainer.setAttribute("class", "parent-class");
// function anatomy, fx, name , bracket, curly bracket
function changeToRed() {
  parentContainer.setAttribute("class", "parent-class-2");
}
// function changeToRed() {
//   parentContainer.setAttribute("style", "background-color: red");
// }

function changeToBlue() {
  parentContainer.setAttribute("class", "parent-class");
}

changeToRed();
changeToBlue();

function openNav() {
  rightNav.setAttribute("style", "right: 0");
}

function closeNav() {
  rightNav.setAttribute("style", "right: -300px");
}

function openModel(type) {
  if (type === "info") {
    model.setAttribute("style", "background-color: blue; display: flex");
    modelTitle.innerText = "Info";
  } else if (type === "warning") {
    model.setAttribute("style", "background-color: yellow; display: flex");
    modelTitle.innerText = "Warning!";
  } else if (type === "danger") {
    model.setAttribute("style", "background-color: red; display: flex");
    modelTitle.innerText = "Danger!";
  }
}

function closeModel() {
  model.setAttribute("style", "display: none");
}
