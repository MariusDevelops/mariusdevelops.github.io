// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList); // shos all class list of links
  // console.log(links.classList.contains("random")); // random do not contain in class list so we get false
  // console.log(links.classList.contains("links")); // links contain in class list so we get true in console
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links"); // toogle is a shourtcut for if/else statement
});

/*
    Recap:

    Objective: once you press nav icon it shows list, and once you press it again it removes list.

    1. Define variables.
    1.1. Nav icon selected
    1.2. Nav list class selected.

    2. Create a function to show or hide list.
    2.1. One option is to use if/else statements to show or hide links.
    2.1. Another option is to use toggle method.
*/
