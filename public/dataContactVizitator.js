function initApp() {
 
	document.getElementById('ButonAnunturi').addEventListener('click', ButonAnunturi, false);
	document.getElementById('ButonLogin').addEventListener('click', ButonLogin, false);
	document.getElementById('ButonProgramWorkshopuri').addEventListener('click', ButonProgramWorkshopuri, false);
}

function ButonProgramWorkshopuri() {
	window.location.href = "ProgramWorkshopVizitator.html"; 
}

function ButonAnunturi() {
	window.location.href = "AnunturiVizitator.html"; 
}

function ButonLogin() {
	window.location.href = "Homepage.html";
}

window.onload = function() {
	initApp();
}