var x =  document.getElementById("screen-menu");
var y = document.getElementById("body1");
var m = document.getElementById("modal");
var b = document.getElementById("backet");

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
    b.style.display = "none";
}
function backetOpen(params) {
    b.style.display = "flex";
}
function dropdownStart() {
  var p = document.getElementById("dropdown-menu").style.display;
  if (p == "none") {
    document.getElementById("dropdown-menu").style.display = "flex";
  } else {
    document.getElementById("dropdown-menu").style.display = "none";
  }
}
function dropdownStart1() {
  var c = document.getElementById("dropdown-menu1").style.display;
  if (c == "block") {
    document.getElementById("dropdown-menu1").style.display = "none";
  } else {
    document.getElementById("dropdown-menu1").style.display = "flex";
  }
}