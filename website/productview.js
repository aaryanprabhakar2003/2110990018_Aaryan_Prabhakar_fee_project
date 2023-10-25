var productimg=document.getElementById("productimg");
var smallimg=document.getElementsByClassName("small-img");

smallimg[0].onclick=function(){
    productimg.src=smallimg[0].src;
   
}
smallimg[1].onclick=function(){
    productimg.src=smallimg[1].src;
   
}
smallimg[2].onclick=function(){
    productimg.src=smallimg[2].src;
   
}

function changeborder(){
    document.getElementById("64gb").style.border="solid 1px white";
    document.getElementById("128gb").style.border="none";
    document.getElementById("256gb").style.border="none";
    document.getElementById("64gb").style.cursor="pointer";
    document.getElementById("512gb").style.border="none";
    
    
}
function changeborder1(){
    document.getElementById("128gb").style.border="solid 1px white";
    document.getElementById("64gb").style.border="none";
    document.getElementById("256gb").style.border="none";
    document.getElementById("512gb").style.border="none";
}
function changeborder2(){
    document.getElementById("256gb").style.border="solid 1px white";
    document.getElementById("64gb").style.border="none";
    document.getElementById("128gb").style.border="none";

    document.getElementById("512gb").style.border="none";


}
function changeborder3(){
    document.getElementById("512gb").style.border="solid  1px white";
    document.getElementById("64gb").style.border="none";
    document.getElementById("128gb").style.border="none";
    document.getElementById("256gb").style.border="none";

}
function midnight(){
    document.getElementById("midnight").style.border="solid 1px white";
    document.getElementById("starlight").style.border="none";
    document.getElementById("purple").style.border="none";
    document.getElementById("yellow").style.border="none";

}
function starlight(){
    document.getElementById("starlight").style.border="solid 1px white";
    document.getElementById("midnight").style.border="none";
    document.getElementById("purple").style.border="none";
    document.getElementById("yellow").style.border="none";

}
function purple(){
    document.getElementById("purple").style.border="solid 1px white";
    document.getElementById("midnight").style.border="none";
    document.getElementById("starlight").style.border="none";
    document.getElementById("yellow").style.border="none";

}
function yellow(){
    document.getElementById("yellow").style.border="solid 2px white";
    document.getElementById("starlight").style.border="none";
    document.getElementById("midnight").style.border="none";
    document.getElementById("purple").style.border="none";

}

function buynow() {
         window.location.href = "buynow.html";
     }
     function addtocart() {
         window.location.href = "addtocart.html";
     }
     function laptopaddtocart() {
        window.location.href="laptopaddtocart.html"
         // body...
     }
       function telivisionaddtocart() {
        window.location.href="telivisionaddtocart.html"
         // body...
     }
