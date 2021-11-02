// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0; // first item (person) in array // global variable

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  //The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
  // console.log("shake and bake");
  //const item = reviews[currentItem]; // access first item 0
  //img.src = item.img; // access image. Select image ID and change it to currentItem
  //author.textContent = item.name; // access author. -//-
  //job.textContent = item.job; // access job. -//-
  //info.textContent = item.text; // access info. -//-
  showPerson(currentItem);
});

// show person based on item
function showPerson(person) {
  // created function to show person so do not need repeat again
  const item = reviews[person]; // if you change person to currentItem, then you do not need to use everywhere showPerson(currentItem); it can be showPerson();
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    // if currentItem is more then 4 - 1 = 3 start from 0 - first item.
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem); // showPerson(currentItem); can be changed to showPerson();
});

// show random person
randomBtn.addEventListener("click", function () {
  // console.log("hello");
  currentItem = Math.floor(Math.random() * reviews.length);
  // console.log(currentItem);
  showPerson(currentItem);
});

/*
    Recap:

    Objective: review content changes once you press button next, previous or suprise me.

    1. Define variables.
    1.1. First variable with array of objects.
    1.2. review information variables.
    1.3. Three button variables.

    2. Select review information.
    2.1. Variable for current review = 0
    2.1. Load all content with DomContentLoaded and show person(function) with set review number.
    2.2. Create person function, that will be same for all reviews and will change according to review number.

    3. Select buttons.
    3.1. Show next person button. Moves reviews number +1.
    3.2. Show previous person button. Moves reviews number -1.
    3.3. Show random person button. Moves torandom review using Math.random method.
*/
