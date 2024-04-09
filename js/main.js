// let cont = document.querySelector(".wrapper");
// let task = document.querySelector(".question");
// let yesbtn = document.querySelector(".yes-btn");
// let nobtn = document.querySelector(".no-btn");
// let wraprect = cont.getBoundingClientRect();
// let nobtnrect = nobtn.getBoundingClientRect();

// yesbtn.addEventListener("click", function () {
//   task.innerHTML = "I Love You Too ";
// });

// nobtn.addEventListener("mouseover", function () {
//   let i = Math.floor(Math.random() * (wraprect.width - nobtnrect.width)) + 1;
//   let j = Math.floor(Math.random() * (wraprect.height - nobtnrect.height)) + 1;
//   nobtn.style.left = i + "px";
//   nobtn.style.top = +"px";
// });


// let cont = document.querySelector(".wrapper");
// let task = document.querySelector(".question");
// let yesbtn = document.querySelector(".yes-btn");
// let nobtn = document.querySelector(".no-btn");
// let wraprect = cont.getBoundingClientRect();
// let nobtnrect = nobtn.getBoundingClientRect();

// yesbtn.addEventListener("click", function () {
//   task.innerHTML = "I Love You Too ";
// });

// nobtn.addEventListener("mouseover", function () {
//   let i = Math.floor(Math.random() * (wraprect.width - nobtnrect.width)) + 1;
//   let j = Math.floor(Math.random() * (wraprect.height - nobtnrect.height)) + 1;
//   nobtn.style.left = i + "px";
//   nobtn.style.top = j + "px"; 
// });
// main.js

let cont = document.querySelector(".wrapper");
let task = document.querySelector(".question");
let yesbtn = document.querySelector(".yes-btn");
let nobtn = document.querySelector(".no-btn");
let wraprect = cont.getBoundingClientRect();
let nobtnrect = nobtn.getBoundingClientRect();

yesbtn.addEventListener("click", function () {
  task.innerHTML = "I Love You Too ";
});

nobtn.addEventListener("mouseover", function () {
  let i = Math.floor(Math.random() * (wraprect.width - nobtnrect.width)) + 1;
  let j = Math.floor(Math.random() * (wraprect.height - nobtnrect.height)) + 1;
  nobtn.style.left = i + "px";
  nobtn.style.top = j + "px"; 
});
