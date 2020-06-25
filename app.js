var toggle=document.querySelector(".check");

toggle.addEventListener('click',()=>{
var bg=document.querySelector('body')
var darkText=document.querySelector('.darktext')
var bigCards=document.getElementsByClassName("bigBox")
var bgCardsText=document.getElementsByClassName("num_followers")
var mainTitle=document.querySelector("h1");
var subTItle= document.querySelector("h2");
var smallBox=document.getElementsByClassName("smallBox")
var views=document.getElementsByClassName("views");
var atributtion=document.querySelector(".attribution")
if(toggle.checked==false){
    bg.style.backgroundColor="white";
    mainTitle.style.color="hsl(230, 17%, 14%)";
    atributtion.style.color="black"
    darkText.style.color="hsl(230, 17%, 14%)"
    subTItle.style.color="hsl(228, 12%, 44%)";
    for(let i=0;i<bigCards.length;i++){
        bigCards[i].style.backgroundColor=" hsl(227, 47%, 96%)";
        bgCardsText[i].style.color="hsl(230, 17%, 14%)"
    }
    for(let i=0;i<smallBox.length;i++){
        smallBox[i].style.backgroundColor=" hsl(227, 47%, 96%)";
        views[i].style.color="hsl(230, 17%, 14%)"
    }

}else{
    bg.style.backgroundColor="hsl(230, 17%, 14%)";
    mainTitle.style.color="white";
    subTItle.style.color="white";
    atributtion.style.color="white"
    darkText.style.color="white"
    for(let i=0;i<bigCards.length;i++){
        bigCards[i].style.backgroundColor=" hsl(228, 28%, 20%)";
        bgCardsText[i].style.color="white"
    }
    for(let i=0;i<smallBox.length;i++){
        smallBox[i].style.backgroundColor=" hsl(228, 28%, 20%)";
        views[i].style.color="white"
    }
}



})