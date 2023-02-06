var randomNumber = Math.floor(Math.random()*6)+1;
var randomImage = "images/dice" + randomNumber + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage);

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage1);

if (randomNumber === randomImage1){
    document.querySelector("h1").innerHTML="MATCH IS DRAW";
} else if (randomNumber > randomNumber1){
    document.querySelector("h1").innerHTML="Player1 is winner";
} else {
    document.querySelector("h1").innerHTML="player2 is winner"
}