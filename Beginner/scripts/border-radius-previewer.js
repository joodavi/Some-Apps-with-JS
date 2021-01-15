var img = document.getElementById("img");

var button_5px = document.getElementById("5px");
var button_10px = document.getElementById("10px");
var button_25px = document.getElementById("25px");
var button_50px = document.getElementById("50px");
var button_100px = document.getElementById("100px");

button_5px.addEventListener('click', () => {
  document.getElementById("img").style.borderRadius = "5px";
})

button_10px.addEventListener('click', () => {
  document.getElementById("img").style.borderRadius = "10px";
})

button_25px.addEventListener('click', () => {
  document.getElementById("img").style.borderRadius = "25px";
})

button_50px.addEventListener('click', () => {
  document.getElementById("img").style.borderRadius = "50px";
})

button_100px.addEventListener('click', () => {
  document.getElementById("img").style.borderRadius = "100px";
})

var button_2porct = document.getElementById("2%");
var button_5porct = document.getElementById("5%");
var button_10porct = document.getElementById("10%");
var button_25porct = document.getElementById("25%");
var button_50porct = document.getElementById("50%");

button_2porct.addEventListener('click', () => {
  document.getElementById("img").style.borderRadius = "2%";
})

button_5porct.addEventListener('click', () => {
  document.getElementById("img").style.borderRadius = "5%";
})

button_10porct.addEventListener('click', () => {
  document.getElementById("img").style.borderRadius = "10%";
})

button_25porct.addEventListener('click', () => {
  document.getElementById("img").style.borderRadius = "25%";
})

button_50porct.addEventListener('click', () => {
  document.getElementById("img").style.borderRadius = "50%";
})

var buttonDefault = document.getElementById("default");

buttonDefault.addEventListener('click', () => {
  document.getElementById("img").style.borderRadius = "0px";
})