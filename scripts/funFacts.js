const funFacts = [
  "Hitchhiked from Lithuania to England.",
  "Swam in the North Sea during winter.",
  "Hosted my own art exhibition.",
  "Created an ice sculpture at the Jelgava Ice Sculpture Festival in Latvia.",
  "Lived in five different countries.",
  "Self-taught developer.",
  "A huge fan of JavaScript.",
  "Painted digital animal portraits.",
  "Volunteered with individuals facing physical and mental disabilities.",
  "Qualified as a bartender.",
  "Worked in a windmill for electricity generation.",
  "Spent time living in Berlin.",
  "Lived in London.",
];

const button = document.getElementById("funFactButton");
const funFactText = document.getElementById("funFact");

button.addEventListener("click", () => {
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
  funFactText.textContent = randomFact;
});

export default funFacts;
