//Arrays that fill in content in For loops
var scoreBoxCriteria = ["User Experience","Design","Simplicity","Accessibility", "Overall Rating"];
var detailsKeyColors = ["#27A74A","#D28929","#D73A49","0366D6","6D5090"];
var detailsKeyTxt = ["Yes","Somewhat","No","Platform-dependent","In beta"];
var additionalFeatures = ["Dark mode","One time payment","Subscription payment","XX","XX","XX","XX","XX","XX","XX"];
var leftorright;
//Main Content
var reportCardContent = document.createElement("div");
    reportCardContent.className = "report-card";
    document.getElementById("report-card-container").appendChild(reportCardContent);
var reportCardHeader = document.createElement("div");
    reportCardHeader.className = "report-card-header";
    reportCardHeader.innerHTML = "Software Name";
    document.getElementsByClassName("report-card")[0].appendChild(reportCardHeader);
var reportCardDescription = document.createElement("div");
    reportCardDescription.className = "report-card-subttl";
    reportCardDescription.innerHTML = "Description here";
    document.getElementsByClassName("report-card")[0].appendChild(reportCardDescription);
var reportCardDescriptionLink = document.createElement("div");
    reportCardDescriptionLink.innerHTML = "...";
    var readMore = document.createElement("a");
    readMore.href = "google.com";
    readMore.innerHTML = "Read more";
    readMore.className = "read-more"
    reportCardDescriptionLink.appendChild(readMore);
    reportCardDescription.appendChild(reportCardDescriptionLink);
function addBubble() {
    var scoreBox = document.createElement("div");
        scoreBox.className = "score-box";
    var scoreBoxSubheader = document.createElement("span");
        scoreBoxSubheader.innerHTML = scoreBoxCriteria[a];
        scoreBoxSubheader.className = "report-card-subheader";
        scoreBox.appendChild(scoreBoxSubheader);
    var scoreBoxBubblesContainer = document.createElement("div");
        scoreBoxBubblesContainer.className = "bubbles";
        scoreBox.appendChild(scoreBoxBubblesContainer);
            for (var b=0; b<5; b++) {
                var scoreBoxBubble = document.createElement("span");
                    scoreBoxBubble.className = "bubble";
                    scoreBoxBubble.id = "bubble-" + a + b;
                    scoreBoxBubblesContainer.appendChild(scoreBoxBubble)
            }

    reportCardContent.appendChild(scoreBox);
}
for (var a = 0; a < 4; a++) {
    addBubble();
}
var additionalDetailsBox = document.createElement("div")
    additionalDetailsBox.className = "details-box";
    reportCardContent.appendChild(additionalDetailsBox);
    var detailsSubheader = document.createElement("div");
        detailsSubheader.classList = "details-subheader report-card-subheader";
        detailsSubheader.innerHTML = "Additional Details";
        additionalDetailsBox.appendChild(detailsSubheader);
    var detailsKey = document.createElement("div");
        detailsKey.className = "details-key";
        for (var c=0; c < 5; c++) {
            var keyDetailRatingBox = document.createElement("div");
                    keyDetailRatingBox.className = "key-detail-rating-box"
                    keyDetailRatingBox.style.backgroundColor = detailsKeyColors[c];
                    detailsKey.appendChild(keyDetailRatingBox);
                var keyDetailTxt = document.createElement("div");
                    keyDetailTxt.className = "key-detail-txt";
                    keyDetailTxt.innerHTML = detailsKeyTxt[c];
                    detailsKey.appendChild(keyDetailTxt);
    }
    additionalDetailsBox.appendChild(detailsKey);
    function addDetails() {
        for (var d=0; d<10; d++) {
            var detailRow = document.createElement("div");
                detailRow.className = "detail-row";
                    var detailRatingBox = document.createElement("div");
                        detailRatingBox.className = "detail-rating-box";
                        detailRatingBox.style.backgroundColor = "black";
                        detailRow.appendChild(detailRatingBox);
                    var detailTxt = document.createElement("div");
                        detailTxt.className = "detail-txt";
                        detailTxt.innerHTML = additionalFeatures[d];
                        detailRow.appendChild(detailTxt);
                        if (d < 5) {
                        detailsLeft.appendChild(detailRow);
                        } else {
                        detailsRight.appendChild(detailRow);
                        }
        }
    }
    var detailsLeft = document.createElement("div");
    detailsLeft.className = "details-left";
    additionalDetailsBox.appendChild(detailsLeft);
    var detailsRight = document.createElement("div");
    detailsRight.className = "details-right";
    additionalDetailsBox.appendChild(detailsRight);
    addDetails();
    addBubble();
//Constructing Box Complete
var onScoreBox;
var bubbles;
var element;
function changeBubbles(onScoreBox) {
if (bubbles == "1") {
element = "bubble-" + onScoreBox + "4";
document.getElementById(element).style.backgroundColor = "black"; 
} else if (bubbles == "2") {
for (var i=4; i>2; i--) {
element = "bubble-" + onScoreBox + i.toString();
document.getElementById(element).style.backgroundColor = "black";
}
} else if (bubbles == "3") {
for (var i=4; i>1; i--) {
element = "bubble-" + onScoreBox + i.toString();
document.getElementById(element).style.backgroundColor = "black";
}
} else if (bubbles == "4") {
for (var i=4; i>0; i--) {
element = "bubble-" + onScoreBox + i.toString();
document.getElementById(element).style.backgroundColor = "black";
}
} else if (bubbles == "5") {
for (var i=0; i<5; i++) {
element = "bubble-" + onScoreBox + i.toString();
document.getElementById(element).style.backgroundColor = "black";
}
}
}
 fetch('reportcarddata.json').then(function (response) { 
                return response.json();
            console.log("Fetch Success")
            })
            .then(function (data) {
                
                onScoreBox = "4";
                bubbles = "4"; 
                changeBubbles(onScoreBox);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });