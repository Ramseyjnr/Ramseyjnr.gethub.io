$(document).ready(function () {
    let flickrUrl =
      "https://api.flickr.com/services/feeds/photos_public.gne" +
      "?id=82407828@N07" +
      "&format=json" +
      "&jsoncallback=?" +
      "&tags=vectacorpbuilding";
  
    $.ajax({
      type: "get",
      url: flickrUrl,
      dataType: "json",
  
      success: function (data) {
        //   console.log("! loaded");
  
        const posts = data.items;
        $.each(posts, function (key, value) {
          let image = "<img src=" + value.media.m + ">";
          let dataLightbox = " data-lightbox=building ";
          let dataTitle = " data-title=" + value.date_taken + " ";
  
          let link =
            "<a href=" +
            value.media.m +
            dataLightbox +
            dataTitle +
            ">" +
            image +
            "</a>";
  
          $("#new_building").append(link);
        });
      },
    });
  });