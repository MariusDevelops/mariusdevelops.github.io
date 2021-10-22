const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

/*
    Recap:

    Objective: Create three tabs that open on at a time.

    1. Define variables.
    1.1. Article with class about.
    1.2. Target all buttons.
    1.3. Target all articles with class of content.

    2. Funcion to press tabs.
    2.1. Once you click remove active from one button and add to another.
    2.1. Once you click remove active from one article and add to another.
    2.2. Show ID that is pressed.
    */
