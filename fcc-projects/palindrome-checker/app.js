// declare variables
// The getElementById() method returns the element that has the ID attribute with the specified value.
var button = document.getElementById("button");
var result = documetn.getElementById("result");

// The addEventListener() method attaches an event handler to the specified element.
// button.addEventListener('click', function(){ })
button.addEventListener("click", () => { // arrow function syntac also valiable choice

    result.innerHTML = "Loading... Please wait";

    var timeout = setTimeout(() => {
        var input = document.getElementById("userInput").value;
        // test it in console
        console.long(input)

    },900) // time in milli seconds. 0.9 seconds.
});