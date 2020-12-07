
var filterSearchPrefs = JSON.parse(localStorage.getItem('filterSearchPrefs'))
var themePrefs = JSON.parse(localStorage.getItem('themePrefs'))
var accessibilityPrefs = JSON.parse(localStorage.getItem('accessibilityPrefs'))
var menuPrefs = JSON.parse(localStorage.getItem('menuPrefs'))
var utilitiesPrefs = JSON.parse(localStorage.getItem('utilitiesPrefs'))
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
    //Add the back button as the first thing in the sidebar
    sidebarContent.appendChild(backBtn);
//Set the box headers in an array to be used later
var sidebarHeaders = ["Filter & Search","Theme","Accessibility","Menu","Utilities"];
//For each of the box headers, create a box for it and put it in the box
    for (var i=0; i < sidebarHeaders.length; i++) {
var sidebarBox = document.createElement("div");
    //Add the animation properties and the other styling classes
    sidebarBox.classList = "dflt-bg group-box fadeObjectIn";
    sidebarBox.id = "no-hvr";
    //Add the box as the next item on the list
    document.getElementById("sidebar-content").appendChild(sidebarBox);
//Create a header for the box
var sidebarBoxHeader = document.createElement("b");
    sidebarBoxHeader.innerHTML = sidebarHeaders[i];
    //Add the header to the box and repeat for the next box
    document.getElementsByClassName("group-box")[i].appendChild(sidebarBoxHeader);
    }
//Begin constructing the Filter/Search box
var filterSearchBox = document.getElementsByClassName("group-box")[0];
    if (filterSearchPrefs[0] != false) {
//Start with the search wrapper that contains the input box and icon
var searchContainer = document.createElement("div");
    searchContainer.id= "search-container";
    searchContainer.classList = "input-bg";
    //Add the search container to the box
    filterSearchBox.appendChild(searchContainer);
//Add the Image that sits next to the text input
var searchImage = document.createElement("img");
    searchImage.id = "search-icon";
    //Add the image to the search container
    searchContainer.appendChild(searchImage);
//Start creating the input box for the search feature
var searchField = document.createElement("input");
    searchField.placeholder = "Search";
    searchField.type = "text";
    searchField.id = "search-field";
    searchField.className = "txtclring";
    //Add the search input to the container, it will appear next to the icon
    searchContainer.appendChild(searchField);
    searchField.setAttribute("oninput", "search();");
    }
    if (filterSearchPrefs[1] != false) {
//Start creating a filter field
var filterContainer = document.createElement("div");
    filterContainer.id = "filter-container";
    filterContainer.classList = "input-bg txtxclring";
    //Add the box containing the filter field and icon to the main box
    filterSearchBox.appendChild(filterContainer);
//Start creating the icon that goes next to the filter field
var filterImage = document.createElement("img");
    filterImage.id = "filter-icon";
    //Add the image to the container- but don't set a source, because other scripts handle this
    filterContainer.appendChild(filterImage);
//Start creating the filter field
var filterField = document.createElement("select");
    filterField.id = "filter-field";
    filterField.className = "txtclring";
    filterField.setAttribute("onchange","filter();");
    //Add the filter field to the container box
    filterContainer.appendChild(filterField);
//Set the items that will be in the filter box
var filterItems = ["All","App","System"];
    //For each item, add an option element inside the select element
    for (var i = 0; i < filterItems.length; i++) {
        var filterItem = document.createElement("option");
        //Make sure the all filter is selected by default
        if (filterItems[i] == "All") {
            filterItem.selected = true;
        }
        filterItem.innerHTML = filterItems[i];
        //Add the option to the filter field
        filterField.appendChild(filterItem);
    }
    }
//Begin constructing theme box
var themeBox = document.getElementsByClassName("group-box")[1];
//Create a break after the title to make sure the elements fall on the next line
var lineBreak1 = document.createElement("br");
    //Add the break after the header
    themeBox.appendChild(lineBreak1);
//Start creating the background color box
    if (themePrefs[0] != false) {
var colorSwitch = document.createElement("button");
    colorSwitch.title = "Change the background color";
    colorSwitch.id = "color-switch";
    colorSwitch.setAttribute("onclick","switch_bg_color()");
    colorSwitch.classList = "input-bg no-out";
    //Add the background color box container
    themeBox.appendChild(colorSwitch);
//Start creating the box inside that has a color fill
var colorBox = document.createElement("div")
    colorBox.id = "color-box";
    //Add the colored box to the container
    colorSwitch.appendChild(colorBox);
    }
    if (themePrefs[1] != false) {
//Start making the light/dark mode trigger 
var themeSwitch = document.createElement("button");
    themeSwitch.id = "theme-switch";
    themeSwitch.title = "Switch between light and dark mode.";
    themeSwitch.setAttribute("onclick","preTheme();")
    themeSwitch.classList = "input-bg no-out";
    //Add the button to the parent element
    themeBox.appendChild(themeSwitch);
    }
    if (themePrefs[2] != false) {
//Start making the icon that goes in the button
var themeSwitchIcon = document.createElement("img");
    themeSwitchIcon.id = "dark-mode";
    //Append it without source, other scripts will load it in later
    themeSwitch.appendChild(themeSwitchIcon);
//Start creating the button to reset to auto theme
var themeReset = document.createElement("div");
    themeReset.id = "theme-reset";
    themeReset.setAttribute("onclick","autoTheme();");
    themeReset.classList = "input-bg no-out";
    //Add the theme reset button to the box
    themeBox.appendChild(themeReset);
//Start creating the image for the inside
var themeResetIcon = document.createElement("img");
    themeResetIcon.id = "auto-theme";
    //Append without a source, other scripts will fix it later
    themeReset.appendChild(themeResetIcon);
    }
