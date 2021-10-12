// variables
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; // colors array with four values
const btn = document.getElementById("btn"); // target button ID
const color = document.querySelector(".color"); // target color class

btn.addEventListener('click', function(){ // what happens then you press button
    // console.log(document.body) checks that he have body in console

// get random number between 0 - 3 (0 = green)
    const randomNumber = getRandomNumber(); // creates new return variable with new function
    // console.log(randomNumber);
    // creates random number, but it can be specific for ex.: =2
    // getRandomNumber() is s funcion written below

    document.body.style.backgroundColor = colors[randomNumber];
    // targets document, body, then looks for style, backgroundColor
    // to colors array and variable randomNumber
    // so HTML background = color in array. Now its random. But it can be 0, 1, 2 or 3
    color.textContent = colors[randomNumber];
    // selects color to display what is bacground color
    // selects class and changes its text to colors array value
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
    // Nath.random() = 0.999 but we need actual number
    // so Math.random() * colors.length = 0.999 x colors.length = number of array values
    // but we need round up number so we use Math.floor, rounds up to closest intinger 0.9 rounds up to 0
}

/* recap:

    1. Define variables.
    1.1. Colors you will use for background.
    1.2. Target button that will need get activated.
    1.3. Target color span you use to show text color.

    2. Function what happens when you press button.
    2.1. Function returns new variable with one more random number function.
    2.2. Function changes background color to random colors number.
    2.3. Function changes text to random colors number.

    3. One more function to get random number. Used for 2.1., variable.
*/