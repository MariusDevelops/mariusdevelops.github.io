// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});

/*
    Recap:

    Objective: once you press nav icon it shows modal, and once you press x button it removes modal.

    1. Define variables.
    1.1. Target modal button.
    1.2. Target close button.
    1.3. Target modal overlay.

    2. Create a function to functions show and hide modal.
    2.1. Target modal, use method to show classes and add open-modal class.
    2.1. Target modal, use method to show classes and remove open-modal class.
*/
