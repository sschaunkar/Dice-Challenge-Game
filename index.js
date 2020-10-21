
var randomNumber1= Math.floor(Math.random()*6)+1; //gives random number b/w 1 and 6 for 1st dice
var randomNumber2= Math.floor(Math.random()*6)+1; //gives random number b/w 1 and 6 for 2nd dice
var randomDiceImage="dice"+randomNumber1+".png"; 
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource="./images/"+randomDiceImage; // Ist image attribute
var randomImageSource2="./images/"+randomDiceImage2;   // 2nd image Attribte
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player 1 wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins"
}//if player 2 wins
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins"
} //For Draw
else{
    document.querySelector("h1").innerHTML="Draw"
}