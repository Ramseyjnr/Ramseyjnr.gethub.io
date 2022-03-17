$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "aboutus.json",
        beforeSend: function () {
            $("#about").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            $("#about").html("");

            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#about").append(

                        "<h1>" + value.title+ "</h1><p>"+ value.info+"</p>"

                        );

                });
            });


        },
    });
});




