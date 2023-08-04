//generating random number 
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
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
