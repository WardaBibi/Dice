
function exampleFunction() {

  var count1=Math.floor(Math.random()*6)+1;
  document.querySelector(".img1").setAttribute("src","images/dice"+count1+".png");

  var count2=Math.floor(Math.random()*6)+1;
  document.querySelector(".img2").setAttribute("src","images/dice"+count2+".png");
  if(count1>count2)
  {
    document.querySelector("h1").innerHTML="Player 1 WINNER";
  }
  else if(count1===count2)
  {
    document.querySelector("h1").innerHTML="TIE";
  }else
  {
    document.querySelector("h1").innerHTML="Player 2 WINNER";
  }

}
exampleFunction();
