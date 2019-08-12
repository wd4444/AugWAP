$(function () {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();

    // $.ajax("guest.ajax", {
    // 	"type": "post",
    // 	"data": {
    //     	"first": first,
    //             "last": last
    // 	}
    // }).done(displayGuests);
    var data = new FormData();
    data.append( "json", JSON.stringify( {
        first: first,
        last: last
    }));
    fetch("guest.ajax", {
        method: 'POST',
        body: JSON.stringify({
            first: first,
            last: last
        }),
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(res => res.json())
    .then(response => displayGuests(response));
}

function displayGuests(data) {
    console.log(data);
    var htmlStr = "";
    $.each(data, function (k, v) {
        htmlStr += v.first + " " + v.last + "<br>";
    });
    $("#guestList").html(htmlStr);
}