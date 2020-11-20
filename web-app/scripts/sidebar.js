//First, make sure the sidebar is properly in place
document.getElementsByTagName("body")[0].style.marginLeft = "0px !important";
//Create the content of the sidebar, add the boxes and create the titles
var sidebarContent = document.createElement("div");
    sidebarContent.className = "sidebar-content";
    sidebarContent.id = "sidebar-content";
    document.getElementById("sidebar-container").appendChild(sidebarContent);
//Make back button
var backBtn = document.createElement("button");
    backBtn.classList = "dflt-bg no-out";
    backBtn.setAttribute("onclick","back();");
    backBtn.id = "back-btn";
    backBtn.innerHTML = "Back";
    sidebarContent.appendChild(backBtn);
//box headers
var sidebarHeaders = ["Filter & Search","Theme","Accessibility","Menu","Utilities"];
for (var i=0; i < sidebarHeaders.length; i++) {
var sidebarBox = document.createElement("div");
    sidebarBox.classList = "dflt-bg group-box";
    sidebarBox.id = "no-hvr";
    document.getElementById("sidebar-content").appendChild(sidebarBox);
var sidebarBoxHeader = document.createElement("b");
    sidebarBoxHeader.innerHTML = sidebarHeaders[i];
    document.getElementsByClassName("group-box")[i].appendChild(sidebarBoxHeader);
    }
//Begin constructing the Filter/Search box
var filterSearchBox = document.getElementsByClassName("group-box")[0];
var searchContainer = document.createElement("div");
    searchContainer.id= "search-container";
    searchContainer.className = "dflt-bg";
    filterSearchBox.appendChild(searchContainer);
var searchImage = document.createElement("img");
    searchImage.id = "search-icon";
    searchContainer.appendChild(searchImage);
var searchField = document.createElement("input");
    searchField.placeholder = "Search";
    searchField.type = "text";
    searchField.id = "search-field";
    searchField.className = "txtclring";
    searchContainer.appendChild(searchField);
    searchField.setAttribute("oninput", "search();");
var filterContainer = document.createElement("div");
    filterContainer.id = "filter-container";
    filterContainer.classList = "dflt-bg txtxclring";
    filterSearchBox.appendChild(filterContainer);
var filterImage = document.createElement("img");
    filterImage.id = "filter-icon";
    filterContainer.appendChild(filterImage);
var filterField = document.createElement("select");
    filterField.id = "filter-field";
    filterField.className = "txtclring";
    filterField.setAttribute("onchange","filter();");
    filterContainer.appendChild(filterField);
var filterItems = ["System","App","All"];
    for (var i = 0; i < filterItems.length; i++) {
        var filterItem = document.createElement("option");
        if (filterItems[i] == "All") {
            filterItem.selected = true;
        }
        filterItem.innerHTML = filterItems[i];
        filterField.appendChild(filterItem);
}
//Begin constructing theme box
var themeBox = document.getElementsByClassName("group-box")[1];
var lineBreak1 = document.createElement("br");
    themeBox.appendChild(lineBreak1);
var colorSwitch = document.createElement("button");
    colorSwitch.title = "Change the background color";
    colorSwitch.id = "color-switch";
    colorSwitch.setAttribute("onclick","switch_bg_color()");
    colorSwitch.classList = "dflt-bg no-out";
    themeBox.appendChild(colorSwitch);
var colorBox = document.createElement("div")
    colorBox.id = "color-box";
    colorSwitch.appendChild(colorBox);
var themeSwitch = document.createElement("button");
    themeSwitch.id = "theme-switch";
    themeSwitch.title = "Switch between light and dark mode.";
    themeSwitch.setAttribute("onclick","preTheme();")
    themeSwitch.classList = "dflt-bg no-out";
    themeBox.appendChild(themeSwitch);
var themeSwitchIcon = document.createElement("img");
    themeSwitchIcon.id = "dark-mode";
    themeSwitch.appendChild(themeSwitchIcon);
