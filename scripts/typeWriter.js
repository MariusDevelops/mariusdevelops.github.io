const headingElement = document.getElementById("heading");
const subheadingElement = document.getElementById("subheading");

const headingText = headingElement.textContent;
const subheadingText = subheadingElement.textContent;

headingElement.textContent = "";
subheadingElement.textContent = "";

let headingIndex = 0;
let subheadingIndex = 0;

export function typeWriterHeading() {
  if (headingIndex < headingText.length) {
    headingElement.textContent += headingText.charAt(headingIndex);
    headingIndex++;
    setTimeout(typeWriterHeading, 50);
  } else {
    setTimeout(typeWriterSubheading, 500);
  }
}

export function typeWriterSubheading() {
  if (subheadingIndex < subheadingText.length) {
    subheadingElement.textContent += subheadingText.charAt(subheadingIndex);
    subheadingIndex++;
    setTimeout(typeWriterSubheading, 30);
  }
}

typeWriterHeading();
