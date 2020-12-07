var last_page = sessionStorage.getItem("last-page");
if (last_page == null) {
document.getElementById('back-btn').style.display = 'none';
}
function back() {
window.open(last_page,'_self');
}
function search() {
console.log("Running search")
var cur_search_term = document.getElementById("search-field").value;
if (cur_search_term == "") {
    for (i=0;i<28;i++) {
            var cur_item = document.getElementsByClassName('search-term')[i].innerHTML;
            document.getElementsByClassName("cat-box")[i].style.display = 'inline-block';
    }
}
for (i=0;i<28;i++) {
    var cur = document.getElementsByClassName('search-term')[i];
    var cur_item = cur.innerHTML || cur.textContent;
    cur_search_term = cur_search_term.toLowerCase();
    cur_item = cur_item.toLowerCase();
    var term_match = cur_item.includes(cur_search_term);
        if (term_match == false) {
            document.getElementsByClassName("cat-box")[i].style.display = 'none';
        }
    }
}