var themeReset = document.createElement("div");
    themeReset.id = "theme-reset";
    themeReset.setAttribute("onclick","autoTheme();");
    themeReset.classList = "dflt-bg no-out";
    themeBox.appendChild(themeReset);
var themeResetIcon = document.createElement("img");
    themeResetIcon.id = "auto-theme";
    themeReset.appendChild(themeResetIcon);
//Start constructing accessibility box
var accessibilityBox = document.getElementsByClassName("group-box")[2];
var lineBreak2 = document.createElement("br");
    accessibilityBox.appendChild(lineBreak2);
var translucencyWrapper = document.createElement("div");
    translucencyWrapper.classList = "dflt-bg no-out";
    accessibilityBox.appendChild(translucencyWrapper);
var translucentTrigger = document.createElement("input");
    translucentTrigger.type = "checkbox";
    translucentTrigger.id = "translucentTrigger";
    translucentTrigger.setAttribute("onchange","determineTranslucentState();");
    translucencyWrapper.appendChild(translucentTrigger);
    translucencyWrapper.innerHTML = translucencyWrapper.innerHTML + "Reduce Translucency";
var lineBreak3 = document.createElement("br");
    translucencyWrapper.appendChild(lineBreak3);
var boldFontWrapper = document.createElement("div");
    boldFontWrapper.classList = "dflt-bg no-out";
    accessibilityBox.appendChild(boldFontWrapper);
var boldTrigger = document.createElement("input");
    boldTrigger.type = "checkbox";
    boldTrigger.id = "boldTrigger";
    boldTrigger.setAttribute("onchange","determineBoldState();");
    boldFontWrapper.appendChild(boldTrigger);
    boldFontWrapper.innerHTML = boldFontWrapper.innerHTML + "Bold Font"; 
//Start construcing the navigation box
var menuBox = document.getElementsByClassName("group-box")[3];
var menuTopLevelList = document.createElement("ul");
    menuBox.appendChild(menuTopLevelList);
var menuItems = ["Help","Tech Dictionary","Computer Picker","Featured Content"];
for (var i = 0; i < menuItems.length; i++) {
var menuItem = document.createElement("li");
    menuItem.innerHTML = menuItems[i];
    menuItem.className = "menu-item";
    menuTopLevelList.appendChild(menuItem);
}
var helpSubList = document.createElement("ul");
var helpSubListItems = ["iPhone","Mac","Chromebook","Networking","Windows","Android","Smart TVs","Printers","Other"]
for (var i = 0; i < helpSubListItems.length; i++) {
var helpSubListItem = document.createElement("li");
    helpSubListItem.innerHTML = helpSubListItems[i];
    helpSubList.appendChild(helpSubListItem);
}
document.getElementsByClassName("menu-item")[0].appendChild(helpSubList);
//Start constructing the utilities box
var utilitiesBox = document.getElementsByClassName("group-box")[4];
var lineBreak4 = document.createElement("br");
    utilitiesBox.appendChild(lineBreak4);
var newFeaturesTrigger = document.createElement("button");
    newFeaturesTrigger.title = "Show what's new";
    newFeaturesTrigger.id = "v-popup-btn";
    newFeaturesTrigger.setAttribute("onclick","showWhatsNew()");
    newFeaturesTrigger.classList = "dflt-bg no-out";
    utilitiesBox.appendChild(newFeaturesTrigger);
var versionDiv = document.createElement("div");
    versionDiv.id = "version";
    newFeaturesTrigger.appendChild(versionDiv);
var settingsTrigger = document.createElement("button");
    settingsTrigger.title = "Go to settings";
    settingsTrigger.setAttribute("onclick","window.open('/web-app/settings.html','_self')");
    settingsTrigger.classList = "dflt-bg no-out";
    settingsTrigger.id = "settings-link";
    utilitiesBox.appendChild(settingsTrigger);
var settingsIconImage = document.createElement("img");
    settingsIconImage.id = "settings-img";
    settingsIconImage.src = "/web-app/media/images/icons/settings-icon.png";
    settingsTrigger.appendChild(settingsIconImage);
