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
   if(passwordText == "HAILSTORM") {
     
     alert("correct");
     allCorrect= allCorrect + 1;
     return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }


function colorAnswer1() {
   var password = document.getElementById("passwordBox3");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "THUNDER") {
     
     alert("Correct!! The first letter to the password is'R' ");
     allCorrect= allCorrect + 1;
     return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }



function colorAnswer2() {
   var password = document.getElementById("passwordBox4");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "EARTHQUAKE") {
     
     alert("Correct!! The second letter to the password is'A' ");
     allCorrect= allCorrect + 1;
     return true;
   }
   alert("Correct!! The last letter to the password is'W'");
   return false;
   }

function colorAnswer5() {
   var password = document.getElementById("passwordBox5");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "RAW") {
     return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }