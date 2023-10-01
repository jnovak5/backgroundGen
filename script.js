var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];

console.log('answer:', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");

function pageLoad() {
	setGradient();
}

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomHex() {
	var hexNumbers = "0123456789ABCDEF";
	var randomNumber = "#"

	for (var i=0; i < 6; i++) {
		randomNumber += hexNumbers[(Math.floor(Math.random() * 16))];
	}

	return randomNumber;
}

function randomGradient() {
	color1.value = randomHex();
	color2.value = randomHex();
	
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

pageLoad();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("click", randomGradient);