//Start constructing accessibility box
var accessibilityBox = document.getElementsByClassName("group-box")[2];
//Add a line break after the header
var lineBreak2 = document.createElement("br");
    accessibilityBox.appendChild(lineBreak2);
    if (accessibilityPrefs[0] != false) {
//Add a wrapper/container for the reduce translucency box
var translucencyWrapper = document.createElement("div");
    translucencyWrapper.classList = "input-bg no-out";
    //Add the wrapper to the box
    accessibilityBox.appendChild(translucencyWrapper);
//Create the checkbox and text label for the Reduce Translucency setting
var translucentTrigger = document.createElement("input");
    translucentTrigger.type = "checkbox";
    translucentTrigger.id = "translucentTrigger";
    translucentTrigger.setAttribute("onchange","determineTranslucentState();");
    //Add the checkbox to the wrapper element
    translucencyWrapper.appendChild(translucentTrigger);
    //Add the label text for the checkbox, while preserving the checkbox
    translucencyWrapper.innerHTML = translucencyWrapper.innerHTML + "Reduce Translucency";
//Since the Tranlucent/Bold Font elements are large, seperate them with a line break
var lineBreak3 = document.createElement("br");
    translucencyWrapper.appendChild(lineBreak3);
    }
    if (accessibilityPrefs[1] != false) {
//Start creating a wrapper for the bold font trigger
var boldFontWrapper = document.createElement("div");
    boldFontWrapper.classList = "input-bg no-out";
    //Add the wrapper to the box
    accessibilityBox.appendChild(boldFontWrapper);
//Create the checkbox and text label for the Bold Font setting
var boldTrigger = document.createElement("input");
    boldTrigger.type = "checkbox";
    boldTrigger.id = "boldTrigger";
    boldTrigger.setAttribute("onchange","determineBoldState();");
    //Add the checkbox to the wrapper element
    boldFontWrapper.appendChild(boldTrigger);
    //Add the label text for the checkbox, while preserving the checkbox
    boldFontWrapper.innerHTML = boldFontWrapper.innerHTML + "Bold Font"; 
    }
//Start construcing the navigation box
var menuBox = document.getElementsByClassName("group-box")[3];
//Add the first level list, which contains the major app features
var menuTopLevelList = document.createElement("ul");
    menuBox.appendChild(menuTopLevelList);
//Add the items that are going to go in the list to an array
var menuItems = ["Help","Tech Dictionary","Computer Picker","Featured Content"];
    for (var i = 0; i < menuItems.length; i++) {
//Create a list item using the array
    if (menuPrefs[i] != false) {
var menuItem = document.createElement("li");
    menuItem.innerHTML = menuItems[i];
    menuItem.className = "menu-item";
    menuTopLevelList.appendChild(menuItem);
    }}
if (menuPrefs[0] != false) {
//Create the sub list for the help tab with all the various devices
var helpSubList = document.createElement("ul");
//Add the devices to an array
var helpSubListItems = ["iPhone","Mac","Chromebook","Networking","Windows","Android","Smart TVs","Printers","Other"]
    for (var i = 0; i < helpSubListItems.length; i++) {
//Add one of the array items to the help sub list
var helpSubListItem = document.createElement("li");
    helpSubListItem.innerHTML = helpSubListItems[i];
    helpSubList.appendChild(helpSubListItem);
    }
document.getElementsByClassName("menu-item")[0].appendChild(helpSubList);
}
//Start constructing the utilities box
var utilitiesBox = document.getElementsByClassName("group-box")[4];
var lineBreak4 = document.createElement("br");
    utilitiesBox.appendChild(lineBreak4);
    if (utilitiesPrefs[0] != false) {
var newFeaturesTrigger = document.createElement("button");
    newFeaturesTrigger.title = "Show what's new";
    newFeaturesTrigger.id = "v-popup-btn";
    newFeaturesTrigger.setAttribute("onclick","showWhatsNew()");
    newFeaturesTrigger.classList = "input-bg no-out";
    utilitiesBox.appendChild(newFeaturesTrigger);
var versionDiv = document.createElement("div");
    versionDiv.id = "version";
    newFeaturesTrigger.appendChild(versionDiv);
    }
    if (utilitiesPrefs[1] != false) {
var settingsTrigger = document.createElement("button");
    settingsTrigger.title = "Go to settings";
    settingsTrigger.setAttribute("onclick","window.open('/web-app/settings.html','_self')");
    settingsTrigger.classList = "input-bg no-out";
    settingsTrigger.id = "settings-link";
    utilitiesBox.appendChild(settingsTrigger);
var settingsIconImage = document.createElement("img");
    settingsIconImage.id = "settings-img";
    settingsIconImage.src = "/web-app/media/images/icons/settings-icon.png";
    settingsTrigger.appendChild(settingsIconImage);
    }