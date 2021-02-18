function iconsPullRequest(icnsToPull) {
    fetch('/web-app/data/icns_link.json')
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    for (var i = 0; i < icnsToPull.length; i++) {
    var iconGrab = icnsToPull[i];
        data[0][iconGrab]
    }
    })
  .catch(function (err) {
    console.log(err);
  });
            
}