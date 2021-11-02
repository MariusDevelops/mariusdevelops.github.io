//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  // once you click button, button gets connected with question and last line of code toggle.
  btn.addEventListener("click", function () {
    // console.log(question);

    // if I open other question, then I close first one.
    questions.forEach(function (item) {
      // if the item does not match artickle where I am clicking a button
      if (item !== question) {
        // then remove that text
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
// get from current target to parent, so you can toogle show-text.

//     question.classList.toggle("show-text");
//   });
// });

/*
    Recap:

    Objective: once you press "+"" icon it shows question text, and once you press "-" button it removes question text.
    If you press new question while first ones text is open, then first ones text is closed automaticly.

    1. Define variables.
    1.1. DOM way: select buttons.
    1.2. Selector way: select questions.

    2. Show and hide question texts and icons (CSS).
    2.1. By default hide question texts when you load page.
    .question-text { display: none; }
    2.2. Show question text.
    .show-text .question-text { display: block; }
    2.3. Hide minus icon by default.
    .minus-icon { display: none; }
    2.4. Show text and show minus icon.
    .show-text .minus-icon { display: inline; }
    2.5. Show text and do not show plus icon.
    .show-text .plus-icon { display: none; }

    3. Two different way to write functions.
    3.1 Traversing the DOM
    3.2 Using selectors inside the element
*/
