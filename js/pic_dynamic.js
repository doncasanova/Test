var image = ["./images/dixie on a bird.jpg", "./images/dixie.jpg", "./images/food turkey 068.JPG", "./images/skiing.jpg", "./images/SnarlingWolf.jpg"];
addImage();

function addImage() {
    for (i = 0; i < image.length; i++) {
    $(".insertImagesHere").append(`<div class="col-3 test"><img class="imageStyle imageHover "src= "${image[i]}" alt="Italian Trulli"><h1>Heading</h1><p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p><button id="myBtn" onclick="myFunction()">Pause</button></div>`);
}

}

