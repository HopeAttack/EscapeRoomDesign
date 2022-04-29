function myFunction() {
  var x = document.getElementById("FirstVerse");
 x.style.display === "none";
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var allCorrect = 0;
function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "BLUE") {
     
     return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }