var myForm = document.getElementById('myForm');
var wordInput = document.getElementById('wordInput');
var answer = document.getElementById('answer');

myForm.addEventListener('submit', function(e){
  e.preventDefault();
 
  var userInput = wordInput.value;
    
  answer.innerHTML = isPalindrome(userInput);
  
});

function isPalindrome(userInput){
  
  for ( i = 0; i <= ( userInput.length / 2 ); i++ ) {
    if ( userInput[i] != userInput[(userInput.length - 1 - i)] ) {
      return false;
    } 
  }
  return true;
}

