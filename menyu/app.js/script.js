var x =  document.getElementById("screen-menu");
var y = document.getElementById("body1");
var m =document.getElementById("modal");

function button(params) {
   if (x.style.display === "none"){
       x.style.display = "block";
   } 
   else{
        x.style.display = "none";
   }
}
function chaqir(params) {
    m.style.display ="flex";
}
function yop(params) {
    m.style.display = "none";
}