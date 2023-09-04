
// for img1

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // generating random number 
var randomDiceimg = "dice" + randomNumber1 + ".png"; 
var randomimgsource = "images/" + randomDiceimg; 
var img1 = document.querySelectorAll("img")[0]; 
img1.setAttribute("src", randomimgsource); 



// for img2 
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
var randomDiceimg = "dice" + randomNumber2 + ".png"; 
var randomimgsource = "images/" + randomDiceimg; 
var img2 = document.querySelectorAll("img")[1]; 
img2.setAttribute("src", randomimgsource); 




if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="player 1 won"; 
}
else if ( randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 won";
}
else {
    document.querySelector("h1").innerHTML = "DRAW";
}
