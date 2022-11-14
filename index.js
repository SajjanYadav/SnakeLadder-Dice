var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomimagesource = "images/dice"+randomNumber1+".png";
var image1 = document.querySelector("img.img1");
image1.setAttribute("src" , randomimagesource);

var randomimagesource2 = "images/dice"+randomNumber2+".png";
var image2 = document.querySelector("img.img2");
image2.setAttribute("src" , randomimagesource2);


if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Same Move";
}else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Lucky";
}else{
  document.querySelector("h1").innerHTML="Player 2 Lucky";
}
