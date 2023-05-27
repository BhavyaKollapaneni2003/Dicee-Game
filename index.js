var n1=Math.floor(Math.random()*6)+1;
var randomimg1="dice"+n1+".png";
var randimgsour1="images/"+randomimg1;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randimgsour1);

var n2 =Math.floor(Math.random()*6)+1;
var randomimg2="dice"+n2+".png";
var randimgsour2="images/"+randomimg2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randimgsour2);
if(n1>n2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins";
    
}
else if(n1<n2){
    document.querySelector("h1").innerHTML="🚩Player 2 wins";
    
}
else{
    document.querySelector("h1").innerHTML="Draw!";
    
}