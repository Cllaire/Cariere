function initApp() {
 
	document.getElementById('ButonAnunturi').addEventListener('click', ButonAnunturi, false);
	document.getElementById('ButonSignOut').addEventListener('click', ButonSignOut, false);
	document.getElementById('ButonProgramWorkshopuri').addEventListener('click', ButonProgramWorkshopuri, false);
}

function ButonProgramWorkshopuri() {
	window.location.href = "ProgramWorkshopUtilizator.html"; 
}

function ButonAnunturi() {
	window.location.href = "AnunturiUtilizator.html"; 
}

function ButonSignOut() { 
    firebase.auth().signOut();
    window.location.href = "Homepage.html";
}

window.onload = function() {
	initApp();
}