//Player1
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomImage = "dice" + randomNumber1 + ".png";
var imageSource = "images/"+ randomImage;
document.querySelector(".img1").setAttribute("src", imageSource);

//Player2
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImage2 = "dice" + randomNumber2 + ".png";
var imageSource2 = "images/"+ randomImage2;
document.querySelector(".img2").setAttribute("src", imageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}

