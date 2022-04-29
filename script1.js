const letters = ["J", "E", "R", "I", "C", "H" ,"O"];

const password = ["*","*","*","*","*","*","*"];


var found = 0;
var clickedJ = false;
var clickedE = false;
var clickedR = false;
var clickedI = false;
var clickedC = false;
var clickedH = false;
var clickedO = false;

function foundI(){
if (clickedI == false) {
delete letters[3];
password [0]= "b";
clickedI= true;  
}
alert("You have found the letter I. You have letters" + letters +"left" + "The password is " + '"'+ password + '"');
 
}

function foundR(){
  if (clickedR == false) {
delete letters[2];
password [1]= "e";
clickedR= true;
  }
alert("You have found the letter R. You have letters" + letters +"left" + "The password is " + '"'+ password + '"');
}

function foundH(){
  if (clickedH == false) {
delete letters[5];
password [2]= "l";
clickedH= true;
  }
alert("You have found the letter H. You have letters" + letters +"left" + "The password is " + '"'+ password + '"');
}

function foundC(){
  if (clickedC == false) {
delete letters[4];
password [3]= "i";
clickedC= true;
  }
alert("You have found the letter C. You have letters" + letters +"left" + "The password is " + '"'+ password + '"');
}

function foundJ(){
  if (clickedJ == false) {
delete letters[0];
password [4]= "e";
clickedJ= true;
  }
alert("You have found the letter J. You have letters" + letters +"left" + "The password is " + '"'+ password + '"');
}

function foundO(){
  if (clickedO == false) {
delete letters[6];
password [5]= "v";
clickedO= true;
  }
alert("You have found the letter O. You have letters" + letters +"left" + "The password is " + '"'+ password + '"');
}

function foundE(){
  if (clickedE == false) {
delete letters[1]
password [6]= "e";
found = found +1;
clickedE= true;
  }
alert("You have found the letter E. You have letters" + letters +"left" + "The password is " + '"'+ password + '"');
}



function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }

}

function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "BELIEVE") {
     return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }