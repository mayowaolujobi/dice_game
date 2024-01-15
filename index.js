//for player 1
let randomNumber1 = Math.floor((Math.random() * 6) + 1); // 1 - 6
let randomImgSource1 = "images/dice" + randomNumber1 + ".png";  // images/dice1.png - images/dice6.png
//document.querySelector(".img1").setAttribute("src", randomDiceImg);
let image1 = document.querySelector(".img1");
image1.setAttribute("src", randomImgSource1);





//for player 2
let randomNumber2 = Math.floor((Math.random() * 6) + 1);  // 1 - 6
let randomImgSource2 = "images/dice" + randomNumber2 + ".png";  // images/dice1.png - images/dice6.png
//document.querySelector(".img2").setAttribute("src", randomDiceImg2);
let image2 = document.querySelector(".img2");
image2.setAttribute("src", randomImgSource2);



// if statement for player 1 / player 2 status
if(randomNumber1  === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}else if(randomNumber1  > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}

