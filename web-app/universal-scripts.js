var last_page = sessionStorage.getItem("last-page");
if (last_page == null) {
document.getElementById('back-btn').style.display = 'none';
}
function back() {
window.open(last_page,'_self');
}
function search() {
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
function showWhatsNew() {
document.getElementById('whats-new-box').style.display = 'block';
}
var version_stored = localStorage.getItem('version_stored');
var whatsnewpage = true;
var version_displayed = "1.2";
if (version_stored == 'null' || version_stored == null) {
localStorage.setItem('version_stored', version_displayed);
showWhatsNew();
} else {
if (version_stored != version_displayed) {
localStorage.setItem('version_stored', version_displayed);
showWhatsNew();
}
}
fetch('whats-new.json')
            .then(function (response) { 
                return response.json();
            })
            .then(function (data) {
                for (var i = 2; i < 9; i++) {
                var li = document.createElement("li")
                var data_string = "data[0].line" + i;
                console.log(data[0].line + i)
                console.log(data[0].line1)
                li.innerHTML = data[0].data;
                document.getElementById("popup-header-content").appendChild(li)
                }
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });