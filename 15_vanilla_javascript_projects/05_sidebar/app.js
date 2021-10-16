const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar"); // toogle is a shourtcut for if/else statement
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

/*
    Recap:

    Objective: once you press nav icon it shows list, and once you press it again it removes list.
    Once you press X button sidebar hides.

    1. Define variables.
    1.1. Target sidebar-toggle button.
    1.2. Target close button.
    1.3. Target all sidebar content.

    2. Create a function to show or hide list.
    2.1. One option is to use if/else statements to show or hide links.
    2.1. Another option is to use toggle method.
    
    3. Create one more function to hide sidebar by pressing close button.
*/
