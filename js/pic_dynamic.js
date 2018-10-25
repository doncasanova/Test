var image = ["./images/dixie on a bird.jpg", "./images/dixie.jpg", "./images/food turkey 068.JPG", "./images/skiing.jpg", "./images/SnarlingWolf.jpg"];
addImage();
var imageNumber = 0;
var imageModal = 0 ;
function addImage() {
    for (i = 0; i < image.length; i++) {
        
        $(".insertImagesHere").append(`<div id = "${image[i]}" class="imageContainer"><a href="#" class="" data-toggle="modal" data-target="#largeModal"><img class="imageStyle imageHover pointer"src= "${image[i]}" alt="Italian Trulli"></a></div>`);
        var imageNumber = i;
       
}

}

$(".imageContainer").on("click", function () {
    var imageModal = $('.imageContainer').attr('id');
    console.log(imageModal);
    $(".insertImagesModal").append(`<img class="imageStyle"src= "${imageModal}" alt="Italian Trulli">`);
});


