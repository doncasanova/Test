var image = ["./images/dixie on a bird.jpg", "./images/dixie.jpg", "./images/food turkey 068.JPG", "./images/skiing.jpg", "./images/SnarlingWolf.jpg"];
addImage();

function addImage() {
    for (i = 0; i < image.length; i++) {
    $(".insertImagesHere").append(`<img class="imageStyle imageHover "src= "${image[i]}" alt="Italian Trulli">`);
}

}

