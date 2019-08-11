$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    var htmlStr = "";
    $.each(data, function (k, v) {
        htmlStr += v.first + " " + v.last +"<br>";
    });
    $("#guestList").html(htmlStr);
}