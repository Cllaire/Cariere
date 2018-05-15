function initApp() {

	document.getElementById('ButonSignOut').addEventListener('click', ButonSignOut, false);
	document.getElementById('ButonContact').addEventListener('click', ButonContact, false);
	document.getElementById('ButonAnunturi').addEventListener('click', ButonAnunturi, false);
	document.getElementById('ButonProgramWorkshopuri').addEventListener('click', ButonProgramWorkshop, false);
	
}

function ButonProgramWorkshop() {
	window.location.href = "ProgramWorkshopUtilizator.html";
}

function ButonAnunturi() {
	window.location.href = "AnunturiUtilizator.html";
}

function ButonContact() {
	window.location.href = "ContactUtilizator.html";
}

function ButonSignOut() { 
    firebase.auth().signOut();
    window.location.href = "Homepage.html";
}
window.onload = function() {
	initApp();
}