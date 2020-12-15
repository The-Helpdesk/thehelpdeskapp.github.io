var accessibility = JSON.parse(localStorage.getItem("accessibility"));
if (accessibility == 'null' || accessibility == null || accessibility == undefined || accessibility == "undefined") {
accessibility = [false,false,false];
var prepAccessibility = JSON.stringify(accessibility);
localStorage.setItem("accessibility",prepAccessibility);
}
function reduceTranslucency() {
accessibility[0] = true;
prepAccessibility = JSON.stringify(accessibility);
localStorage.setItem("accessibility",prepAccessibility)
function adjustTranslucencySetting() {
var changeProp = ["dflt-bg","cat-box","no-hvr:hover","question","round-img-corners","sidebar-container"];
for (var a = 0; a < changeProp.length; a++) {
    for (var i = 0; i < document.getElementsByClassName(changeProp[a]).length; i++) {
var exsistingClasses = document.getElementsByClassName(changeProp[a])[i].classList;
if (exsistingClasses.contains("reduceTranslucency") == false) {
document.getElementsByClassName(changeProp[a])[i].classList = exsistingClasses + " reduceTranslucency";
    }}}
}
adjustTranslucencySetting();
}
function revertTranslucency() {
accessibility[0] = false;
prepAccessibility = JSON.stringify(accessibility);
localStorage.setItem("accessibility",prepAccessibility);
var changeProp = ["dflt-bg","cat-box","no-hvr:hover","question","round-img-corners","sidebar-container"];
for (var a = 0; a < changeProp.length; a++) {
    for (var i = 0; i < document.getElementsByClassName(changeProp[a]).length; i++) {
var exsistingClasses = document.getElementsByClassName(changeProp[a])[i].classList;
if (exsistingClasses.contains("reduceTranslucency") == true) {
if (changeProp[a] == 'dflt-bg') {
document.getElementsByClassName(changeProp[a])[i].classList = changeProp[a] + ' no-out';
} else {
document.getElementsByClassName(changeProp[a])[i].classList = changeProp[a];
}}}
}}
function boldFont() {
accessibility[1] = true;
prepAccessibility = JSON.stringify(accessibility);
localStorage.setItem("accessibility",prepAccessibility);
document.getElementsByTagName("body")[0].style.fontWeight = "bold";
for (var i = 0; i < document.getElementsByTagName("button"); i++) {
document.getElementsByTagName("button")[i].style.fontWeight = "bold";
}
}
function revertBoldFont() {
accessibility[1] = false;
prepAccessibility = JSON.stringify(accessibility);
localStorage.setItem("accessibility",prepAccessibility);
document.getElementsByTagName("body")[0].style.fontWeight = "400";
for (var i = 0; i < document.getElementsByTagName("button"); i++) {
document.getElementsByTagName("button")[i].style.fontWeight = "regular";
}
}
if (accessibility[0] == true) {
document.getElementById("translucentTrigger").checked = true;
document.addEventListener("load", reduceTranslucency());
} if (accessibility[1] == true) {
document.getElementById("boldTrigger").checked = true;
boldFont();
}
function checkTranslucency() {
if (accessibility[0] == true) {
reduceTranslucency();
}
}
function determineTranslucentState() {
if (document.getElementById("translucentTrigger").checked == true) {
reduceTranslucency();
} else if (document.getElementById("translucentTrigger").checked == false) {
revertTranslucency();
}
}
function determineBoldState() {
if (document.getElementById("boldTrigger").checked == true) {
boldFont();
} else if (document.getElementById("boldTrigger").checked == false) {
revertBoldFont();
}
}