$(document).ready(function () {
    $.ajax({
      type: "get",
      url: "facultyList.json",
      dataType: "json",
  
      success: function (data) {
        $.each(data, function () {
          $.each(this, function (key, value) {
            let image = "<img src=" + value.image + ">";
            let fullname = "<h2>" + value.full_name + "</h2>";
            let department = "<h3>" + value.department + "</h3>";
            let bio = "<p>" + value.bio + "</p>";
  
            $("#faculty").append(image);
            $("#faculty").append(fullname);
            $("#faculty").append(department);
            $("#faculty").append(bio);
          });
        });
      },
    });
  });
  
  