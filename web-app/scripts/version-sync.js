var version_prefix = "v";
var version_number = "0.21.1";
var version_suffix = "alpha";
if (version_suffix == "") {
document.getElementById("version").innerHTML = version_prefix + version_number;
} else {
document.getElementById("version").innerHTML = version_prefix + version_number + " " + version_suffix;
}
//Determine the version number displayed and compare that to the previous version number. Show the what's new box if necessary.
var version_stored = localStorage.getItem('version_stored');
var whatsnewpage = true;
if (version_stored == 'null' || version_stored == null) {
localStorage.setItem('version_stored', version_number);
showWhatsNew();
} else if (version_stored != version_number) {
localStorage.setItem('version_stored', version_number);
showWhatsNew();
}
//Construct the header and list items inside the What's New Box
var whatsnewbox = document.createElement("div")
    whatsnewbox.id = "whats-new-box";
    whatsnewbox.classList = "popup txtclring";
    document.getElementById("whats-new-wrapper").appendChild(whatsnewbox);
var popupTopContent = document.createElement("div");
    popupTopContent.classList = "popup-content bgclring";
    whatsnewbox.appendChild(popupTopContent);
var closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.setAttribute("onclick","document.getElementById('whats-new-box').style.display = 'none';")
    closeBtn.innerHTML = "&times;";
    popupTopContent.appendChild(closeBtn);
    //Place header text here
    var whatsnewheader = "Welcome to the The Helpdesk"
    //Place each bullet point, seperated by a comma, in this array
    var whatsnew = ["Technology help at your fingertips","All-in-one reliable source for technology help and resources","Easy access to help, tips, and resources.","Visual customization","Support for a wide variety of devices and platforms"];
//Construct the box and Add content
var headercontent =  document.createElement("div");
headercontent.className = "popup-header";
headercontent.innerHTML = whatsnewheader;
document.getElementsByClassName("popup-content")[0].appendChild(headercontent);
var popupVersionNumber = document.createElement("div");
popupVersionNumber.id = "popup-version-number";
if (version_suffix == "") {
popupVersionNumber.innerHTML = version_prefix + version_number;
} else {
popupVersionNumber.innerHTML = version_prefix + version_number + " " + version_suffix;
}
document.getElementsByClassName("popup-content")[0].appendChild(popupVersionNumber);
var popupcontent = document.createElement("ul");
popupcontent.id = "popup-header-content";
document.getElementsByClassName("popup-content")[0].appendChild(popupcontent);
for (i=0; i < whatsnew.length; i++) {
var whatsnewlistitem = document.createElement("li");
whatsnewlistitem.innerHTML = whatsnew[i];
popupcontent.appendChild(whatsnewlistitem)
}       
//Trigger for displaying the box
function showWhatsNew() {
document.getElementById('whats-new-box').style.display = 'block';
}