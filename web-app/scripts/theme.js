var theme = localStorage.getItem("theme");
if (theme == "light") {
document.getElementsByTagName("html")[0].style.backgroundColor = '#FFFFFF';
} else if (theme == "dark") {
document.getElementsByTagName("html")[0].style.backgroundColor = '#191923';
} else if (theme == "auto") {
document.getElementsByTagName("html")[0].style.backgroundColor = '#FFFFFF';
}