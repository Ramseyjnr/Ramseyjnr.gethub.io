$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "./components/notice.json",
        beforeSend: function () {
            $("#reminder").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            $("#reminder").html("");

            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#reminder").append(

                        "<h1>" + value.title+ "</h1><p>"+ value.info+"</p>"

                    );

                });
            });


        },
    });
});
