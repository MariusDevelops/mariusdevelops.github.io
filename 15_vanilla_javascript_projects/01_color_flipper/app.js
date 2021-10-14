// variables
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; // colors array with four values
const btn = document.getElementById("btn"); // target button ID
const color = document.querySelector(".color"); // target color class

btn.addEventListener("click", function () {
  // what happens then you press button
  // console.log(document.body) checks that he have body in console

  // get random number between 0 - 3 (0 = green)
  const randomNumber = getRandomNumber(); // creates new variable with new function, basicly... value for colors variable
  // console.log(randomNumber);
  // creates random number, but it can be specific for ex.: =2
  // getRandomNumber() is s funcion written below

  document.body.style.backgroundColor = colors[randomNumber]; // colors[2]
  // targets document, body, then looks for style to change backgroundColor to random color
  // so HTML background = color in array. Now its random. But it can be 0, 1, 2 or 3 or just color name.

  color.textContent = colors[randomNumber]; // colors[2]
  // selects html class .color and changes its text to random colors array value
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
  // Nath.random() = 0.999 but we need actual number
  // so Math.random() * colors.length = 0.999 x colors.length = number of array values
  // but we need round up number so we use Math.floor, rounds up to closest intinger 0.9 rounds up to 0
}

/*
    Recap:

    Objective: Once you press button, background and text changes to random color.

    1. Define variables.
    1.1. Colors you will use for a background.
    1.2. Target button that gets activated.
    1.3. Target text that shows background color.

    2. Function what happens when you press button.
    2.1. Create variable with random number.
    2.2. Propert that changes background to random color.
    2.3. Property that changes text to random color name.

    3. Function to get random number. Used for 2.1., variable.
*/
