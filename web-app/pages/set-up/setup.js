console.log("All scripts Successfully linked");
var fadeParamaters;
function fadeTransition() {
var fade0 = document.getElementById(fadeParamaters[0])
var fade1 = document.getElementById(fadeParamaters[1]);
fade0.className = 'transition-to-hidden-content';
setTimeout(function(){ 
document.getElementById(fadeParamaters[0]).className = 'hidden-content';
}, 500);
setTimeout(function(){ 
document.getElementById(fadeParamaters[1]).className = 'invisible-content';
document.getElementById(fadeParamaters[1]).className = 'transition-from-hidden-content';
}, 500)
if (fadeParamaters[2]) {
console.log("FOCUS")
document.getElementById(fadeParamaters[2]).focus();
}
}
function chooseColor() {
document.getElementById('slide2Continue').style.opacity = 1;
document.getElementById("theme-preview").style.background =  'linear-gradient(to bottom right, #191923, ' + choice +')';
}
function chooseTheme() {
document.getElementById('slide2Continue').style.opacity = 1;
var themeBoxes = document.getElementsByClassName('tbl-bx');
var setTo;
if (choice == 'light') {
setTo = "rgba(255,255,255,0.65)";
} else if (choice == 'dark') {
setTo = "rgba(0,0,0,0.65)";
} else if (choice == 'auto') {
document.getElementById("auto-theme-disclaimer-wrapper").style.display = "inline-block";
for (var i = 0; i < themeBoxes.length; i++) {
if (i < 4) {
themeBoxes[i].classList = 'tbl-bx lg-tbl-bx fade-tbl-bx';
} else {
themeBoxes[i].classList = 'tbl-bx fade-tbl-bx';
}
}}
if (choice != 'auto') {
    for (var i = 0; i < themeBoxes.length; i++) {
if (i < 4) {
themeBoxes[i].classList = 'tbl-bx lg-tbl-bx';
} else {
themeBoxes[i].classList = 'tbl-bx';
}
if (choice != 'comp-pref') {
themeBoxes[i].style.background = setTo;
document.getElementById("auto-theme-disclaimer-wrapper").style.display = "none";
} else {
themeBoxes[i].classList = themeBoxes[i].classList + ' compPrefTheme';
}
    }
}
}
function sidebarChoice() {
if (choice == 'sidebar-show') {

} else if (choice == 'sidebar-hide') {

}
}
function continueSetup() {
console.log("continuing")
document.getElementById("auto-theme-disclaimer-wrapper").style.display = "none";
if (choice == 'CustomSetup') {
fadeParamaters = ["slide1","slide2Custom","theme-choice-blue"];
fadeTransition();
} else if (choice === 'blue' || choice === 'red' || choice === 'green' || choice === 'purple' || choice === 'black') {
document.getElementById('slide2Continue').style.opacity = 0;
fadeParamaters = ["color-custom-appearance-choice","theme-custom-appearance-choice","auto-theme"];
fadeTransition();
} else if (choice === 'light' || choice === 'dark' || choice === 'auto' || choice === 'comp-pref') {
fadeParamaters = ["themeContent","sidebarChoices","","true"];
fadeTransition();
}
}
function choiceUpdated() {
document.getElementById('slide1Continue').style.opacity = 1;
}