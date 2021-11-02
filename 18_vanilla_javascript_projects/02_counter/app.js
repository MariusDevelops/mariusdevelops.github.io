// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value"); // selected number that changes
const btns = document.querySelectorAll(".btn"); // selected all three buttons
// console.log(btns); -> in dev tools console: NodeList

btns.forEach(function (btn) {
  // forEch method gives access to each button no matter how you call parameter (btn)
  btn.addEventListener("click", function (e) {
    // (e) access event object
    // console.log(e.currentTarget.classList); -> shows targeted button and class lits
    const styles = e.currentTarget.classList; // created styles variable. Every time pressed on button will show what classes are selected
    if (styles.contains("decrease")) {
      // if variable contains specific class then I am clicking on decrese, increse or reset
      count--; // decrese count by one
    } else if (styles.contains("increase")) {
      count++; // increse count by one
    } else {
      count = 0; // esle last option = 0
    }

    if (count > 0) {
      value.style.color = "green"; // if number is + color it green
    }
    if (count < 0) {
      value.style.color = "red"; // if number is - color it red
    }
    if (count === 0) {
      value.style.color = "#222"; // if number is 0 color it black
    }
    value.textContent = count; // change number value = to the count
  });
});

/*
    Recap:

    Objective: Once you press one of three buttons. Value decreses, increses or resets to 0. Value text color changes acording to positive/negative number.

    1. Define variables.
    1.1. Initial count variable to 0.
    1.2. Select value number text that changes.
    1.3. Select all three buttons.

    2. Select all buttons.
    2.1. Function forEch get access to all buttons.
    2.1. For each button added event listener to click it.
    2.2. Create new variable using (e) event object to get current target class (decrese, increse, reset)

    3. Connect value with count variable so you can see changing number (value.textContent = count;).
    
    4. Write if esle statements to incerese, decrese, reset or change value color.
    4.1. Increse, decrese, reset value number.
    4.2. Change value color to green, red, black.
*/
