var page = sessionStorage.getItem("last-page");
function DarkModeIcons() {
var page = sessionStorage.getItem("last-page");
console.log(page)
    console.log('icons dark');
try {
document.getElementById('dark-mode').src = '/web-app/media/images/icons/dark-mode/dark-mode-on.png';
document.getElementById('auto-theme').src = '/web-app/media/images/icons/dark-mode/auto-theme-white.png';
document.getElementById('search-icon').src = '/web-app/media/images/icons/quick-toggles/search-icon-white.png';
document.getElementById('filter-icon').src = '/web-app/media/images/icons/quick-toggles/filter-icon-white.png';
} catch(err) {
console.log("Error in DarkModeIcons(): " + err);
}
if (page == '/web-app/index.html') {
var folder = "/web-app/media/images/homepage-icons/white/"
var file_names = ["get-help","tech-dictionary","partner","edu-enterprise","computer-picker","todays-content","settings"];
for (i=0;i<7;i++) {
console.log(folder + file_names[i] + '-black.png')
document.getElementById(file_names[i] + '-icon').src = folder + file_names[i] + '-white.png';
}
}}
DarkModeIcons();
function LightModeIcons() {
var page = sessionStorage.getItem("last-page");
console.log('icons light')
try {
document.getElementById('dark-mode').src = '/web-app/media/images/icons/dark-mode/dark-mode-off.png';
document.getElementById('auto-theme').src = '/web-app/media/images/icons/dark-mode/auto-theme-black.png';
document.getElementById('search-icon').src = '/web-app/media/images/icons/quick-toggles/search-icon-black.png';
document.getElementById('filter-icon').src = '/web-app/media/images/icons/quick-toggles/filter-icon-black.png';
} catch(err) {
console.log("Error in LightModeIcons(): " + err);
}
if (page == '/web-app/index.html') {
var folder = "/web-app/media/images/homepage-icons/black/"
var file_names = ["get-help","tech-dictionary","partner","edu-enterprise","computer-picker","todays-content","settings"];
for (i=0;i<7;i++) {
console.log(folder + file_names[i] + '-black.png')
document.getElementById(file_names[i] + '-icon').src = folder + file_names[i] + '-black.png';
}
}}
//Storing Theme
//Get theme pref from localstorage
var theme_stored = localStorage.getItem('theme_stored');
var themevar;
function autoTheme() {
//Make sure the theme storage is set to no-pref and hide the reset to auto button
localStorage.setItem('theme_stored','no_pref');
document.getElementById('theme-reset').style.visibility = 'hidden';
//Get current time
var cur_date = new Date();
var cur_hours = cur_date.getHours();
//If it's later than 8PM, set the theme to dark
if (cur_hours <= 20) {
//Use the value light so the function switches the theme to dark
themevar = 'light';
DarkModeIcons();
theme();
} 
else {
themevar = 'dark';
LightModeIcons();
theme();
}}
//If user hasn't visited page, or overrided the automatic theme, execute the following
//to auto determine the theme

if (theme_stored == 'null' || theme_stored == 'no-pref' || theme_stored == null) {
//Set the item in local storage to no pref for new users/users resetting
localStorage.setItem('theme_stored', 'no-pref');
//Run function to auto determine theme
autoTheme();
} else {
//Code for if the user has overrided the auto theme
if (theme_stored == 'dark') {
document.getElementById('theme-reset').style.visibility = 'visible';
DarkModeIcons();
themevar = 'light';
theme();
} else if (theme_stored == 'light') {
document.getElementById('theme-reset').style.visibility = 'visible';
LightModeIcons();
themevar = 'dark';
theme();
}}
//Function for determining new theme
function theme() {
//if the theme is light, switch it to dark
if (themevar == 'light') { 
themevar = 'dark';
document.getElementById('dark-stylesheet').disabled = false;
document.getElementById('light-stylesheet').disabled = true;
DarkModeIcons();
} 
//if the theme is dark, switch it to light
else {
themevar = 'light';
document.getElementById('dark-stylesheet').disabled = true;
document.getElementById('light-stylesheet').disabled = false;
LightModeIcons();
}
}
//Preprocessing function for button click
function preTheme() {
//Now that the user has overridedd auto theme, show the reset button
document.getElementById('theme-reset').style.visibility = 'visible';
//Set local storage based on exsisting theme and switch the theme
if (themevar == 'dark') {
localStorage.setItem('theme_stored','light');
theme();
} else {
localStorage.setItem('theme_stored','dark');
theme();
}
}
//Preset colors for the themes into an Array
var bgs = JSON.parse(localStorage.getItem("bg_array"));
//Color-theme Defaults
if (bgs === null || bgs == '"null"') {
var bgs = ['red','green','blue','purple','grey'];
localStorage.setItem("bg_array", JSON.stringify(bgs));
if (page == 'settings.html') {
for (i = 0; i < bgs.length; i++) {
document.getElementsByClassName('color-check')[i].checked = 'true';
}}
} else {
var color_array = JSON.parse(localStorage.getItem("bg_array"));
}
//Set the background color index
var curbg = 0;
//Fetch the color from the last session
var bg_stored = localStorage.getItem('bg_stored');
//If the user doesn't have a prefrence set the storage to that
if (bg_stored == 'null' || bg_stored == null || bg_stored == 'no-pref') {
localStorage.setItem('bg_stored','no-pref');
//Default color if localSotrage value is no-pref
var bgcolor = 'blue';
//set the theme color to the default
set_bg_color(bgcolor);
} else {
//If the user has a color preference, set the color to that
bgcolor = bg_stored;
set_bg_color(bgcolor);
}
//Code for clicking the button and moving on to the next color
function switch_bg_color() {
//Switch the index in the array to the next one
curbg = curbg + 1;
//Set the index back to 0 if user reaches last color
if (curbg == bgs.length) {
curbg = 0;
}
//store the bg color as an index
bgcolor = bgs[curbg];
//Set the new color into the localStorage for next time
localStorage.setItem('bg_stored', bgcolor);
console.log(localStorage.getItem('bg_stored'))
set_bg_color();
}
function set_bg_color() {
//Set the colors of the gradient
document.getElementById('html').style.background =  'linear-gradient(to bottom right, #191923, ' + bgcolor +')';
//Set the color of the button
document.getElementById('color-box').style.backgroundColor = bgcolor;
}