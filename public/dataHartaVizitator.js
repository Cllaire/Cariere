function initApp() {

	document.getElementById('ButonSignOut').addEventListener('click', ButonSignOut, false);
	document.getElementById('ButonContact').addEventListener('click', ButonContact, false);
	document.getElementById('ButonAnunturi').addEventListener('click', ButonAnunturi, false);
	document.getElementById('ButonProgramWorkshopuri').addEventListener('click', ButonProgramWorkshop, false);
	
}

function ButonProgramWorkshop() {
	window.location.href = "ProgramWorkshopVizitator.html";
}

function ButonAnunturi() {
	window.location.href = "AnunturiVizitator.html";
}

function ButonContact() {
	window.location.href = "ContactVizitator.html";
}

function ButonSignOut() { 
    firebase.auth().signOut();
    window.location.href = "Homepage.html";
}
window.onload = function() {
	initApp();
}