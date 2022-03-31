const $ = function(id) 
{
    return document.getElementById(id);
}

document.addEventListener("DOMContentLoaded", () => 
{
    //caption h2 element
    const caption = $("caption");
    //img element to show
    const mainImage = $("main-image");

    //get a tags in ul
    const links = $("image-list").getElementsByTagName('a');

    //process image links
    const imageCache = [];
    let image = null;

    for (let link of links)
    {
        image = new Image();
        image.src = link.href;
        image.alt = link.title;

        imageCache[imageCache.length] = image;
    }

    //Slide show
    let imageCounter = 0;
    setInterval( () => 
    {
        //Get current image index
        imageCounter = (imageCounter + 1) % imageCache.length;

        //Get image from array
        image = imageCache[imageCounter];

        mainImage.src = image.src;
        mainImage.alt = image.alt;
        caption.textContent = image.alt;
    }, 3000); //3 Second interval 


})