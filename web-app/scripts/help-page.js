
var dvc_catogory = ["Mobile","Desktop","Networking", "Smart TVs","Printers"];
var chcs = document.getElementsByClassName("optn-btn-ttl");
var chcArray = dvc_catogory;
var iteration = 0;
for (var i=0; i < chcArray.length; i++) {
chcs[i].innerHTML = chcArray[i];
}
function btnupdt() {
var subttleBtnFill = document.getElementById("optn-btn-ttl-" + optnchc).innerHTML;
document.getElementById("choice-title").innerHTML = subttleBtnFill
}
function btnhvr() {
var hoverBtn = document.getElementById('optn-btn-ttl-' + optnhvrchc).innerHTML;
if (hoverBtn != '') {
findHelpData('hover');
}
}
function findHelpData(pass) {
var toDisplay;
var keyContent;
     fetch('/web-app/data/help-tree.json')
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
function findValues(obj, key){
	return findValuesHelper(obj, key, []);
}

function findValuesHelper(obj, key, list) {
  if (!obj) return list;
  if (obj instanceof Array) {
    for (var i in obj) {
        list = list.concat(findValuesHelper(obj[i], key, []));
    }
    return list;
  }
  if (obj[key]) list.push(obj[key]);

  if ((typeof obj == "object") && (obj !== null) ){
	  var children = Object.keys(obj);
	  if (children.length > 0){
	  	for (i = 0; i < children.length; i++ ){
	        list = list.concat(findValuesHelper(obj[children[i]], key, []));
	  	}
	  }
  }
  return list;
}
if (pass == 'cnt') {
var selectedBtn = document.getElementById('optn-btn-ttl-' + optnchc).innerHTML;
    if (selectedBtn == '') {
        console.log("Selected Button had no value")
        document.getElementById("invalid-choice").className = 'transition-from-hidden-content'; 
            setTimeout(function(){ 
                document.getElementById("invalid-choice").className = 'invisble-content'; 
            }, 2000);
    } else {
        toDisplay = findValues(data, selectedBtn);
        keyContent = Object.keys(toDisplay[0][0])
        keyContent = keyContent.sort();
        for (var i=0; i < 10; i++) {
            document.getElementById("optn-btn-ttl-" + i).classList = 'optn-btn-ttl invisible-content';
        }}
        setTimeout(function() {
            if (keyContent != "ARTICLE") {
                for (var i=0; i < keyContent.length; i++) {
                    document.getElementById('optn-btn-ttl-' + i).innerHTML = keyContent[i];
                }
                var numOfBoxToClear = 10 - keyContent.length;
                for (var i = keyContent.length; i< numOfBoxToClear; i++) {
                    document.getElementById('optn-btn-ttl-' + i).innerHTML = '';
                }
                document.getElementById("choice-title").innerHTML = '';
            } else {
                console.log(keyContent[0])
            }
        }, 600);
        setTimeout(function(){ 
            for (var i=0; i < 10; i++) {
                document.getElementById("optn-btn-ttl-" + i).className = 'transition-from-hidden-content'; 
            }
        }, 600);
    } else if (pass == 'hover') {
        var hoverBtn = document.getElementById('optn-btn-ttl-' + optnhvrchc).innerHTML;
        document.getElementById("choice-hover-title").innerHTML = hoverBtn;
        toDisplay = findValues(data, hoverBtn);
        keyContent = Object.keys(toDisplay[0][0])
        keyContent = keyContent.sort();
        var keyContentSubtract = keyContent.length - 1;
        for (var i = 0; i < keyContent.length; i++) {
            var choiceHoverList = document.getElementById("choice-hover-list");
            if (keyContentSubtract != i && i > 0) {
                choiceHoverList.innerHTML = choiceHoverList.innerHTML += ', ' + keyContent[i];
            } else if (i == 0) {
                choiceHoverList.innerHTML = keyContent[i];
            } else  if (keyContentSubtract == i) {
                if (keyContent.length > 2) {
                choiceHoverList.innerHTML = choiceHoverList.innerHTML += ', & ' + keyContent[i];
                } else {
                choiceHoverList.innerHTML = choiceHoverList.innerHTML += ' & ' + keyContent[i];
                }
            }
        }
document.getElementById("choice-hover-title").className = 'quick-shown-content';
document.getElementById("choice-hover-list").className = 'quick-shown-content';
    }
    })
.catch(function (err) {
    console.log(err);
  });}
function hvrStp() {
document.getElementById("choice-hover-title").className = 'quick-invis-content';
document.getElementById("choice-hover-list").className = 'quick-invis-content';
document.getElementById("choice-hover-title").innerHTML = '';
document.getElementById("choice-hover-list").innerHTML = '';
}
