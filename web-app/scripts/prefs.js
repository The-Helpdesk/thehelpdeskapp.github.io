//Define Variables
var qc_prefs = [];
var page = sessionStorage.getItem("cur-page")
//Get the stored preferences for quick controls
var qc_stored_prefs = JSON.parse(localStorage.getItem("qc"));
//Get IDs of all the quick control items
var qcs = ["search-container","filter-container","v-popup-btn","color-switch","theme-switch","theme-reset"];
//Enter all the Background color options in order
var total_bgs = ["Red","Orange","Green","Blue","Pink","Purple"];
//Get the IDs of the checkboxes for the quick controls
var qc_checks = ["search-check","filter-check","about-check","bg-check","theme-check","auto-check"];

//SETUP NULL SETTINGS
//Items that are null in localStorage will be set to defaults here

//Quick Control Bar defaults
if (qc_stored_prefs === null) {
qc_prefs = ["show", "show", "show", "show", "show","show"];
localStorage.setItem("qc", JSON.stringify(qc_prefs));
for (i = 0; i < 6; i++) {
try{document.getElementById(qc_checks[i]).checked = true;}catch(err){}
}
} else {
changeOnPref();
}

//Change the objects if there is a preference
function changeOnPref() {
for (i = 0; i < 7; i++) {
if (qc_stored_prefs[i] === "hide") {
try{document.getElementById(qcs[i]).style.display = 'none';}catch(err){}
} else if (qc_stored_prefs[i] === "show") {
try {document.getElementById(qcs[i]).style.display = 'inline-block';}catch(err){}
try{document.getElementById(qc_checks[i]).checked = true;}catch(err){}
}}}
function updateColorPrefs() {
color_array = "Set null";
for (i = 0; i < 6; i++) {
var cur_check = document.getElementsByClassName('color-check')[i].checked;
if (cur_check == true) {
color_array[i] = total_bgs[i];
console.log(total_bgs[i] + " checked!");
} 
}
}