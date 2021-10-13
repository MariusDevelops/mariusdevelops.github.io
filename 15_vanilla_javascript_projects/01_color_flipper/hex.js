const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // letters represent 10, 11, 12, 13, 14, 15
// #f15025 - example. F would be 15
const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener('click', function(){
let hexColor = '#'; // need to have variable that holds #, use let because con would give an error. Use let when variables change
for(let i = 0; i < 6; i++){ // loop that runs 6 times, because we need 6 values #f15025, every time loop runs adds one value
    hexColor += hex[getRandomNumber()] // gets random number from const hex, + is important, because += --> x += y	x = x + y --> + randomNumber, + randomNumber
}
color.textContent = hexColor; // change text
document.body.style.backgroundColor = hexColor; // change background color
});

function getRandomNumber(){ // generates random number
    return Math.floor(Math.random() * hex.length); // multiply by length of array
}

/*
    Recap:
    
    1. Variable hex array looks different. Letters are same as numbers A = 10, F = 15.
    2. To create hexColor variable we had to use for loop that runs 6 times and every time adds random number.
    3. Everything else is a same as in app.js.
*/